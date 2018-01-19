<template>
  <svg :width="svgWidth" :height="svgHeight">
    <g v-for="country in topoCountry">
        <path :d="country.d" :id="country.location" class="town" :style="{fill: fill, stroke: stroke}">
            <title>{{country.location}}</title>
        </path>
    </g>
  </svg>
</template>

<script>

import * as d3 from 'd3'
import * as topojson from 'topojson-client'
import Pingtung from '../json/towns-10013.json'

export default {
    name: 'Pingtung',
    props: ['fill', 'stroke', 'width', 'height'],
    data: function(){
        return{
            Pingtung: Pingtung
        }
    },
    computed: {
        svgWidth: function(){
            return this.width || 375
        },
        svgHeight: function(){
            return this.height || 667
        },
        topoCountry: function(){

            var topo = topojson.feature(this.Pingtung, this.Pingtung.objects.map)

            var prj = d3.geoMercator().fitSize([this.svgWidth, this.svgHeight], topo)
                
            var path = d3.geoPath().projection(prj)
        
            var temp = []
            for(var i in topo.features){
                temp.push({
                d: path(topo.features[i]),
                location: topo.features[i].properties.name,
                })
            }
            return temp
        }
    }
}
</script>

<style scoped>

.town{
    fill: #FFFFFF;
    stroke: #000000;
    stroke-width: 0.5;
}

</style>
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
import Matsu from '../json/towns-09007.json'

export default {
    name: 'Matsu',
    props: ['fill', 'stroke', 'width', 'height'],
    data: function(){
        return{
            Matsu: Matsu
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

            var topo = topojson.feature(this.Matsu, this.Matsu.objects.map)

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
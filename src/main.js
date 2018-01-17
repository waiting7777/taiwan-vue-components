import Country from './components/Country.vue'

const TaiwanSvg = {
    install: function(Vue){
        Vue.component('Country', Country)
    }
    
}

export default TaiwanSvg

export { Country }

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(TaiwanSvg)
}
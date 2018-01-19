import Country from './components/Country.vue'
import Ilan from './components/Ilan.vue'
import Hsinchu from './components/Hsinchu.vue'
import HsinchuCity from './components/HsinchuCity.vue'
import Miaoli from './components/Miaoli.vue'
import Changhua from './components/Changhua.vue'
import Nantou from './components/Nantou.vue'
import Yunlin from './components/Yunlin.vue'
import Chiayi from './components/Chiayi.vue'
import ChiayiCity from './components/ChiayiCity.vue'
import Pingtung from './components/Pingtung.vue'
import Taitung from './components/Taitung.vue'
import Hualien from './components/Hualien.vue'
import Penghu from './components/Penghu.vue'
import Keelung from './components/Keelung.vue'
import Taipei from './components/Taipei.vue'
import Kaohsiung from './components/Kaohsiung.vue'
import NewTaipei from './components/NewTaipei.vue'
import Taichung from './components/Taichung.vue'
import Tainan from './components/Tainan.vue'
import Taoyuan from './components/Taoyuan.vue'
import Matsu from './components/Matsu.vue'
import Kinmen from './components/Kinmen.vue'

const TaiwanSvg = {
    install: function(Vue){
        Vue.component('Country', Country)
        Vue.component('Ilan', Ilan)
        Vue.component('Hsinchu', Hsinchu)
        Vue.component('HsinchuCity', HsinchuCity)
        Vue.component('Miaoli', Miaoli)
        Vue.component('Changhua', Changhua)
        Vue.component('Nantou', Nantou)
        Vue.component('Yunlin', Yunlin)
        Vue.component('Chiayi', Chiayi)
        Vue.component('ChiayiCity', ChiayiCity)
        Vue.component('Pingtung', Pingtung)
        Vue.component('Taitung', Taitung)
        Vue.component('Hualien', Hualien)
        Vue.component('Penghu', Penghu)
        Vue.component('Keelung', Keelung)
        Vue.component('Taipei', Taipei)
        Vue.component('Kaohsiung', Kaohsiung)
        Vue.component('NewTaipei', NewTaipei)
        Vue.component('Taichung', Taichung)
        Vue.component('Tainan', Tainan)
        Vue.component('Taoyuan', Taoyuan)
        Vue.component('Matsu', Matsu)
        Vue.component('Kinmen', Kinmen)
    }
    
}

export default TaiwanSvg

export { Country, Ilan, Hsinchu, HsinchuCity, Miaoli, Changhua, Nantou, Yunlin, Chiayi, ChiayiCity, Pingtung, Taitung, Hualien, Penghu, Keelung, Taipei, Kaohsiung, NewTaipei, Taichung, Tainan, Taoyuan, Matsu, Kinmen }

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(TaiwanSvg)
}
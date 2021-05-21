import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contract: '',
    musics:[
        {
            name: 'Music A',
            description: 'An apple a day keeps the doctor away.',
            price:'0.05',
            image:'MusicA.jpg',
            units: 0
        },
        {
            name:'Music B',
            description:'Lady Gaga Albums.',
            price:'0.05',
            image:'MusicB.jpg',
            units: 0
        },
        {
            name:'Music C',
            description:'Maroon5 Albums.',
            price:'0.05',
            image:'MusicC.jpg',
            units: 0
        }
    ]    
  },
  mutations: {
    setMusicUnits (state, fruitUnits) {
      const music = state.musics.filter((item)=>(item.name==fruitUnits.name))
      if (music && music.length > 0) {
        music[0].units = fruitUnits.units
      }
    },
    setContract (state, address) {
      state.contract = address
    },
    clearMusicUnits (state) {
      const newMusics = state.musics.map(music => {
        music.units = 0
        return music
      })
      state.musics = newMusics
    }
  },
  getters: {
    totalAmount: state => {
      return state.musics.reduce((accumulator, currentValue) => (accumulator + Number(currentValue.units) * parseFloat(currentValue.price)), 0)
    },
    getMusicUnits: (state) => (name) => {
      const music = state.musics.filter((item)=>(item.name==name))
      if (music && music.length > 0) {
        return music[0].units
      }
      return 0     
    }
  },
  actions: {

  }
})

<template>
    <div>
        <!-- <div class="mb-4">
            <router-link to="/">Home</router-link> |
            <router-link to="/payments">Payments</router-link>
        </div> -->
        <div>
            <MusicDetail v-for="(music, index) in musics" :key="index" :name="music.name" :description="music.description" :price="music.price" v-bind:image="music.image" />
            <form v-on:submit.prevent="">
                <div v-if="address" class='row mt-4 bg-light text-left p-4 border border-secondary'>
                    <div class='col-sm text-right'>
                        <h3>Total {{ total }} Music Coin</h3>
                    </div>
                    <div class='col-sm text-left'>
                        <button class="btn btn-primary" @click="pay">Proceed to payment</button>
                    </div>
                </div>
            </form>
            <div v-if="!address" class='text-center mt-4 p-4 bg-light border border-secondary'>
                <router-link to="/payments"><h5>Please, load or create a Payments contract </h5></router-link>
            </div>
        </div>
        <div v-if="loading" class="loading d-flex justify-content-center align-items-center">
            <div class="spinner-border"  role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
import MusicDetail from './MusicDetail.vue'
import { mapState } from 'vuex' // Creates getter for properties in vuex state
import PaymentsService from '../domain/PaymentsService.js'

export default {
    name: 'Basket',
    props: {},
    computed: mapState({
        musics: state => state.musics,
        total: state => {
            return state.musics.reduce((accumulator, currentValue) => (accumulator + Number(currentValue.units) * parseFloat(currentValue.price)), 0)
        },
        address: state => state.contract
    }),
    data: function() {
        return {
            loading: false
        }
    },
    components: {
        MusicDetail
    },
    methods: {
        pay: async function() {
            const address = this.$store.state.contract
            const reference = 'SC-' + new Date().getTime()
            const amount = this.$store.getters.totalAmount
            
            const paymentsService = new PaymentsService()

            this.loading = true
            try {
                await paymentsService.pay(address, reference, amount)
            } catch (e) {
                console.log(e)
            }
            this.loading = false
            this.$store.commit('clearMusicUnits')
            this.$router.push('/payments')
        }
    }
}
</script>

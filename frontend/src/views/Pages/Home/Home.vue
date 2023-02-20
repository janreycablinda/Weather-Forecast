<template>
  <div>
    <input type="text" v-model="city" @keydown="findCity()" placeholder="Search for city..">

    <ul>
      <li @click="selectedCity(city)" v-for="(city, index) in cities" :key="index"><a href="#">{{city.name}}, {{city.country}}</a></li>
    </ul>
  </div>
</template>
<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  name: 'HomeView',
  data() {
    return {
      city: ''
    }
  },
  computed: {
    ...mapGetters({
      cities: "city/cities"
    })
  },
  methods: {
    ...mapActions({
      filterCity: "city/filterCity",
      fetchWeather: "weather/fetchWeather"
    }),
    findCity(){
      this.filterCity(this.city);
    },
    selectedCity(data){
      this.fetchWeather(data).then(() => {
        this.$router.push({
            name: "Weather"
        })
      });
    }
  },
  created(){
    // this.filterCity();
  }
}
</script>
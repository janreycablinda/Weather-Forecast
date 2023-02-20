<template>
    <div>
      <table class="border-2 border-black">
        <tr class="bg-gray-600 text-left">
          <th colspan="6">Date</th>
        </tr>
        <tr class="bg-gray-400 text-left border-2 border-black">
          <th>(mm/dd/yyyy)</th>
          <th>Temp(F)</th>
          <th>Description</th>
          <th>Main</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
        <tr>
          <td>{{date}}</td>
          <td>{{weather.data.main.temp}}</td>
          <td>{{weather.data.weather[0].description}}</td>
          <td>{{weather.data.weather[0].main}}</td>
          <td>{{weather.data.main.pressure}}</td>
          <td>{{weather.data.main.humidity}}</td>
        </tr>
      </table>
      <router-link to="/home"><a href="#" @click="logOut()" class="mt-2 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Back</a></router-link>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  name: 'HomeView',
  data(){
    return {
      date: new Date().toLocaleDateString()
    }
  },
  computed: {
    ...mapGetters({
      weather: "weather/weather"
    })
  },
  created(){
    console.log(this.weather.data);
    // this.filterCity();
  }
}
</script>
<template>
  <div id="app">
    <div class="relative bg-white">
      <div class="mx-auto px-4 border-b-2">
        <div class="flex items-center py-2 justify-between border-gray-100 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <img class="h-10" src="@/assets/images/cloud.png"/>
            <span class="text-black font-bold mt-2">WEATHER FORCAST</span>
          </div>
          <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a href="#" @click="logOut()" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Logout</a>
          </div>
        </div>
      </div>
    </div>
    <div class="grid h-screen place-items-center">
      <router-view/>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex';

export default {
  methods:{
    ...mapActions({
      signOut: "auth/signOut"
    }),
    logOut(){
      this.signOut();
    }
  }
}
</script>>
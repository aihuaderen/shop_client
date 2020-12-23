<template>
  <div>
    <Header/>
      <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import {getCategoryList} from './api'

export default {
  name: 'App',

  mounted(){
    getCategoryList().then( result =>{
      console.log('result',result);
    })
  },

  components:{
    Header,
    Footer
  },
  
}
</script>

<style scoped>

</style>

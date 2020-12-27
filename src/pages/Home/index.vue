<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floors" :key="floor.id" :floor='floor'></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from './ListContainer/ListContainer'
import TodayRecommend from './TodayRecommend/TodayRecommend'
import Rank from './Rank/Rank'
import Like from './Like/Like'
import Floor from './Floor/Floor'
import Brand from './Brand/Brand'

import {mapState} from 'vuex'



export default {
  name: 'Home',

  mounted(){
    this.$store.dispatch('getRecommends'),
    this.$store.dispatch('getFloors'),
    this.$store.dispatch('getLike'),
    this.$store.dispatch('getRank')
  },

  computed:{
    ...mapState({
      floors: state => state.home.floors,
    })
  },

  components:{
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  }

  
}
</script>

<style lang="less" scoped>
</style>


<style lang="stylus" scoped>

</style>
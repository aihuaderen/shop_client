/* 
管理首页相关数据的vuex子模块
*/

import { 
    reqCategoryList, 
    reqBannerList,
    reqFloors,
    reqRecommends,
    reqLike,
    reqRank 
} from "@/api"

const state = {
    categoryList: [],
    bannerList: [],
    floors:[],
    recommends: [],
    like: [],
    rank: []
}
const mutations = {

    //接受保存分类列表
    RECEIVE_CATEGORY_LIST (state, categoryList){
        state.categoryList = categoryList.splice(0,15)
    },

    //接受保存广告轮播列表
    RECEIVE_BANNER_LIST(state, bannerList){
        state.bannerList = bannerList
    },

    // 接收保存推荐列表
    RECEIVE_RECOMMENDS (state, recommends) {
      state.recommends = recommends
    },
    /* 
    接收保存楼层列表
    */
    RECEIVE_FLOORS (state, floors) {
      state.floors = floors
    },
    /* 
    接收喜欢列表
    */
    RECEIVE_LIKE (state, like) {
      state.like = like
    },
    /* 
    接收保热门列表
    */
   RECEIVE_RANK (state, rank) {
    state.rank = rank
  }


}
const actions = {

    //获取三级分类列表的异步action
    async getCategoryList ({commit}){

        const result = await reqCategoryList()

        if (result.code === 200) {
            
            const categoryList = result.data
            commit('RECEIVE_CATEGORY_LIST',categoryList)
        }
    },

    //获取广告轮播列表的异步action
    async getBannerList ({commit}) {
        console.log("getBannerList()");
        // 发送异步ajax请求
        const result = await reqBannerList()
        //如果请求成功了, 得到数据提交给mutation
        if (result.code===200){
            const bannerList = result.data
            commit('RECEIVE_BANNER_LIST', bannerList)
        }
    },

    //获取推荐列表的异步action
    async getRecommends ({commit}) {
            console.log("getRecommends()");
            // 发送异步ajax请求
            const result = await reqRecommends()
            //如果请求成功了, 得到数据提交给mutation
            if (result.code===200){
                const recommends = result.data
                commit('RECEIVE_RECOMMENDS', recommends)
            }
        },

        // 获取楼层列表的异步action
    async getFloors ({commit}) {
        console.log("getFloors()");
        // 发送异步ajax请求
        const result = await reqFloors()
        //如果请求成功了, 得到数据提交给mutation
        if (result.code===200){
            const floors = result.data
            commit('RECEIVE_FLOORS', floors)
        }
    },

    // 获取喜欢列表的异步action
    async getLike ({commit}) {
        console.log("getLike()");
        // 发送异步ajax请求
        const result = await reqLike()
        //如果请求成功了, 得到数据提交给mutation
        if (result.code===200){
            const like = result.data
            commit('RECEIVE_LIKE', like)
        }
    },
        
    // 获取热门列表的异步action
    async getRank ({commit}) {
        console.log("getRank()");
        // 发送异步ajax请求
        const result = await reqRank()
        //如果请求成功了, 得到数据提交给mutation
        if (result.code===200){
            const rank = result.data
            commit('RECEIVE_RANK', rank)
        }
    }
    
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}
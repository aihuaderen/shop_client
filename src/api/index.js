/* 
包含应用的所有接口的接口请求函数
  函数内部调用ajax函数发送请求
  函数返回的是promise对象
*/
import ajax from './ajax'
import mockAjax from './mockAjax'

/* 
首页三级分类
/api/product/getBaseCategoryList  GET
*/

export function reqCategoryList() {
    // return ajax.get('/product/getBaseCategoryList')
    // return ajax('/produce/getBaseCategoryList')
    return ajax({
        url:'/product/getBaseCategoryList'
    })
}

//获取首页广告轮播列表
export const reqBannerList = () => ajax('/cms/banner')


//mock接口函数
export const reqRecommends = () => mockAjax('/recommends')
export const reqFloors = () => mockAjax('/floors')
export const reqLike = () => mockAjax('/like')
export const reqRank = () => mockAjax('/rank')


reqFloors().then(result => {
  console.log('floors--', result)
})

reqRecommends().then(result => {
  console.log('recommends--', result)
})

reqLike().then(result => {
  console.log('like--', result)
})

//搜索分页列表
export const reqSearch = (searchParams) => ajax.post('/list', searchParams)

reqSearch().then(result => {
  console.log('search--', result)
})



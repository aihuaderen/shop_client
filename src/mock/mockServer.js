/* 
利用mockjs提供mock接口
*/
import Mock from 'mockjs'
import recommends from './recommends.json'
import floors from './floors.json'
import like from './like.json'
import rank from './rank.json'


// 提供今日接口
Mock.mock('/mock/recommends', {code: 200, data: recommends})


// 提供楼层接口
Mock.mock('/mock/floors', {code: 200, data: floors})

// 提供喜欢商品接口
Mock.mock('/mock/like', {code: 200, data: like})

//提供热卖商品接口
Mock.mock('/mock/rank', {code: 200, data: rank})



console.log('MockServer')

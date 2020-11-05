/*
 * @Descripttion: 
 * @version: 
 * @Author: linxiaofen
 * @Date: 2020-11-05 15:48:37
 * @LastEditors: linxiaofen
 * @LastEditTime: 2020-11-05 17:29:51
 */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
  Vue.use(ElementUI)
}

// Cannot find module 'core-js/library/xxx' when import element-ui 
// https://github.com/vuejs/vuepress/issues/2275
<!--
 * @Descripttion: 
 * @version: 
 * @Author: linxiaofen
 * @Date: 2020-11-03 16:23:12
 * @LastEditors: linxiaofen
 * @LastEditTime: 2020-11-04 10:38:49
-->
<template>
  <div class="sidebar-container">
    <ul class="navbar-wrapper">
      <li v-for="(item, index) in list" :key="index">{{ item.label }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      list: [
        { label: '首页', href: "/" },
        { label: '关于我', href: "/aboutme" },
        { label: '旅游', href: "/traveling" },
      ]
    }
  },
}
</script>
<style lang="stylus">
.sidebar-container 
  width: 100px
  height: 100vh
  background-color: rgba(0, 0, 0, 0.1)
  display: flex
  justify-content: center
  align-items: center

.navbar-wrapper
  width: 100%
  list-style: none
  text-align: center
.navbar-wrapper > li
  line-height: 2.5
  cursor pointer
  color: rgba(0, 0, 0, 0.8)
  font-weight: bold
.navbar-wrapper > li:hover {
  background-color: rgba(0, 0, 0, 0.2)
}
</style>
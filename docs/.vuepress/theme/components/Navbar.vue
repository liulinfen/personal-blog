<!--
 * @Descripttion: 
 * @version: 
 * @Author: linxiaofen
 * @Date: 2020-11-04 10:54:13
 * @LastEditors: linxiaofen
 * @LastEditTime: 2020-11-05 18:34:58
-->
<template>
  <div class="navbar-wrapper">
    <div class="main-content">
      <div class="left-wrapper">
        <img :src="logo" alt="" srcset="" class="logo">
        <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal">
          <template v-for="item in nav">
            <template v-if="!item.items">
              <el-menu-item v-if="!isOutLink(item.link)" :index="item.link" :key="item.text">
                {{item.text}}
                <i class="el-icon-link" v-if="isOutLink(item.link)"/>
              </el-menu-item>
              <li @click="open(item.link)" v-else  class="el-menu-item">
                  {{item.text}}
                <i class="el-icon-link" v-if="isOutLink(item.link)"/>
              </li>
            </template>
            <el-submenu v-else :index="item.text" :key="item.text">
              <template slot="title">{{ item.text }}</template>
              <template v-for="child in item.items" >
                <template  v-if="!child.items">
                  <el-menu-item v-if="!isOutLink(child.link)"  :index="child.link"  :key="child.text">
                    {{child.text}}
                    <i class="el-icon-link" v-if="isOutLink(child.link)"/>
                  </el-menu-item>
                  <li @click="open(child.link)" v-else  class="el-menu-item">
                      {{child.text}}
                      <i class="el-icon-link" v-if="isOutLink(child.link)"/>
                    </li>
                </template>
                <el-submenu v-else :index="child.text" :key="child.text">
                  <template slot="title">{{ child.text }}</template>
                  <template v-for="ch in child.items">
                    <el-menu-item :index="ch.link" :key="ch.link" v-if="!isOutLink(ch.link)">
                      {{ ch.text }}
                      <i class="el-icon-link" v-if="isOutLink(ch.link)"/>
                    </el-menu-item>
                    <li @click="open(ch.link)" v-else  class="el-menu-item">
                      {{ch.text}}
                      <i class="el-icon-link" v-if="isOutLink(ch.link)"/>
                    </li>
                  </template>
                </el-submenu>
              </template>
            </el-submenu>
          </template>
        </el-menu>
      </div>
      <div class="right-wrapper">
        <el-input
          placeholder="请输入内容"
          v-model="val"
          size="small">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    console.log(this.$route)
    return {
      val: '',
      activeIndex: this.$route.path,
    }
  },
  computed: {
    nav() {
      return this.$themeConfig.nav
    },
    logo() {
      return this.$themeConfig.logo
    },
  },
  mounted() {
    console.log(this.$route, location)
  },
  methods: {
    isOutLink(link) {
      if (link.includes('http://') || link.includes('https://')) {
        return !link.startsWith(location.origin)
      } else {
        return false
      }
    },
    open(link) {
      window.open(link, '_blank')
    }
  }
}
</script>
<style lang="stylus">
  a
    text-decoration: none
  .navbar-wrapper
    border-bottom: 1px solid #f1f1f1
  .main-content
    max-width: 960px
    height: 60px
    line-height: 60px
    margin: 0 auto
    display: flex
    justify-content: space-between
    align-items: center
  .left-wrapper
    display: flex
    justify-content: center
    align-items: center
  .logo
    height: 50px
  .link
    padding: 0 10px
    color: #71777c
    cursor: pointer
  .active
    color: #007fff
  .link:hover 
    color: #007fff
</style>
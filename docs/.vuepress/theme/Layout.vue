<!--
 * @Descripttion: 
 * @version: 
 * @Author: linxiaofen
 * @Date: 2020-11-03 14:59:20
 * @LastEditors: linxiaofen
 * @LastEditTime: 2020-11-04 11:30:30
-->
<template>
  <div class="theme-container" >
    <!-- <Sidebar /> -->
    <Navbar />
    <Home v-if="home" />
    <Content  v-else/>
  </div>
</template>
<script>
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Navbar from './components/Navbar'
export default {
  name: 'Layout',
  components: { Sidebar, Home, Navbar },
  data() {
    return {
      // home: this.$page.frontmatter.home
    }
  },
  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },
    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    },
    home() {
      return this.$page.frontmatter.home
    },
  },
}
</script>
<style lang="stylus">
.theme-container
  width: 100%
  min-height: 100vh
</style>
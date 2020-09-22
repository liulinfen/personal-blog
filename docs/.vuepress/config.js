/*
 * @Descripttion: 
 * @version: 
 * @Author: linxiaofen
 * @Date: 2020-09-14 15:22:30
 * @LastEditors: linxiaofen
 * @LastEditTime: 2020-09-22 17:08:32
 */
module.exports = {
  // base: '/vuepress-blog/',
  title: '林小芬的博客',
  description: 'personal blog',
  head: [
    ['script', { scr: 'http://res2.wx.qq.com/open/js/jweixin-1.6.0.js' }],
    // ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  host: '0.0.0.0',
  port: '8090',
  dest: '.vuepress/dist',
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    sidebar: [
      '/',
      '/reading/',
      ['/travel/', '旅游']
    ],
    navbar: true,
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '技术', items: [
        { text: '小程序', link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/' },
        {
          text: '前端基础', 
          items: [
            { text: 'css', link: 'https://www.runoob.com/css/css-tutorial.html' },
            { text: 'html', link: 'https://www.w3school.com.cn/html/index.asp' },
          ] 
        },
      ]
      },
      { text: '旅游', link: '/travel/' },
      { text: '读书', link: '/reading/' },
      {
        text: '社交',
        items: [
          { text: 'Github', link: 'https://github.com/liulinfen' },
          { text: 'Gitee', link: 'https://gitee.com/linxiaofen' },
        ]
      }
    ],
    // displayAllHeaders: true,
    repo: 'https://github.com/liulinfen/vuepress-blog',
    repoLabel: '查看源码',
    docsRepo: 'https://github.com/liulinfen/vuepress-blog/blob/master/docs/README.md',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }
}
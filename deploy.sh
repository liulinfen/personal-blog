###
 # @Descripttion: 
 # @version: 
 # @Author: linxiaofen
 # @Date: 2020-09-15 16:35:28
 # @LastEditors: linxiaofen
 # @LastEditTime: 2020-09-22 18:13:49
### 
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'blog.llf.zone' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io,把下面一行注释掉,替换username即可,注意以下这是ssh的方式
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
# git push -f git@github.com:itclancode.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/liulinfen/personal-blog.git master:gh-pages

cd -

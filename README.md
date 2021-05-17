# hexo-theme-shana
`shana`是以`hexo 3.2`为基础制作的主题，为庆贺`夏娜酱`2016年加冕萌王而诞生的，由于比较多的`animation`,低配手机在移动端访问的时候可能会出现卡顿。你可以访问[我的博客](http://blog.shanamaid.top/)观看效果
![夏娜酱2016年加冕萌王](http://wx1.sinaimg.cn/mw690/dc58f491ly1fepnf3l0thj20dc0i0jsr.jpg)
——————————————————————————————————

## 关于主题
- shana主题不考虑兼容低版本浏览器
- 追求PC端体验，移动端次之
- 打造二次元主题


## 效果图
![首页](http://wx3.sinaimg.cn/mw690/dc58f491ly1fepnf7f6crj20xf0hmh6y.jpg)
![归档页](http://wx2.sinaimg.cn/mw690/dc58f491ly1fepnf4xyptj20xj0hjtrb.jpg)
![标签页](http://wx1.sinaimg.cn/mw690/dc58f491ly1fepnf6fmrxj20si0dmn9s.jpg)
![代码高亮](http://wx1.sinaimg.cn/mw690/dc58f491ly1fepnf5te0hj20x90hiwu4.jpg)
![GalMenu菜单](http://wx3.sinaimg.cn/mw690/dc58f491ly1fepnf3082qj20x40h87od.jpg)


动态特效请访问[我的博客](https://shanamaid.github.io/)观看效果，右键调出`GalMenu`


## 使用
### 安装
```
 git clone https://github.com/ShanaMaid/hexo-theme-shana themes/shana
```

### 配置
修改hexo根目录下的 `_config.yml`
```  
`language: zh-CN`

`theme: shana`
```
同时将`themes/shana/_source/`的`tags`和`categories`文件夹拷贝到hexo根目录下的`source`文件夹下

### 更新
```
cd themes/shana

git pull origin master
```

## 配置文件
```
# Header
menu:
  Home: /
  Archives: /archives
  Categories: /categories
  Tags: /tags
rss: /atom.xml

# Content
excerpt_link: Read More
fancybox: true

# Sidebar
sidebar: left
widgets:
- nav
- about

# display widgets at the bottom of index pages (pagination == 2)
index_widgets:
# - category
# - tagcloud
# - archive

# widget behavior
archive_type: 'monthly'
show_count: false

# Miscellaneous
google_analytics:
favicon: /favicon.png
twitter:
google_plus:
fb_admins:
fb_app_id:


# GalMenu - PC端右键调出，移动端长按
# galmenu决定是否开启
# mp3play决定是否开启音效
galmenu: true
mp3play: false
gaymenu_item:
- name: 首页
  url : /
- name: 标签
  url : /tags
- name: 分类
  url : /categories
- name: 归档
  url : /archives
- name: xxx
  url : xxxxxxxxx
- name: xxxx
  url : xxxxxxx

# 社交链接
social:
- url: http://github.com/ShanaMaid
  name: Github

# 友情链接
# name : url
link_title: 友情链接
links:
  ShanaMaid: http://blog.shanamaid.top/


# Sidebar Avatar
# in theme directory(source/images): /images/avatar.jpg
# in site  directory(source/uploads): /uploads/avatar.jpg
# 头像
avatar: https://avatars0.githubusercontent.com/u/20333903?v=3&s=460


# 网站统计
# 站长统计 填写id
# eg:　
# CNZZ: 123456789
CNZZ: 

# 评论
# 评论
# 友言uid
uyan: 

# leadcloud访问次数统计
# 
leancloud_visitors:
  enable: false
  app_id: 
  app_key: 
```
## 启用数学公式

卸载`hexo-renderer-marked`，替换为`hexo-renderer-markdown-it-plus`

``` bash
npm un hexo-renderer-marked --save
npm i hexo-renderer-markdown-it-plus --save
```

在需要启用数学公式的博客的head添加math: true

编辑站点的配置文件

``` yaml
# hexo/_config.yml
markdown_it_plus:
  highlight: true
  html: true
  xhtmlOut: true
  breaks: true
  langPrefix:
  linkify: true
  typographer:
  quotes: “”‘’
  pre_class: highlight
```



## 自定义代码高亮

`hexo-theme-shana\source\css_partial\highlight.styl`

![](https://user-images.githubusercontent.com/20333903/28317264-c8a80a28-6bf8-11e7-88f9-f1ef542f5118.png)

## 自定义背景图片
`hexo-theme-shana\source\plugin\bganimation\bg.css`

替换里面的图片url就可以了


## 关于三方评论
由于网易云倒闭，三方评论替换为友言。


友言评论不支持https协议，所以挂了小绿锁的博客即使填写了配置中的`uyan`也无效。

不考虑搜狐畅言的原因是因为使用需要填写备案号，github pages是没有备案号的。

如果需要自定义的三方评论的请自行修改`hexo-theme-shana\layout\_partial\article.ejs`中的最后一部分

```
<% if (!index && post.comments && theme.uyan){ %>
  <div id="comments" class="comments">
    <div id="uyan_frame"></div>
  </div>
<script type="text/javascript" src="http://v2.uyan.cc/code/uyan.js?uid=<%- theme.uyan %>"></script>
<% } %>
```

博主博客挂了小绿锁因此很长一段时间不会支持评论了，任何有关主题的问题直接在该项目下发issue吧！


## 支持与改进
你可以通过发起`issue`来反映主题的BUG或者提出改进建议以及你的疑问

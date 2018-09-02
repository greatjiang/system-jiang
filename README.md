# system-jiang vue项目实战

## 准备工作
#### 安装vue-cli (2版本)
>npm i vue-cli -g
#### 查看版本
>vue -V   
>2.9.3 
#### 查看模板
>vue list  
1.browserify  
2.browserrify-simple  
3.pwa      
-->Progressive Web App 是提升Web App的体验的一种新方式，能给用户原生应用的体验。  
4.simple  
5.webpack      
-->功能全面  
6.webpack-simple
-->webpack+vue-loader    

##### browserify是比较老的构建工具可以忽略。此项目选择webpack模板  
#### 初始化项目  
>vue init webpack system-jiang  
#### 开发环境
>npm run dev
## 进行开发
### 路由表
名称 | 路由 | 组件
---- | ---- | ----
首页 | /home | Home.vue
我 | /me | Me.vue

#### to or :to
to 是访问组件的路径
:to 是传入对象，访问根据组件的名字访问
#### 默认子路由
redirect:'/指定子路由'
#### 前往指定路径
this.$router.push({
  path:'指定路径'
})


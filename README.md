# system-jiang vue项目实战


### 技术栈
>  vue全家桶 vue-cli px2rem mockjs flexible css3

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
圈子 | /home | Home.vue
我的 | /me | Me.vue

#### to or :to
to 是访问组件的路径
:to 是传入对象，访问根据组件的名字访问
#### 默认子路由
redirect:'/指定子路由'
#### 前往指定路径
this.$router.push({
  path:'指定路径'
})
#### 当前路由
this.$route.path

### 组件列表
>tab  
>friend  

### 组件间的事件传递
><go-back @backaction="back"></go-back>   
>backaction 是在子组件中通过 this.$emit('backaction') 触发的   
><div class="nav-wrapper" @click="back">...    
    back () {    
      this.$emit('backaction')    
    }    
    返回上一次历史
    this.$router.go(-1)

### 添加Mock模块
    mockdata () {
      let Random = Mock.Random
      Random.csentence(5, 8)
      Random.cname()
      Random.cparagraph()
      Random.dataImage('100x100')
      let obj = Mock.mock({
        'list|5-15': [{
          'content': '@cparagraph',
          'name': '@cname()',
          'avatar': '@dataImage("100x100")',
          'photos|1-9': [
            '@dataImage("100x100")'
          ]
        }]
      })
      this.friednlist = obj.list
    }

### 播放功能完成
> 播放 暂停 拖拽

### 配置API代理
> config/index.js  

    proxyTable: { //配置跨域  
      '/api': {  
        target: 'http://47.95.218.80:3000',  
        changeOrigin: true,  
        pathRewrite: {  
          '^/api': '/'  
        }  
      }  
    },  

>使用  

    getData () {
      axios.get(
        '/api/getData'
      ).then(res => {
        console.log(res.data)
      }).catch(e => {
        console.log(e)
      })
    }
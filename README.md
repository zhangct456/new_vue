# app

### 启动项目
```
npm install
npm start
```

### 项目打包
```
npm run build
```

### 样式

* 样式类型判断：文件App.vue中，获取屏幕宽度判断类型，通过provide方法传递screenType，（provide/inject用于传递信息）；base.vue中传递BaseLayout，使得子组件能通过BaseLayout.styleType切换样式

* 侧边栏目录：src/layout/Aside.vue 文件中判断screenType选择不同类型侧边栏

* 头部：src/layout/Header.vue 文件中判断screenType选择不同类型头部

* 其余内容样式：src/layout/Base.vue 文件

* element-ui样式：src/layout/Base.vue 文件中 223行  classic、business、simplicity类中通过element-ui组件类名覆盖

* 内容样式：内容分布用element的layout布局组件实现，基本样式如下，其中的类info-modular-row-flex用于统一同一行各个格的高度；特殊需另写
```
    <el-row class="info-modular-row" :class="{'info-modular-row-flex': !isMobile}">
      <el-col class="info-modular-box" :sm="24" :lg="12">
        <div class="info-modular">
          <div class="title">运行主机</div>
          <RunHost></RunHost>
        </div>
      </el-col>
    </el-row>
```

* 样式限制：为了各个组件内样式互不影响，可以增加scoped属性；这种方法无法修改element-ui组件的样式，可以增加一个无scoped属性的style标签，通过类限制修改。（vue文件中可以增加多个style标签）

```
<style lang="less" scoped></style>
<style lang="less"></style>
```

### 配置

* 路由文件：src/router

* 请求配置：使用axios，src/config/axios.conf.js 中配置，引用名设置为了$router，可在src/config/index.js中修改

* 部分公共参数：src/config/base.conf.js，一些logo、公司信息配置，引用名设置为了$baseConfig

### 文件目录结构

页面文件夹结构按照目录结构设置，所用子组件放在同目录同名文件夹中

```
| public        //  静态文件目录
|-- static  //  静态文件文件夹，打包或启动时被直接拷贝，代码中可以用“./static”直接使用其中资源
|-- index.html  //  
| src       //  主要开发目录
|-- App.vue     //  底部组件
|-- main.js     //  引入公共配置文件
|-- assets      //  资源文件夹
|   |-- curve-line.png  
|   |-- login_bg.jpg
|   |-- logo.jpg
|-- components      //  公共组件文件夹
|   |-- radios.vue
|-- config      //  配置文件夹
|   |-- axios.conf.js
|   |-- base.conf.js
|   |-- index.js
|-- layout      //  页面布局组件文件
|   |-- Aside.vue       //  侧边栏主组件
|   |-- Base.vue        //  内容部分基础组件
|   |-- Bottom.vue      //  底部组件
|   |-- Header.vue      //  头部主组件
|   |-- Aside       //  侧边栏组件，针对不同设备
|   |   |-- AsideComputer.vue
|   |   |-- AsideComputerBusiness.vue
|   |   |-- AsideComputerSimplicity.vue
|   |   |-- AsideMenu.vue
|   |   |-- AsideMobile.vue
|   |   |-- AsideMobileBusiness.vue
|   |   |-- AsideMobileSimplicity.vue
|   |-- Header      //  头部组件，针对不同设备
|       |-- HeaderComputer.vue
|       |-- HeaderComputerBusiness.vue
|       |-- HeaderComputerSimplicity.vue
|       |-- HeaderIpad.vue
|       |-- HeaderMobile.vue
|       |-- HeaderMobileBusiness.vue
|       |-- HeaderMobileSimplicity.vue
|-- pages       //  页面，按目录结构配置
|   |-- Login
|   |   |-- Login.vue
|   |-- Operation
|       |-- HostManage.vue
|       |-- Operation.vue
|       |-- HostManage
|       |   |-- DeviceGroup.vue
|       |   |-- DeviceGroup
|       |       |-- Config.vue
|       |       |-- EventList.vue
|       |       |-- Home.vue
|       |       |-- LogsInfo.vue
|       |       |-- ServerList.vue
|       |       |-- Config
|       |       |   |-- HostConfig.vue
|       |       |   |-- IconUpload.vue
|       |       |   |-- ParamsConfig.vue
|       |       |   |-- Protocol.vue
|       |       |-- Home
|       |           |-- Assets.vue
|       |           |-- HostDescribe.vue
|       |           |-- InfoTables.vue
|       |           |-- RuningStatus.vue
|       |           |-- InfoTables
|       |               |-- ArpList.vue
|       |               |-- CpuList.vue
|       |               |-- FlowChart.vue
|       |               |-- HardwareInfo.vue
|       |               |-- InterfaceList.vue
|       |               |-- IpList.vue
|       |               |-- ProcessTable.vue
|       |               |-- RouteList.vue
|       |               |-- SoftwareList.vue
|       |               |-- StorageList.vue
|       |               |-- TcpList.vue
|       |               |-- UdpList.vue
|       |               |-- UserList.vue
|       |-- Operation
|           |-- HostStatus.vue
|           |-- MonitorStatus.vue
|           |-- RunHost.vue
|           |-- RunStatus.vue
|-- router      //  路由文件
|   |-- index.js
|-- utils       //  公共工具方法
    |-- domIsChild.js
    |-- index.js
```
- 安装主应用依赖
  根目录下运行`yarn`安装依赖

- 安装子应用依赖
  待子应用安装完成后，在根目录下运行`npm run demo-install`安装子应用demo项目的依赖

- 启动项目
  根目录下运行`yarn start`启动主应用和子应用

- 访问地址

  主应用：[http://localhost:5000/](http://localhost:5000/)

  子应用1：[http://localhost:7100/](http://localhost:7100/)

  子应用2：[http://localhost:8010/](http://localhost:8010/)

- 项目介绍

  实现将多个单页面子应用集成到主应用中，实现一个单页面应用式的体验。

  子应用可以单独部署使用，拥有自己菜单等必要部分

  ![subApp](https://github.com/Wei-Li-19/micro-frontend/blob/master/sinpshot/subApp.jpg)



	子应用集成到主应用中，将菜单等跳转操作交给主页面控制，实现各个子应用的一体化操作，也可以用来实现权限的控制

  ![mainApp](https://github.com/Wei-Li-19/micro-frontend/blob/master/sinpshot/mainApp.jpg)




(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{626:function(v,_,e){"use strict";e.r(_);var t=e(24),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"maven-初识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven-初识"}},[v._v("#")]),v._v(" Maven-初识")]),v._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#前言"}},[v._v("前言")])]),e("li",[e("a",{attrs:{href:"#maven项目结构"}},[v._v("Maven项目结构")])]),e("li",[e("a",{attrs:{href:"#核心概念"}},[v._v("核心概念")]),e("ul",[e("li",[e("a",{attrs:{href:"#pom"}},[v._v("Pom")])]),e("li",[e("a",{attrs:{href:"#生命周期"}},[v._v("生命周期")])])])])])]),e("p"),v._v(" "),e("p",[v._v("🐴")]),v._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),e("p",[e("code",[v._v("Maven")]),v._v("是"),e("code",[v._v("Apache")]),v._v("下的一个纯"),e("code",[v._v("Java")]),v._v("开发的开源项目。"),e("code",[v._v("Maven")]),v._v("是一个"),e("strong",[v._v("项目管理工具")]),v._v("，可以对"),e("code",[v._v("Java")]),v._v("项目进行构建、依赖管理。"),e("code",[v._v("Maven")]),v._v("的大体作用以及优点如下")]),v._v(" "),e("ul",[e("li",[v._v("帮助管理 构建、文档、报告、依赖、"),e("code",[v._v("scms")]),v._v("、发布、分发的方法。")]),v._v(" "),e("li",[v._v("可以方便的编译代码、进行依赖管理、管理二进制库等等。")]),v._v(" "),e("li",[v._v("可以将项目过程规范化、自动化、高效化以及强大的可扩展性")]),v._v(" "),e("li",[v._v("利用"),e("code",[v._v("maven")]),v._v("自身及其插件还可以获得代码检查报告、单元测试覆盖率、实现持续集成等等")])]),v._v(" "),e("h2",{attrs:{id:"maven项目结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven项目结构"}},[v._v("#")]),v._v(" Maven项目结构")]),v._v(" "),e("p",[v._v("在项目中使用"),e("code",[v._v("Maven")]),v._v("来管理时，其主要目录结构如下：")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("maven-project\n├── src\n│   ├── main\n│   │   ├── java\n│   │   └── resources\n│   └── test\n│       ├── java\n│       └── resources\n└── target\n│   ├── classes\n├── pom.xml\n")])])]),e("ul",[e("li",[e("code",[v._v("src/main/java")]),v._v(" 存放"),e("code",[v._v("java")]),v._v("源码目录")]),v._v(" "),e("li",[e("code",[v._v("src/main/resources")]),v._v(" 存放资源目录")]),v._v(" "),e("li",[e("code",[v._v("src/test")]),v._v(" 测试相关目录")]),v._v(" "),e("li",[e("code",[v._v("src/target")]),v._v(" 打包输出目录")]),v._v(" "),e("li",[e("code",[v._v("pom.xml")]),v._v(" "),e("code",[v._v("maven")]),v._v("的项目配置(描述)文件")])]),v._v(" "),e("h2",{attrs:{id:"核心概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[v._v("#")]),v._v(" 核心概念")]),v._v(" "),e("h3",{attrs:{id:"pom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pom"}},[v._v("#")]),v._v(" Pom")]),v._v(" "),e("p",[e("code",[v._v("Pom")]),v._v("("),e("code",[v._v("project object Model")]),v._v(")是一个"),e("code",[v._v("xml")]),v._v("，它是"),e("code",[v._v("maven")]),v._v("的工作基础。"),e("code",[v._v("pom")]),v._v("文件中包含了项目的信息和"),e("code",[v._v("maven build")]),v._v("项目所需的配置信息，通常有项目信息(如版本、成员)、项目的依赖、插件和"),e("code",[v._v("goal")]),v._v("、"),e("code",[v._v("build")]),v._v("选项等等")]),v._v(" "),e("p",[e("code",[v._v("pom")]),v._v("是可以继承的，通常对于一个大型的项目或是多个"),e("code",[v._v("module")]),v._v("的情况，子模块的"),e("code",[v._v("pom")]),v._v("需要指定父模块的"),e("code",[v._v("pom")])]),v._v(" "),e("h3",{attrs:{id:"生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[v._v("#")]),v._v(" 生命周期")]),v._v(" "),e("p",[e("code",[v._v("maven")]),v._v("的生命周期如下：")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",[v._v("生命周期")]),v._v(" "),e("th",[v._v("功能")]),v._v(" "),e("th",[v._v("说明")])])]),v._v(" "),e("tbody",[e("tr",[e("td",[e("code",[v._v("validate")]),v._v("验证")]),v._v(" "),e("td",[v._v("验证项目")]),v._v(" "),e("td",[v._v("验证项目是否正确且所有必须信息是可用的")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("compile")]),v._v("编译")]),v._v(" "),e("td",[v._v("执行编译")]),v._v(" "),e("td",[v._v("源代码编译在此阶段完成")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("Test")]),v._v("测试")]),v._v(" "),e("td",[v._v("测试")]),v._v(" "),e("td",[v._v("使用适当的单元测试框架（例如"),e("code",[v._v("JUnit")]),v._v("）运行测试。")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("package")]),v._v("包装")]),v._v(" "),e("td",[v._v("打包")]),v._v(" "),e("td",[v._v("创建"),e("code",[v._v("JAR/WAR")]),v._v("包如在"),e("code",[v._v("pom.xml")]),v._v("中定义提及的包")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("verify")]),v._v("检查")]),v._v(" "),e("td",[v._v("检查")]),v._v(" "),e("td",[v._v("对集成测试的结果进行检查，以保证质量达标")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("install")]),v._v("安装")]),v._v(" "),e("td",[v._v("安装")]),v._v(" "),e("td",[v._v("安装打包的项目到本地仓库，以供其他项目使用")])]),v._v(" "),e("tr",[e("td",[e("code",[v._v("deploy")]),v._v("部署")]),v._v(" "),e("td",[v._v("部署")]),v._v(" "),e("td",[v._v("拷贝最终的工程包到远程仓库中，以共享给其他开发人员和工程")])])])]),v._v(" "),e("p",[e("strong",[v._v("参考文献")])]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/1252599548343744/1309301146648610",target:"_blank",rel:"noopener noreferrer"}},[v._v("Maven介绍"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://www.runoob.com/maven/maven-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("Maven 教程"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://www.trinea.cn/android/maven/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Maven介绍"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://how2j.cn/k/maven/maven-introduction/1328.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("什么是MAVEN"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=a.exports}}]);
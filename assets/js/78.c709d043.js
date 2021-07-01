(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{601:function(t,a,s){"use strict";s.r(a);var e=s(24),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"maven-pom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven-pom"}},[t._v("#")]),t._v(" Maven-Pom")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#前言"}},[t._v("前言")])]),s("li",[s("a",{attrs:{href:"#pom节点"}},[t._v("Pom节点")])]),s("li",[s("a",{attrs:{href:"#pom父节点"}},[t._v("Pom父节点")])])])]),s("p"),t._v(" "),s("p",[t._v("🐴")]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[s("code",[t._v("Pom")]),t._v("("),s("code",[t._v("project object Model")]),t._v(")是一个"),s("code",[t._v("xml")]),t._v("，它是"),s("code",[t._v("maven")]),t._v("的工作基础。"),s("code",[t._v("pom")]),t._v("文件中包含了项目的信息和"),s("code",[t._v("maven build")]),t._v("项目所需的配置信息，通常有项目信息(如版本、成员)、项目的依赖、插件和"),s("code",[t._v("goal")]),t._v("、"),s("code",[t._v("build")]),t._v("选项等等")]),t._v(" "),s("h2",{attrs:{id:"pom节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pom节点"}},[t._v("#")]),t._v(" Pom节点")]),t._v(" "),s("p",[s("code",[t._v("Pom")]),t._v("因为是"),s("code",[t._v("xml")]),t._v("文件，所有我们需要知道"),s("code",[t._v("Pom")]),t._v("常出现的元素节点。"),s("code",[t._v("Pom")]),t._v("中的主要节点如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("元素节点")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("project")])]),t._v(" "),s("td",[t._v("文件的根节点")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("modelVersion")])]),t._v(" "),s("td",[s("code",[t._v("pom.xml")]),t._v("使用的对象模型版本")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("groupId")])]),t._v(" "),s("td",[t._v("创建项目的组织或团体的唯一"),s("code",[t._v("Id")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("artifactId")])]),t._v(" "),s("td",[t._v("项目的唯一"),s("code",[t._v("Id")]),t._v(", 可视为项目名")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("version")])]),t._v(" "),s("td",[t._v("项目(包)的版本号")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("packaging")])]),t._v(" "),s("td",[t._v("打包物的扩展名，一般有 "),s("code",[t._v("JAR")]),t._v(","),s("code",[t._v("WAR")]),t._v(","),s("code",[t._v("EAR")]),t._v(" 等")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("name")])]),t._v(" "),s("td",[t._v("项目的显示名，常用于"),s("code",[t._v("Maven")]),t._v("生成的文档")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("url")])]),t._v(" "),s("td",[t._v("项目的URL地址")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("properties")])]),t._v(" "),s("td",[t._v("自定义的"),s("code",[t._v("Maven")]),t._v("属性")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("dependencies")])]),t._v(" "),s("td",[t._v("项目的依赖配置")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("parent")])]),t._v(" "),s("td",[t._v("表示父 "),s("code",[t._v("POM")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("build")])]),t._v(" "),s("td",[t._v("表示"),s("code",[t._v("build")]),t._v("配置")])])])]),t._v(" "),s("p",[t._v("下面是"),s("code",[t._v("Pom.xml")]),t._v("的示例：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 文件的根节点 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("project")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("xmlns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://maven.apache.org/POM/4.0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://maven.apache.org/POM/4.0.0\n    http://maven.apache.org/xsd/maven-4.0.0.xsd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 模型版本 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("modelVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("4.0.0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("modelVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 公司或者组织的唯一标志，并且配置时生成的路径也是由此生成， \n      如com.companyname.project-group，maven会将该项目打成的jar包放本地路径：\n      /com/companyname/project-group --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.companyname.project-group"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 项目的唯一ID，一个groupId下面可能多个项目，就是靠artifactId来区分的 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("project"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 版本号 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.0.0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("project")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"pom父节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pom父节点"}},[t._v("#")]),t._v(" Pom父节点")]),t._v(" "),s("p",[s("code",[t._v("Maven")]),t._v("中可以通过"),s("code",[t._v("parent")]),t._v("元素来继承父模块"),s("code",[t._v("pom")]),t._v("，来实现"),s("code",[t._v("pom.xml")]),t._v("配置的继承和传递，便于各种"),s("code",[t._v("Maven")]),t._v("插件以及程序依赖的统一管理。根级父模块"),s("code",[t._v("pom")]),t._v("一般位于"),s("code",[t._v("Maven")]),t._v("安装的根目录的"),s("code",[t._v("conf/settings.xml")]),t._v("中。")]),t._v(" "),s("p",[s("strong",[t._v("参考文献")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/zhoudaxing/p/11338183.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maven之pom.xml配置文件详解"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);
module.exports = {

  /**************导航*************/ 
  "/nav/":[
    "nav",
    "web",
    "afterEnd",
  ],
  "/web/":[
    {
      title: 'CSS+HTML系列',
      collapsable: true,
      children: [
        "csshtml/css-formatContent",
        "csshtml/css-bfc",
      ]
    },
    {
      title: 'JS系列',
      collapsable: true,
      children: [
          "js/js-bom",
          "js/js-dom",
          "js/js-event",
          "js/js-function",
          "js/js-prototype",
          "js/js-context",
          "js/js-variable",
          "js/js-scope-chain",
          "js/js-this1",
          "js/js-this2",
          "js/js-closure",
          "js/js-data-type",
          "js/js-new",
      ]
    },
    {
      title: '常见面试题',
      collapsable: true,
      children: [
          "question/",
          'question/css',
          'question/vue',
      ]
     },
  ],

  /**************Java*************/ 
  "/java/":[
    {
      title: 'Java 基础系列',
      collapsable: true,
      children: [
        "basics/know",
        "basics/number",
        "basics/string",
        "basics/array",
        "basics/error",
        "basics/generics",
        "basics/reflect",
      ]
    },
    {
      title: 'Java 集合',
      collapsable: true,
      children: [
        "collection/collection",
        "collection/list",
        "collection/set",
        "collection/map",
        "collection/queue",
      ]
    },
    {
      title: 'Java IO',
      collapsable: true,
      children: [
        "io/",
        "io/file",
        "io/inputStream",
        "io/readerAndWriter",
      ]
    },
    {
      title: 'Java 数据库',
      collapsable: true,
      children: [
        "jdbc/mysql-connect",
      ]
    },
    {
      title: 'Java 网络编程',
      collapsable: true,
      children: [
        "network/ip",
        "network/socket",
      ]
    },
  ],

  /************** 数据库 database*************/ 
  "/database/":[
    {
      title: 'MySQL系列',
      collapsable: true,
      children: [
        "mysql/init",
        "mysql/data-type",
      ]
    },
  ],

  /************** 设计模式 *************/ 
  "/designMode/":[
    "observer", //
  ],


  /************** 算法 *************/ 
  "/algorithm/":[
    "bubble-sort", //冒泡排序
  ],


  /************** 运维/工具 *************/ 
  "/tools/":[
    {
      title: 'Maven系列',
      collapsable: true,
      children: [
        "maven/",
        "maven/install",
        "maven/pom",
        "maven/dependon",
      ]
    },
    {
      title: 'Tomcat系列',
      collapsable: true,
      children: [
        "tomcat/",
      ]
    },
  ],

  /************** 英语 *************/ 
  "/english/":[
    {
      title: '英语读音',
      collapsable: true,
      children: [
        "pronunciation/phonogram",
        "pronunciation/phonogram-2",
      ]
    },
    {
      title: '英语单词',
      collapsable: true,
      children: [
        "word/call",
        "word/greet",
        "word/daily-life",
        "word/eat",
        "word/animal",
        "word/fruit",
        "word/time",
        "word/data",
        "word/traffic-tool",
        "word/clothing",
        "word/country",
      ]
    },
    {
      title: '英语语法',
      collapsable: true,
      children: [
        "grammar/sentence",
        "grammar/sentence-pattren",
        "grammar/imperative",
        "grammar/exclamatory",
      ]
    },
  ],

  
  /************** MYSELF *************/ 
  "/self/":[
    {
      title: '工作',
      collapsable: true,
      children: [
        "work/",
        "work/partTimeJob",
      ]
    },
  ]
}
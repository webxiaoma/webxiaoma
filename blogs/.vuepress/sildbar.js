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
      ]
    },
    {
      title: 'Java JDBC',
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


  /************** 算法 *************/ 
  "/algorithm/":[
    "bubble-sort", //冒泡排序
  ]
}
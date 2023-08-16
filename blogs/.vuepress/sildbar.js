module.exports = {

  /**************导航*************/ 
  "/nav/":[
    "nav",
    "web",
    "afterEnd",
  ],
  "/ai/":[
    'tools'
  ],
  "/python/":[
    "",
    {
      title: '基础知识',
      collapsable: true,
      children: [
        "base/package-tools",
        "base/tools",
      ]
    },
    {
      title: '功能开发',
      collapsable: true,
      children: [
        "development/reptile",
      ]
    },

  ],
  "/web/":[
    "",
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
      title: 'Vue2.x系列',
      collapsable: true,
      children: [
          "vue/mvvm",
          "vue/computed",
      ]
     },
     {
      title: 'Vue3.x系列',
      collapsable: true,
      children: [
          "vue3/init",
      ]
     },
    {
      title: '常见知识点',
      collapsable: true,
      children: [
          "question/",
          'question/css',
          'question/vue',
      ]
     },
  ],
  /**************Java*************/ 
  "/node/":[
    "init",
  ],
  /**************Java*************/ 
  "/java/":[
    "",
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
        "collection/iterator",
      ]
    },
    {
      title: 'Java 线程',
      collapsable: true,
      children: [
        "thread/",
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
    {
      title: 'Java 常用包',
      collapsable: true,
      children: [
        "jar/",
        "jar/log4j",
      ]
    },
  ],

  /************** 数据库 database*************/ 
  "/database/":[
    "",
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
    "",
    "bubble-sort", //冒泡排序
  ],

  /************** 运维/工具 *************/ 
  "/tools/":[
    "",
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
    /************** 金融 *************/ 
 "/financial/":[
    '',
    {
      title: '社会经济',
      collapsable: true,
      children: [
        "society/basics",
      ]
    },
    {
      title: '私募股权',
      collapsable: true,
      children: [
        "private-equity/term",
      ]
    },
    {
      title: '股权系统',
      collapsable: true,
      children: [
        "equity-system/found/personal-equity",
        "equity-system/layout",
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
    "/study/":[
      {
        title: '计算机基础',
        collapsable: true,
        children: [
          "computers/",
        ]
      },
      {
        title: '运维相关',
        collapsable: true,
        children: [
          "operation/",
          'operation/nginx'
        ]
      },
      {
        title: '数据库相关',
        collapsable: true,
        children: [
          "database/",
        ]
      },
      {
        title: '前端知识路线',
        collapsable: true,
        children: [
          "web/",
          "web/framework",
          "web/test",
          "web/react",
          "web/vue",
          "web/css",
          "web/interview"
        ]
      },
      {
        title: '低代码相关',
        collapsable: true,
        children: [
          "lowCode/",
        ]
      },
      {
        title: 'Java知识路线',
        collapsable: true,
        children: [
          "java/",
        ]
      },
      {
        title: '运维知识',
        collapsable: true,
        children: [
          "maintenance/linux",
          "maintenance/nginx",
        ],
      },
      {
        title: '3D技术相关',
        collapsable: true,
        children: [
          "3d-technology/",
        ]
      },
      {
        title: '工作效率',
        collapsable: true,
        children: [
          "standard/web",
          "standard/vscode",
          "standard/web-flow",
        ]
      },
      {
        title: '金融业务',
        collapsable: true,
        children: [
          "financial/",
        ]
      },
  ],
  // TODO： 暂时不用
  // "/self/":[
  //   {
  //     title: '工作',
  //     collapsable: true,
  //     children: [
  //       "work/",
  //       "work/partTimeJob",
  //     ]
  //   },
  // ]
}
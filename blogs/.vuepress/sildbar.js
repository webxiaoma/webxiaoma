module.exports = {

  /**************导航*************/ 
  "/nav/":[
    "nav",
    "web",
    "afterEnd",
  ],

  /**************前端*************/ 
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
          // 'question/vue',
      ]
     },
  ]

}
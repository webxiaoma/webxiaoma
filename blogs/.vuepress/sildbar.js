module.exports = {

  /**************导航*************/ 
  "/nav/":[
    "nav",
    "web",
    "afterEnd",
  ],

  /**************前端*************/ 
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
          "js/js-defineProperty",
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
  ]

}
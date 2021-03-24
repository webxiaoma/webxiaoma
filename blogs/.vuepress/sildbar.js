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
      title: '常见面试题',
      collapsable: true,
      children: [
          'question/vue',
      ]
     },
  ]

}
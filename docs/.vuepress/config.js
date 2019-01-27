module.exports = {
    title: 'Ghost UI',
    description: '基于web component的UI组件库',
    base:'/ghost-ui-doc/',
    themeConfig: {
        nav: [
          { text: '文档', link: '/common/intro' },
          { text: '示例', link: '/example' },
        ],
        sidebar: [
          {
            title: '概览',
            children: [
              '/common/intro'
            ]
          },
          {
            title: '基础组件',
            children: [
              '/component/button'
            ]
          }
        ]
      }
  }
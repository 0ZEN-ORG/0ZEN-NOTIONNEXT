const CONFIG = {
  HOME_BANNER_ENABLE: true,

  SITE_CREATE_TIME: '2023-10-15', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  NOTICE_BAR: [
    { title: '欢迎来到我的博客', url: 'https://www.ai-hd.com/' },
    { title: '访问文档中心获取更多帮助', url: 'https://www.ai-hd.com/' }
  ],

  // 英雄区(首页顶部大卡)
  HERO_TITLE_1: '分享AIGC',
  HERO_TITLE_2: '与实用技巧',
  HERO_TITLE_3: 'Ai-HD.COM',
  HERO_TITLE_4: '新版上线',
  HERO_TITLE_5: '欢迎关注，交流学习',
  HERO_TITLE_LINK: 'https://www.ai-hd.com/',

  // 英雄区显示三个置顶分类
  HERO_CATEGORY_1: { title: '必看精选', url: '/tag/必看精选' },
  HERO_CATEGORY_2: { title: '热门文章', url: '/tag/热门文章' },
  HERO_CATEGORY_3: { title: '实用教程', url: '/tag/实用教程' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HERO_RECOMMEND_POST_TAG: '推荐',
  HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 分享与热心帮助',
    '🤝 专修交互与设计',
    '🏃 脚踏实地行动派',
    '🏠 智能家居小能手',
    '🤖️ 数码科技爱好者',
    '🧱 团队小组发动机'
  ],
  INFO_CARD_URL: 'https://www.ai-hd.com/', // 个人资料底部按钮链接

  // 用户技能图标
  GROUP_ICONS: [
    {
      title_1: 'Topaz Photo AI',
      img_1: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/202310172313255.webp',
      color_1: '#6869a9',
      title_2: 'Topaz Video AI',
      img_2: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/202310172318703.webp',
      color_2: '#6869a9'
    },
    {
      title_1: 'chatgpt',
      img_1: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/202310180001367.webp',
      color_1: '#ffffff',
      title_2: 'Photoshop',
      img_2: '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp',
      color_2: '#4082c3'
    },
    {
      title_1: 'civitai',
      img_1: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/202310180005155.webp',
      color_1: '#ffffff',
      title_2: 'heygen',
      img_2: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/202310172351906.webp',
      color_2: '#161b32'
    },
    {
      title_1: 'leonardo',
      img_1: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/202310180024344.webp',
      color_1: '#ffffff',
      title_2: 'luminar',
      img_2: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/202310180029940.webp',
      color_2: '#a3ddef'
    },
    {
      title_1: 'poe',
      img_1: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/202310180034170.webp',
      color_1: '#81acd4',
      title_2: 'CSS3',
      img_2: '/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp',
      color_2: '#2c51db'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp',
      color_1: '#f7cb4f',
      title_2: 'HTML',
      img_2: '/images/heo/202372b4d760fd8a497d442140c295655426070302.webp',
      color_2: '#e9572b'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
      color_1: '#df5b40',
      title_2: 'Rhino',
      img_2: '/images/heo/20231ca53fa0b09a3ff1df89acd7515e9516173302.webp',
      color_2: '#1f1f1f'
    }
  ],

  SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  SOCIAL_CARD_TITLE_1: '交流频道',
  SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  SOCIAL_CARD_TITLE_3: '点击加入社群',
  SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/how-to-question',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  MENU_INDEX: true, // 显示首页
  MENU_CATEGORY: true, // 显示分类
  MENU_TAG: true, // 显示标签
  MENU_ARCHIVE: true, // 显示归档
  MENU_SEARCH: true, // 显示搜索

  POST_LIST_COVER: true, // 列表显示文章封面
  POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  POST_LIST_SUMMARY: true, // 文章摘要
  POST_LIST_PREVIEW: false, // 读取文章预览
  POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  ARTICLE_RECOMMEND: true, // 文章关联推荐

  WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  WIDGET_ANALYTICS: false, // 显示统计卡
  WIDGET_TO_TOP: true,
  WIDGET_TO_COMMENT: true, // 跳到评论区
  WIDGET_DARK_MODE: true, // 夜间模式
  WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG

const base = '/'
const routers = [{
    name: '用户管理',
    child: [{
      name: '用户管理列表',
      url: '/user/index'
    }]
  },
  {
    name: '商品管理',
    child: [{
        name: '商品列表',
        url: '/product/index'
      },
      {
        name: '商品库存编辑记录',
        url: '/product/inventoryRecord'
      },
      {
        name: '预制卡列表',
        url: '/product/prefaCard'
      },
      {
        name: '预制卡兑换码',
        url: '/product/prefaCardConversionCode'
      },
      {
        name: '预制卡核销记录管理',
        url: '/product/prefaCardVerification'
      },
      {
        name: '自组礼盒设置',
        url: '/product/selfGiftBox'
      }
    ]
  },
  {
    name: '贺卡管理',
    child: [{
      name: '贺卡列表',
      url: '/greeting/index'
    }]
  },
  {
    name: '订单管理',
    child: [{
      name: '订单列表',
      url: '/order/index'
    }]
  },
  {
    name: '优惠',
    child: [{
        name: '优惠项目设置',
        url: '/favourable/project'
      },
      {
        name: 'B端折扣活动管理',
        url: '/favourable/active'
      },
      {
        name: 'C端折扣活动管理',
        url: '/favourable/Cactive'
      }
    ]
  },
  {
    name: '礼物记录',
    child: [{
      name: '礼物记录列表',
      url: '/gift/index'
    }]
  },
  {
    name: '设置',
    child: [{
        name: '帮助中心',
        url: '/setting/help'
      },
      {
        name: '设置',
        url: '/setting/set'
      },
      {
        name: '小程序分享卡片设置',
        url: '/setting/share'
      },
      {
        name: '数据字典',
        url: '/setting/book'
      },
      {
        name: '企业定制',
        child: [{
            name: '企业定制礼盒',
            url: '/setting/gift'
          },
          {
            name: '知情同意书',
            url: '/setting/agreement'
          },
          {
            name: '企业定制规则',
            url: '/setting/rule'
          }
        ]
      },
      {
        name: '首页图片设置',
        url: '/setting/picture'
      },
      {
        name: '白名单设置',
        url: '/setting/whiteList'
      },
      {
        name: '礼品卡使用说明设置',
        url: '/setting/useExplain'
      }
    ]
  },
  {
    name: '营销活动管理',
    child: [{
        name: '抽奖活动管理',
        url: '/marketing/manage'
      },
      {
        name: '拆红包活动管理',
        url: '/marketing/redPackage'
      },
      {
        name: '红包活动规则',
        url: '/marketing/rule'
      }
    ]
  }
]

export { routers, base }

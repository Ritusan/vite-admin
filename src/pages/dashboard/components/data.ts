interface GroupItem {
  title: string
  icon: string
  color: string
  desc: string
  date: string
  group: string
}

export const groupItems: GroupItem[] = [
  {
    title: 'Flower',
    icon: 'mdi:flower',
    color: '#e098ba',
    desc: '跟我一起去认识生活中的五彩。',
    group: 'winter',
    date: '2022-01-02',
  },
  {
    title: 'Music',
    icon: 'clarity:music-note-solid',
    color: '#c59abf',
    desc: '你说你喜欢猫，我带你去猫咖。',
    group: 'winter',
    date: '2022-01-02',
  },
  {
    title: 'Mood',
    icon: 'noto-v1:sunflower',
    color: '#e18525',
    desc: '这世界有很多的美好等待你去探索。',
    group: 'winter',
    date: '2022-01-02',
  },
  {
    title: 'Weather',
    icon: 'bi:sun-fill',
    color: '#f7ca11',
    desc: '不如跟我走，带你去兜风。',
    group: 'winter',
    date: '2022-01-02',
  },
  {
    title: 'Photo',
    icon: 'emojione:camera-with-flash',
    color: '#c59abf',
    desc: '我摘下星星⭐️为你营业。',
    group: 'winter',
    date: '2022-01-02',
  },
  {
    title: 'Seasons',
    icon: 'bi:snow',
    color: '#81a0d3',
    desc: '你所有心愿，他都能实现。',
    group: 'winter',
    date: '2022-01-02',
  },
]

interface NavItem {
  title: string
  icon: string
  color: string
}

export const navItems: NavItem[] = [
  {
    title: '首页',
    icon: 'HomeFilled',
    color: '#b0b7d6',
  },
  {
    title: '仪表盘',
    icon: 'Menu',
    color: '#bad4ee',
  },
  {
    title: '组件',
    icon: 'Coin',
    color: '#f4b095',
  },
  {
    title: '系统管理',
    icon: 'Setting',
    color: '#adcab0',
  },
  {
    title: '日程表',
    icon: 'Calendar',
    color: '#f7c6bd',
  },
  {
    title: '图表',
    icon: 'TrendCharts',
    color: '#c3b3cf',
  },
]
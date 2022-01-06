interface GroupItem {
  title: string
  icon: string
  color: string
  desc: string
  date: string
  group: string
  url: string
}

export const groupItems: GroupItem[] = [
  {
    title: 'Vue',
    icon: 'logos:vue',
    color: '',
    desc: 'Vue3 handbook',
    group: 'winter',
    date: '2022-01-02',
    url: 'https://v3.cn.vuejs.org/'
  },
  {
    title: 'Vite',
    icon: 'logos:vitejs',
    color: '#c59abf',
    desc: 'Vite doc',
    group: 'winter',
    date: '2022-01-02',
    url: 'https://vitejs.cn/'
  },
  {
    title: 'TypeScript',
    icon: 'logos:typescript-icon',
    color: '#e18525',
    desc: 'TypeScript doc',
    group: 'winter',
    date: '2022-01-02',
    url: 'https://www.typescriptlang.org/'
  },
  {
    title: 'github',
    icon: 'bi:github',
    color: '',
    desc: '项目升级~',
    group: '进行中',
    date: '2022-01-02',
    url: 'https://github.com/'
  },
  {
    title: 'React',
    icon: 'logos:react',
    color: '',
    desc: 'React handbook',
    group: 'winter',
    date: '2022-01-02',
    url: 'https://zh-hans.reactjs.org/'
  },
  {
    title: 'Element',
    icon: 'logos:element',
    color: '#81a0d3',
    desc: 'Element-plus',
    group: 'winter',
    date: '2022-01-02',
    url: 'https://element-plus.gitee.io/zh-CN/component/button.html'
  },
]

interface NavItem {
  title: string
  icon: string
  color: string
  url: string
}

export const navItems: NavItem[] = [
  {
    title: '首页',
    icon: 'HomeFilled',
    color: '#b0b7d6',
    url: '/'
  },
  {
    title: '仪表盘',
    icon: 'Menu',
    color: '#bad4ee',
    url: '/'
  },
  {
    title: '组件',
    icon: 'Coin',
    color: '#f4b095',
    url: '/examples'
  },
  {
    title: '系统管理',
    icon: 'Setting',
    color: '#adcab0',
    url: '/'
  },
  {
    title: '日程表',
    icon: 'Calendar',
    color: '#f7c6bd',
    url: '/calendar'
  },
  {
    title: '图表',
    icon: 'TrendCharts',
    color: '#c3b3cf',
    url: '/chart'
  },
]
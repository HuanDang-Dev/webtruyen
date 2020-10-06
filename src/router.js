import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('./category/CategoryView.vue')
    },
    {
      path: '/kiemhiep',
      name: 'kiemhiep',
      component: () => import('./category/KiemHiep.vue')
    },
    {
      path: '/lichsu',
      name: 'lichsu',
      component: () => import('./category/LichSu.vue')
    },
    {
      path: '/ngontinh',
      name: 'ngontinh',
      component: () => import('./category/NgonTinh.vue')
    },
    {
      path: '/tienhiep',
      name: 'tienhiep',
      component: () => import('./category/TienHiep.vue')
    },
    {
      path: '/truyenma',
      name: 'truyenma',
      component: () => import('./category/TruyenMa.vue')
    },
    {
      path: '/truyenteen',
      name: 'truyenteen',
      component: () => import('./category/TruyenTeen.vue')
    },
    {
      path: '/truyenvip',
      name: 'truyenvip',
      component: () => import('./select/TruyenVip.vue')
    },
    {
      path: '/truyenmoicapnhat',
      name: 'truyenmoicapnhat',
      component: () => import('./select/TruyenMoiCapNhat.vue')
    },
    {
      path: '/truyenyeuthich',
      name: 'truyenyeuthich',
      component: () => import('./select/TruyenYeuThich.vue')
    },
    {
      path: '/truyendecu',
      name: 'truyendecu',
      component: () => import('./select/TruyenDeCu.vue')
    },
    {
      path: '/truyenxemnhieu',
      name: 'truyenxemnhieu',
      component: () => import('./select/TruyenXemNhieu.vue')
    },
    {
      path: '/truyenfull',
      name: 'truyenfull',
      component: () => import('./select/TruyenFull.vue')
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('./feedback/AboutFeedBack.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./news/AboutNews.vue')
    },
    {
      path: '/truyen',
      name: 'truyen',
      component: () => import('./story/truyen.vue')
    },
    {
      path: '/doctruyen',
      name: 'doctruyen',
      component: () => import('./readthestory/DocTruyen.vue')
    }
  ]
})

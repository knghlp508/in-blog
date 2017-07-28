import Vue from 'vue';
import iView from 'iview';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import './asset/css/common.css';


Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Vuex);

Vue.use(iView);


// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  Util.title(to.meta.title);
  next();
});

router.afterEach(() => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});


const store = new Vuex.Store({
  state: {
    //api host
    apiHost: "http://api.in-blog.com/api/",
    //顶部导航
    topNavLists: [ //顶部导航
      {id: "1", title: "首页", iconType: "home", iconSize: 18, path: "/"},
      {id: "2", title: "导航二", iconType: "ios-keypad", iconSize: 18, path: "#"},
      {id: "3", title: "导航三", iconType: "ios-analytics", iconSize: 18, path: "#"},
      {id: "4", title: "导航四", iconType: "ios-paper", iconSize: 18, path: "#"}
    ],
    //最新文章列表
    newestArticleListsLoading: true,
    newestArticleLists: [],
    //文章详情
    articleDetail: {title: '', body: '', spinShow: true}
  },
  getters: {},
  mutations: {
    get_new_article_lists(state, newestArticleLists){
      state.newestArticleLists = newestArticleLists;
      state.newestArticleListsLoading = false;
    },
    reset_article_detail(state){
      state.articleDetail = {title: '', body: '', spinShow: true};
    },
    get_article_detail(state, article){
      state.articleDetail = article;
    }
  },
  actions: {
    getNewArticleLists(store){
      Vue.axios.get(store.state.apiHost + 'article/newest/10').then((response) => {
        store.commit('get_new_article_lists', response.data.data);
      });
    },
    getArticleDetail(store, id){
      store.commit('reset_article_detail');
      Vue.axios.get(store.state.apiHost + 'article/' + id).then((response) => {
        var data = {title: response.data.title, body: response.data.body, spinShow: false};
        store.commit('get_article_detail', data);
      });
    }
  }
});


new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
});
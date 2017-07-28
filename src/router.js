import Index from './components/Index.vue';
import ArticleDetail from './components/articles/ArticleDetail.vue';

const routers = [
  {path: '/', component: Index},
  {path: '/article/:id', component: ArticleDetail}
];
export default routers;
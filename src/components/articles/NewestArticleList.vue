<template>
  <Card>
    <Spin fix v-show="newestArticleListsLoading">
      <ripple-loading></ripple-loading>
    </Spin>
    <p slot="title">最新文章</p>
    <p class="newest-article article-list" v-for="newestArticleList in newestArticleLists" :key="newestArticleList.id"
       @click="getArticleDetail(newestArticleList.id)">{{ newestArticleList.title }}</p>
  </Card>
</template>

<style>

</style>

<script>
  import RippleLoading from '../loadings/RippleLoading.vue';

  export default{
    mounted() {
      this.$store.dispatch('getNewArticleLists');
    },
    computed: {
      newestArticleLists(){
        return this.$store.state.newestArticleLists;
      },
      newestArticleListsLoading() {
        return this.$store.state.newestArticleListsLoading;
      }
    },
    methods: {
      getArticleDetail(id){
        this.$router.push({path: '/article/' + id});
      }
    },
    components: {
      RippleLoading
    }
  }
</script>
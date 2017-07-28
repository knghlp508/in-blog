<template>
  <div>
    <Row :gutter="20" type="flex" align="top">
      <Col span="18" class-name="article-detail">
        <Spin fix v-show="articleDetail.spinShow">
          <ripple-loading></ripple-loading>
        </Spin>
        <Col span="24" class-name="article-detail-title">{{ articleDetail.title }}</Col>
        <Col span="24" class-name="article-detail-body"><article>{{ articleDetail.body }}</article></Col>
      </Col>
      <Col span="6" class-name="other-article-area">
        <other-article-list></other-article-list>
      </Col>
    </Row>
  </div>
</template>

<style>
  .article-detail {
    position: relative;
    text-align: center;
    border-radius: 4px;
  }

  .article-detail-title {
    font-size: 2.5em;
    margin: 2% auto 3%;
  }

  .article-detail-body {
    font-size: 1.8em;
    margin: 1% auto 3%;
  }

  .other-article-area {
    text-align: left;
  }
</style>

<script>
  import RippleLoading from '../loadings/RippleLoading.vue';
  import OtherArticleList from './OtherArticleList.vue';

  export default{
    mounted() {
      this.$store.dispatch('getArticleDetail', this.$route.params.id);
    },
    computed: {
      articleDetail(){
        return this.$store.state.articleDetail;
      }
    },
    components: {
      RippleLoading, OtherArticleList
    }
  }
</script>
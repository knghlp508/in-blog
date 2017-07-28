<template>
  <div>
    <Row :gutter="20">
      <!-- 最新文章区域 start -->
      <Col span="17" class-name="bordered">
        <newest-article-list></newest-article-list>
      </Col>
      <!-- 最新文章区域 end -->

      <!-- 热门文章区域 start -->
      <Col span="7">
        <hot-article-list></hot-article-list>
      </Col>
      <!-- 热门文章区域 end -->

    </Row>
    <Row>
      <!-- 分类区域 start -->
      <Col span="24">
        <category-card></category-card>
      </Col>
      <!-- 分类区域 end -->
    </Row>
  </div>
</template>

<style>
  .newest-article {
    padding: 0.5%;
    font-size: 1.3em;
  }
</style>

<script>
  import NewestArticleList from './articles/NewestArticleList.vue';
  import HotArticleList from './articles/HotArticleList.vue';
  import CategoryCard from './categories/CategoryCard.vue';

  export default{
    components: {
      NewestArticleList, HotArticleList, CategoryCard
    }
  }
</script>
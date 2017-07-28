<template>
  <div class="layout">
    <top-navigate></top-navigate>
    <!--<second-top-navigate></second-top-navigate>
    <bread-crumb></bread-crumb>-->
    <div class="layout-content">
      <router-view></router-view>
    </div>
    <div class="layout-copy">
      2011-2016 &copy; TalkingData
    </div>
  </div>
</template>

<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
  }

  .layout-content {
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #FFFFFF;
    border-radius: 4px;
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
</style>

<script>
  import TopNavigate from './components/TopNavigate';
  import SecondTopNavigate from './components/SecondTopNavigate';
  import BreadCrumb from './components/BreadCrumb';

  export default {
    data() {
      return {};
    },
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {},
    components: {
      TopNavigate, SecondTopNavigate, BreadCrumb
    }
  };
</script>
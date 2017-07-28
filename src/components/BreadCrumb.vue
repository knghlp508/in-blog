<template>
  <div class="layout-breadcrumb">
    <Breadcrumb>
      <Breadcrumb-item :href="breadCrumb.href" v-for="breadCrumb in breadCrumbs" :key="breadCrumb.id">{{ breadCrumb.title }}</Breadcrumb-item>
    </Breadcrumb>
  </div>
</template>

<style scoped>
  .layout-breadcrumb {
    padding: 10px 15px 0;
  }
</style>

<script>
  export default{
    data(){
      return {
        breadCrumbs: [
          {id: "1", title: "首页", href: "#"},
          {id: "2", title: "应用中心", href: "#"},
          {id: "3", title: "某应用", href: "#"},
        ]
      }
    }
  }
</script>
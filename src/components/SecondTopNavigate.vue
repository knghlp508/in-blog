<template>
  <Menu mode="horizontal" active-name="1">
    <div class="layout-assistant">
      <Menu-item :name="secondTopNavList.id" v-for="secondTopNavList in secondTopNavLists" :key="secondTopNavList.id">
        {{ secondTopNavList.title }}
      </Menu-item>
    </div>
  </Menu>
</template>

<style scoped>
  .layout-assistant {
    width: 300px;
    margin: 0 auto;
    height: inherit;
  }
</style>

<script>
  export default{
    data(){
      return {
        secondTopNavLists: [
          {id: "1", title: '二级导航1'},
          {id: "2", title: '二级导航2'},
        ]
      }
    }
  }
</script>
<template>
  <Menu mode="horizontal" theme="dark" active-name="1" @on-select="redirectTopNav">
    <div class="layout-logo"></div>
    <div class="layout-nav">
      <Menu-item :name="topNavList.id" v-for="topNavList in topNavLists" :key="topNavList.id">
        <Icon :type="topNavList.iconType" :size="topNavList.iconSize"></Icon>
        {{ topNavList.title }}
      </Menu-item>
    </div>
    <div class="layout-person">
      <span>登录</span>
      <span>注册</span>
    </div>
  </Menu>
</template>

<style scoped>
  .layout-logo {
    width: 8%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 62%;
    margin: 0 auto;
  }

  .layout-person {
    margin-right:3%;
    width: 30%;
    position: relative;
    float: right;
    text-align: right;
    color: hsla(0,0%,100%,.7);
    cursor: pointer;
  }

  .layout-person span {
    margin:auto 1%;
  }

  .layout-person span:hover{
    color: #FFFFFF;
  }
</style>

<script>
  export default{
    data(){
      return {}
    },
    computed: {
      topNavLists(){
        return this.$store.state.topNavLists;
      }
    },
    methods: {
      redirectTopNav(name){
        this.$router.push({path: this.topNavLists[name - 1].path});
      }
    }
  }
</script>
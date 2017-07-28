<template>
  <Card>
    <p slot="title">分类</p>
    <Tooltip class="category-card-btn" placement="top" v-for="categoryCardList in categoryCardLists"
             :key="categoryCardList.id">
      <div slot="content">{{ categoryCardList.title }}</div>
      <img :src="categoryCardList.img">
    </Tooltip>
  </Card>
</template>

<style>
  .category-card-btn {
    text-align: center;
    margin: 1% 3.7%;
    cursor: pointer;
  }

  .category-card-btn img {
    width: 160px;
    height: 160px;
  }
</style>

<script>
  export default{
    data(){
      return {
        categoryCardLists: [
          {id: 1, title: 'PHP', img: 'http://s6.51cto.com/wyfs02/M00/2B/67/wKioL1OH4sqymnVDAAD_U-28-X0702.jpg'},
          {id: 2, title: 'PHP', img: 'http://s6.51cto.com/wyfs02/M00/2B/67/wKioL1OH4sqymnVDAAD_U-28-X0702.jpg'},
          {id: 3, title: 'PHP', img: 'http://s6.51cto.com/wyfs02/M00/2B/67/wKioL1OH4sqymnVDAAD_U-28-X0702.jpg'},
          {id: 4, title: 'PHP', img: 'http://s6.51cto.com/wyfs02/M00/2B/67/wKioL1OH4sqymnVDAAD_U-28-X0702.jpg'},
          {id: 5, title: 'PHP', img: 'http://s6.51cto.com/wyfs02/M00/2B/67/wKioL1OH4sqymnVDAAD_U-28-X0702.jpg'},
          {id: 6, title: 'PHP', img: 'http://s6.51cto.com/wyfs02/M00/2B/67/wKioL1OH4sqymnVDAAD_U-28-X0702.jpg'},
          {id: 7, title: 'PHP', img: 'http://s6.51cto.com/wyfs02/M00/2B/67/wKioL1OH4sqymnVDAAD_U-28-X0702.jpg'}
        ]
      }
    },
    methods: {}
  }
</script>
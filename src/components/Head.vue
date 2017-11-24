<template>
    <div class="head">
        <div class="logo">
            <img src="./assets/logo.png">
            <h1>{{ msg }}</h1>
            <p>do something interesting</p>
            <div class="handle-area">
                <router-link class="write" :to="{name: 'writePage'}">写文章</router-link>
            </div>
        </div>
        <ul class="links">
            <li v-for="link in links" v-bind:key="link.url">
                <router-link :to="{name: link.pathName}" exact><span class="topic">{{link.name}}</span></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "head",
  data() {
    return {
      msg: "welcome to nuannuan's home",
      links: [
        {
          name: "全部",
          pathName: "allPage"
        },
        {
          name: "旅行",
          pathName: "travelPage"
        },
        {
          name: "故事",
          pathName: "storyPage"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.head {
  text-align: center;
  img {
    width: 100px;
    border-radius: 50%;
  }
  h1 {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 12px;
  }
  p {
    margin-bottom: 18px;
  }
  .handle-area {
    position: absolute;
    right: 0;
    top: 0;
    /* -webkit-box-orient: horizontal; */
    /* -webkit-box-direction: normal; */
    -ms-flex-direction: row;
    flex-direction: row;
    height: 58px;
    -ms-flex-align: center;
    -ms-flex-item-align: stretch;
    align-self: stretch;
    a {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      cursor: pointer;
      -ms-flex-align: center;
      padding: 0 10px;
      white-space: nowrap;
    }
  }
  .links {
    text-align: center;
    li {
      display: inline-block;
      margin: 8px;
    }
    .topic {
      display: inline-block;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      padding: 0 15px;
      border-radius: 15px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      color: gray;
    }
    .router-link-active {
      .topic {
        border-color: transparent;
        background: rgba(0, 0, 0, 0.06);
        cursor: default;
      }
    }
  }
}
</style>

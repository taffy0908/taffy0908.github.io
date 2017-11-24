
<template>
  <div class="home">
    <div class="title">
      <h2 class="title__name">最新文章</h2>
      <span class="title__line"></span>
    </div>
  </div>
</template>

<script>
import Head from '@/components/Head';

export default {
  name: 'allPage',
  components: {
    Head,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  .title {
    position: relative;
    display: block;
    margin-bottom: 32px;
    line-height: 22px;
    &__name {
      position: relative;
      display: inline;
      padding-right: 16px;
      font-weight: 600;
      font-synthesis: style;
      background: #fbfcfc;
      z-index: 1;
    }
    &__line {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      height: 1px;
      color: #f0f0f0;
      background: currentColor;
    }
  }
}
</style>

<template>
  <div class="layout">
    <div class="layout__header"></div>
    <div class="layout__main">
      <aside class="layout__aside"></aside>
      <section class="layout__content">
        <router-view />
      </section>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .layout__header {
    width: 100%;
    height: 50px;
    background-color: #f3f4f7;
  }
  .layout__aside {
    position: fixed;
    left: 0;
    top: 50px;
    width: 120px;
    height: calc(100% - 50px);
    background-color: tomato;
  }
  .layout__content {
    width: calc(100% - 120px);
    margin-left: 120px;
    padding: 20px;
  }
</style>

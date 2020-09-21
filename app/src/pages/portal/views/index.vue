<template>
  <div>
    <div>
      <hello />
      {{title}}
    </div>
    <el-button type="primary" @click="handleToAdmin">去后台</el-button>
  </div>
</template>

<script>
import Hello from '@/components/Hello'
export default {
  components: {
    Hello
  },
  computed: {
    title() {
      return this.$store.state.title
    }
  },
  methods: {
    handleToAdmin() {
      window.open('/admin')
    }
  }
}
</script>

<style>

</style>
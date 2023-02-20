<template>
  <div class="detail">
    <BlogDetailComp />
  </div>
</template>

<script>
import BlogDetailComp from '@/components/BlogDetailComp.vue';

export default {
  name: 'HomeView',
  components: {
    BlogDetailComp
  }
}
</script>

<style scoped>
.detail {
  margin: 0 25% 0 25%;
}
</style>

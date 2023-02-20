<template>
	<div class="blogs">
		<BlogComp />
	</div>
</template>

<script>
import BlogComp from '@/components/BlogComp.vue'

export default {
  name: 'HomeView',
  components: {
    BlogComp
  }
}
</script>

<style scoped>
  .blogs {
    margin: 0 25% 0 25%;
  }
</style>

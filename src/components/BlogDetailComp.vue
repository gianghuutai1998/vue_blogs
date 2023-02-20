<template>
  <div class="hello">
    <div v-if="blog" class="mt-10">
      <div>
        <img :src="blog.image" alt="" />
      </div>
      <div>
        <h3>{{ blog.title }}</h3>
        <span>{{ blog.content }}</span>
      </div>
    </div>
    <div v-else>
      <h1>Blogs not found!</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch('blogDetail', id);
  },

  computed: mapState([
    'blog'
  ])
}
</script>

<style scoped>
  .mt-10 {
    margin-top: 10px;
  }

  img {
    max-height: 480px;
  }
</style>

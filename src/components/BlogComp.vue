<template>
  <div class="hello" style="margin: 15px 0 100px;">
    <div style="display: flex;">
      <div class="input-group mb-3">
        <input type="text" class="form-control" style="margin-right: 5px;" v-model="query.search">
        <select class="form-control order-select" v-model="query.order" style="max-width: 70px; margin-right: 5px;"
          @change="searchBlogs()">
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
        <div>
          <button class="btn btn-primary" @click="searchBlogs()">Search</button>
        </div>
      </div>
    </div>
    <div v-if="blogs.length">
      <div v-for="(blog, index) in blogs" :key="index" class="blog-item">
        <div class="card" @click="detail(blog.id)">
          <div style="display: flex;">
            <div style="margin-right: 10px;">
              <img :src="blog.image" height="100" width="100" alt="" />
            </div>
            <div style="text-align: left;">
              <h3>{{ blog.title }}</h3>
              <span>{{ blog.content }}</span>
            </div>
          </div>
        </div>
      </div>
      <PaginationComp
        v-if="blogs.length >= 10"
        @pagechanged="onChange"
        :totalPages="query.totalPages"
        :perPage="query.perPage"
        :currentPage="query.currentPage"
        :total="query.total"
      />
    </div>
    <div v-else>
      <h1>No Content</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PaginationComp from '@/components/PaginationComp.vue'

export default {
  components: {
    PaginationComp
  },

  data() {
    return {
      query: {
        search: '',
        order: 'asc',
        currentPage: 1,
        totalPages: 3,
        perPage: 10,
        total: 10
      },
    }
  },


  created() {
    this.$store.dispatch('search', this.query);
  },

  computed: mapState([
    'blogs',
    'search'
  ]),

  methods: {
    detail(id) {
      this.$router.push({ name: 'blog-detail', params: { id: id } })
    },

    searchBlogs() {
      this.query.currentPage = 1;
      this.$store.dispatch('search', this.query)
    },

    onChange(value) {
      this.query.currentPage = value
      this.$store.dispatch('search', this.query)
    }
  }
}
</script>

<style scoped>
.card {
  margin-bottom: 10px;
}

.blog-item {
  cursor: pointer;
}

.card:hover {
  background-color: rgb(129, 212, 233);
}

img {
  border-radius: 3px;
}
</style>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <div v-for="post in posts" :key="post">
      <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      getAllPosts: 'getAllPosts'
    })
  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    this.posts = this.getAllPosts
  },
  components: {

  }
}
</script>

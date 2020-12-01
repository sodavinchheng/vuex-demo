<template>
  <div>
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            getPostById: 'getPostById'
        })
    },
    data() {
        return {
            post: {}
        }
    },
    created() {
        this.post = this.getPostById(this.$route.params.id)
    }
}
</script>

<style>

</style>
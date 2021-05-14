<template>
    <div>
        <h2>View Post</h2>
            <div v-if="loading">Loading...</div>
            <div v-if="getPost">
                <h3>[ID: {{getPost.id}}]</h3>
            <div>{{getPost.text}}</div>
        <button v-on:click="removePost(getPost.id)">삭제</button>    
    </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  data() {
    return {
      loading: false,
      post: null
    }
  },
  created() {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  computed: { 
    ...mapGetters(['getPost'])       
  },
  methods: {
    removePost(id) {
      this.$store.dispatch('removePost', id);  
      this.$router.push('/posts');
    },
    fetchData() {
      this.loading = true;
      this.$store.dispatch('loadPost', {id:this.$route.params.id});
      this.loading = false;
    }
  }
}
</script>
<style lang="">
    
</style>
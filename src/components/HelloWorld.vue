<template>
  <div class="hello">
    {{msg}}
    {{this.$store.state.test}}
    <h1 v-for="(item, index) in posts" :key="index">{{item.title}}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    this.$store.dispatch('loadPosts')
  },
  computed: {
    ...mapState([
      'posts'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

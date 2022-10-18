<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="checkRouteInfo">ボタン</button>
    <button @click="goToHome">ホームに戻る</button>
  </div>
</template>


<script>
  export default {
    name:"AboutView",
    methods:{
      checkRouteInfo(){
        console.log(this.$router) 
        console.log(this.$route) 
        console.log(this.$route.path) 
      },
      goToHome() {
        this.$router.push("/");
      }
    },
    beforeRouteLeave (to, from, next) {
      const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
      if (answer) {
        next()
      } else {
        next(false)
      }
    }
  }
</script>
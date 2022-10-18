<template>
  <div>
    <p>{{title}}</p>
    <p>{{content}}</p>
  </div>
</template>

<script>
export default {
    props:{
        id: Number,
        title: String,
        content: String
    }
}
</script>

<style>

</style>
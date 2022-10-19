<template>
  <div>router</div>
  <button @click="goHome">goHome</button>
  <button @click="checkRoute">checkRoute</button>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'

export default {
    setup(){
        const router = useRouter()
        const route = useRoute()

        const goHome = ()=> {
            router.push("/");
        }

        const checkRoute =()=> {
            console.log(route.path);
        }

        return {
            goHome,
            checkRoute
        }
    }
}
</script>

<style>

</style>
<template>
  <div>{{ name }}</div>
  <div>ref : {{ nameRef }}</div>
  <div>reactive : {{ book.title }}</div>
  <div>reactive : {{ book.author }}</div>
  <div>reactivetoRefs : {{ titleRef }}</div>
  <div>reactivetoRefs : {{ authorRef }}</div>
  <button @click="btnClicked">ボタン</button>
  <div><input v-model="search"></div>
  <div><input v-model="searchEffect"></div>
</template>

<script>
import { reactive, ref, toRefs } from '@vue/reactivity'
import { computed, onMounted, watch, watchEffect } from '@vue/runtime-core'

export default {
    setup() {
        // console.log("setup")
        let name = "大谷"
        const nameRef = ref("錦織")
        const book = reactive({
            title:"タイトル",
            author:"テスト"
        })

        const booktoRefs = reactive({
            titleRef:"タイトル2",
            authorRef:"テスト2"
        })

        const btnClicked = ()=> {
            console.log("clicked");
        }

        const item = reactive({
            price:100,
            number:1
        })
        const totalPrice = computed(()=>{
            return item.price * item.number
        })

        const search = ref("");
        watch(search,() => {
            console.log(`watch ; ${search.value}`);
        })

        const searchEffect = ref("");
        watchEffect(()=>{
            console.log(`watchEffect: ${searchEffect.value}`);
        })

        onMounted(()=>{
            console.log("onMounted");
        })
        console.log("setup");

        return {
            name,
            nameRef,
            book,
            ...toRefs(booktoRefs),
            btnClicked,
            item,
            totalPrice,
            search,
            searchEffect
        }
    },
    data() {
        return {
            number:1,
        }  
    },
    created() {
        // console.log("created")
    },
    mounted() {
        // console.log("mounted")
    }
}
</script>

<style>

</style>
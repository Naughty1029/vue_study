<template>
  <div>function-test</div>
  <p>{{item.name}}</p>
  <p>{{item.price}}</p>
  <p>{{totalPrice}}</p>
  <button @click="increment">increment</button>
  <button @click="decrement">decrement</button>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'

const useCounter = (item) => {
    const increment = ()=> {
        item.amount++
    }
    const decrement = ()=> {
        item.amount--
    }

    const totalPrice = computed(()=>{
        return item.price * item.amount
    })

    return {increment,decrement,totalPrice}
}
export default {
    setup () {
        const item = reactive({
            name:"商品名",
            price:100,
            amount:1,
        })

        const { increment,decrement,totalPrice} = useCounter(item);

        return {
            item,
            increment,
            decrement,
            totalPrice
        }
    }
}
</script>

<style>

</style>
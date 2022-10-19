<template>
  <div>PropsEmitTest</div>
  <div>{{setupBooks}}</div>
  <div>{{dataBooks}}</div>
  <button @click="emitTest">emitTest</button>
</template>

<script>
export default {
    props:{
        setupBooks:Array,
        dataBooks:Array
    },
    setup(props,context){
        console.log(props.setupBooks);

        const emitTest = ()=> {
            context.emit("custom-event","子の値")
        }

        return {
            emitTest
        }
    }

}
</script>

<style>

</style>
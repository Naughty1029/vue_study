<template>
  <div>
    <button @click="incrementAction">+</button>
    <button @click="addCount">+10</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  methods:{
    // increment(){
    //   this.$store.commit("increment");
    // },
    // addCount() {
    //   this.$store.commit("addCount",{
    //     value:10
    //   });
    // }
    ...mapActions(["incrementAction","addCountAction"]),
    // increment(){
    //   this.$store.dispatch("incrementAction");
    // },
    addCount() {
      this.addCountAction({
        value:10
      });
    }
  }
}
</script>
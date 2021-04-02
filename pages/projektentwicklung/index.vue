<template>
<div>
  <Development/>
</div>
</template>

<script>
import Development from "~/components/Development";
export default {
  name: "index",
  components:{Development},
  data(){
    return{

    }
  },
  created() {
    this.$store.commit('setHeader', false)
  }
}
</script>

<style scoped>

</style>

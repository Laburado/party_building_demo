<template>
  <a-result status="403" title="403" sub-title="Sorry, you are not authorized to access this page.">
    <template #extra>
      <a-button type="primary" @click="goHome">Back Home</a-button>
    </template>
  </a-result>
</template>
<script>
export default {
  name: "403",
  data(){
    return{

    }
  },
  methods:{
    goHome(){
      //路由跳转
      this.$router.push('/')
    }
  }
}
</script>
<!--<script lang="ts" setup>-->
<!--import {ref} from "vue";-->

<!--const name = ref('')-->
<!--console.log(name.value)-->
<!--</script>-->

<style lang="scss" scoped>

</style>
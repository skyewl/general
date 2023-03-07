<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="header">
    <img alt="logo" class="logo" src="../assets/img/logo.svg" width="26" height="30" />
    <h1 class="green">{{ msg }}</h1>
    
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

</style>

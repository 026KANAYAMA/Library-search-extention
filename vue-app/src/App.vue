<template>
  <InputForm/>
</template>

<script>
import InputForm from './components/InputForm.vue'
import './index.css'
export default {
  name: 'App',
  components: {
    InputForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div class="input-form">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="URL">
    <button @click="PrintURL">送信</button>
  </div>
</template>

<script>
export default {
  name: 'InputForm',
  data(){
    return {
      msg : '本のURLを入力してください',
      URL : ''
    }
  },
  methods : {
    PrintURL (){
      this.msg = 'あなたが入力したURLは「' + this.URL + '」です'
    }
  }
  
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

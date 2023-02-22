<template>
  <div class="input-form">
    <h1>Amazon URL を貼り付け</h1>
    <div><input type="text" v-model="url"></div><br>
    <div v-if="existUrl"><button @click="searchUrl">検索</button></div>
  </div>
</template>

<script>
export default {
  name: 'InputForm',
  data(){
    return {
      url : '',
    };
  },
  methods : {
    searchUrl() {
      let url = this.url;
      this.$store.commit("searchUrl",url);
    },
  },
  computed: {
    existUrl: function() {
      return true;
    },
  },
};
</script>

<!--- テスト用URL --->
<!--  https://www.amazon.co.jp/%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92%E3%83%BB%E6%B7%B1%E5%B1%A4%E5%AD%A6%
  E7%BF%92%E3%81%AB%E3%82%88%E3%82%8B%E8%87%AA%E7%84%B6%E8%A8%80%E8%AA%9E%E5%87%A6%E7%90%86%E5%85%A5%E9%
  96%80-scikit-learn%E3%81%A8TensorFlow%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E5%AE%9F%E8%B7%B5%E3%83%97%E
  3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Compass-Data-Science/dp/4839966605/ref=sr_1_1?__m
  k_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=2GDNRNTRXE51I&keywords=%E8%87%AA%E7%84%B6%E8%A8%80%E8
  %AA%9E%E5%87%A6%E7%90%86%E5%85%A5%E9%96%80&qid=1677060374&sprefix=%E8%87%AA%E7%84%B6%E8%A8%80%E8%AA%9E%
  E5%87%A6%E7%90%86%E5%85%A5%E9%96%80%2Caps%2C222&sr=8-1  -->
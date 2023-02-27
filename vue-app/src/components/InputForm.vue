<template>
  <div class="input-form">
    <div>
      <h1>AmazonのURLを貼り付けてください</h1>
      <p>※Kindle版は対応していません</p>
      <p>※URLを入力すると検索ボタンが表示されます</p>
    </div>
    <div>
      <input type="text" v-model="urlFieldText" ref="input">
      <div v-if="kindle"><button @click="clearText">入力をクリア</button></div>
    </div><br>
    <div v-if="isbn != ''">
      <button @click="searchUrl">検索</button>
    </div>
    <div v-if="kindle">
      <h2>エラー</h2>
      <p>※入力されたURLはKindle版の可能性があります</p>
      <p>※紙版のURLを入力してください</p>
      <img src="https://i.gyazo.com/c13353fcbacce087b7dd3a42985d19c0.png" alt="補足画像">
    </div>
  </div>
</template>

<script>
import {convertUrl2Isbn13} from "asin2isbn";
export default {
  name: 'InputForm',
  data(){
    return {
      urlFieldText:'',
      isbn : '',
      kindle : false,
    };
  },
  methods : {
    searchUrl() {
      console.log("この本のISBNは" + this.isbn);
      window.open("https://sistlb.sist.ac.jp/opac/search?isbn=" + this.isbn);
    },
    isKindleUrl(url){
      const pattern = /amazon/;
      return pattern.test(url);
    },
    clearText(){
      this.urlFieldText = '';
      this.$refs.input.focus();
    },
  },
  watch:{
    urlFieldText: function(newVal) {
      let url = newVal;
      let res = convertUrl2Isbn13(url);
      this.isbn= res.error != "" ?  "" :  res.isbn;
      if(this.isbn == ""){
        this.kindle = this.isKindleUrl(url);
      }
    }
  },
  created: function() {
    document.addEventListener('visibilitychange', this.clearText);
  },
  mounted() {
    this.$refs.input.focus();
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

<!-- テスト用URL Kindel用 -->
<!--  https://www.amazon.co.jp/%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92%E3%83%BB%E6%B7%B1%E5%B1%A4%E5%AD%A6%E7
  %BF%92%E3%81%AB%E3%82%88%E3%82%8B%E8%87%AA%E7%84%B6%E8%A8%80%E8%AA%9E%E5%87%A6%E7%90%86%E5%85%A5%E9%96%
  80-Compass-Books%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA-%E4%B8%AD%E5%B1%B1-%E5%85%89%E6%A8%B9-ebook/dp/B08
  4WPRT44/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1677060374&sr=8-1  -->


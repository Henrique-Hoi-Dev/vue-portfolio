<template>
  <div id="app">
    <Header/>
    <router-view />
    <div id="footer">
      <Footer />  
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { Header, Footer }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#footer {
  bottom:0;
  width:100%;
  padding-top:20px;
  margin-top: 220px;
  color:white;
  background-color:#3e4551 !important;
  display:flex;
  flex-direction:column;
  align-items:center;
}
</style>

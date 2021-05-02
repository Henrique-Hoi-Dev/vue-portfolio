<template>
  <div id="app">
    <div id="menu-header">
      <Menu id="menu"/>
      <main>
        <Header id="header"/>     
        <router-view />
        <div id="footer">
          <Footer />  
        </div>
      </main> 
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { Header, Footer, Menu }
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
#menu-header {
  display: flex;
  
  main {
    flex: 1
  }
}
#menu {
  width: 12rem;
  max-height: 250.9vh;
  background: #343a40;
}
#header {
  width: 100%;
}
#footer {
  bottom:0;
  width:100%;
  padding-top:20px;
  margin-top: 100px;
  color:white;
  background-color:#3e4551 !important;
  display:flex;
  flex-direction:column;
  align-items:center;
}
@media (max-width: 800px) {
  #menu-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  #menu {
    margin-top: -20px; 
    width: 4rem;
    max-height: 370.9vh;
  }
  .b-avatar {
    margin-left: 5px;
    width: 50px!important;
    height: 50px!important;
  }
}
</style>

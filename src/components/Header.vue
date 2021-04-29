<template>
  <div >
  <b-navbar class="menu" type="dark" variant="dark">
      <div >
        <h2 v-html="paper"></h2>
      </div>
  </b-navbar>
</div>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
      titeleText: "My name - Henrique Hoinacki .... Developer Web    ",
      paper: '',
      timer: null
    }
  },
  mounted() {
    this.printer()
  },
  methods: {
    printer() {
      this.stoper()
      let i = -1
      this.timer = setInterval(() => {
        i++
        const x = i%this.titeleText.length
        this.paper += this.titeleText[x]
      }, 200-(Math.random()*50))
    },
    stoper() {
      clearInterval(this.timer )
      this.paper = ''
    }
  },
  watch: {
    paper:function() {
      if(this.paper.length == this.titeleText.length){
        this.paper = ''
      }
    }
   }

};
</script>
<style scoped>
h2 {
  color:purple;
  font-family: Lexend ,sans-serif;
  border-right: 4px purple solid;
  animation: typebar 0.s steps(40) infinite;
}
.menu {
  height: 70px;
}
.bg-dark {
  display: flex;
  justify-content: space-between;
}
</style>


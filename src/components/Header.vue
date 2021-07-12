<template>
  <div>
    <b-navbar class="menu" type="dark" variant="dark">
      <h2 v-html="paper"></h2>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      titeleText: 'My name - Henrique Hoinacki .... Developer Web    ',
      paper: '',
      timer: null,
    };
  },
  mounted() {
    this.printer();
  },
  methods: {
    printer() {
      let i = -1;
      this.timer = setInterval(() => {
        i++;
        const x = i % this.titeleText.length;
        this.paper += this.titeleText[x];
      }, 200 - Math.random() * 50);
    },
  },
  watch: {
    paper: function() {
      if (this.paper.length == this.titeleText.length) {
        clearInterval(this.timer);
      }
    },
  },
};
</script>
<style scoped>
h2 {
  color: #f7fff7;
  font-family: Lexend, sans-serif;
  border-right: 4px #f7fff7 solid;
  animation: typebar 0s steps(40) infinite;
}
.menu {
  height: 80px;
}
.bg-dark {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 700px) {
  h2 {
    font-size: 15px;
  }
}
</style>

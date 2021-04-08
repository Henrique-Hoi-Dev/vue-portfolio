<template>
  <div class="title">
    <h1 v-html="paper"></h1>
      <div class="card-grid">
          <div class="animate__animated animate__lightSpeedInRight">
            <b-card-group deck>
              <b-card img-src="https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png"  img-alt="Card image" img-top>
                <b-card-text>
                  Project follows the repository link
                  <a target="_blank" href="https://github.com/Henrique-Hoi-Dev/avaliacao-front-end-sponte">
                  Repo
                  </a>
                </b-card-text>
              </b-card>

              <b-card img-src="https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png" img-alt="Card image" img-bottom>
                <b-card-text>
                  Project follows the repository link
                  <a target="_blank" href="https://github.com/Henrique-Hoi-Dev/gobarber">
                  Repo
                  </a>               
                </b-card-text>
              </b-card>
            </b-card-group>
          </div>
      </div>
      <div class="card-grid">
          <div class="animate__animated animate__lightSpeedInRight">
            <b-card-group deck>
              <b-card img-src="https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png" img-alt="Card image" img-top>
                <b-card-text>
                  Project follows the repository link
                  <a target="_blank" href="https://github.com/Henrique-Hoi-Dev/WebApi-asp.NET">
                  Repo
                  </a>  
                </b-card-text>
              </b-card>

              <b-card img-src="https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png" img-alt="Card image" img-bottom>
                <b-card-text>
                  Project follows the repository link
                  <a target="_blank" href="https://github.com/Henrique-Hoi-Dev/ilia-frontend-challenge">
                  Repo
                  </a>  
                </b-card-text>
              </b-card>
            </b-card-group>
          </div>
      </div>
  </div>
</template>

<script>
 
export default {
  name: "Welcome",
  data() {
    return {
      titeleText: "Welcome to my Portfolio! My name is Henrique Hoinacki...",
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
}
</script>

<style scoped>
  h1 {
    display: inline;
    border-right: 2px black solid;
    animation: typebar 0.s steps(40) infinite;
    font-weight: 800;  
  }
  .title {
    margin-top: 10px;
  }
  @keyframes typebar {
    from{border-right: 2px black solid;}
    to{border-right: 2px transparent solid;}
  }
  .card-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    padding: 50px;
  }
  .card-img-bottom {
    max-width: 300px
  }
  .card-img-top {
    max-width: 300px;
  }
  .card {
    max-width: 300px;
  }
</style>

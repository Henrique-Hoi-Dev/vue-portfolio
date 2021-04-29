<template>
  <div class="title">
    <h1>Welcome to my Portfolio!</h1>
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
  
}
</script>

<style scoped>
  h1 {
    font-weight: 800;  
  }
  .title {
    margin-top: 10px;
  }
  .card-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    padding: 20px;
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

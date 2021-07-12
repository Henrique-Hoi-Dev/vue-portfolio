<template>
  <div class="hello">
      <h2>A little of my history</h2>
    <div class="logos">
      <div class="animate__animated animate__flipInX animate__fasts">
        <b-img :src="require('@/assets/javaScript.png')"></b-img>
      </div>
      <div class="animate__animated animate__fadeInDown animate__fasts">
      <b-img :src="require('@/assets/logo.png')"></b-img>
      </div>
      <div class="w3-spin">
        <b-img :src="require('@/assets/react.png')"></b-img>
      </div>
      <div class="animate__animated animate__flipInX animate__fasts">
      <b-img :src="require('@/assets/nodejs.png')"></b-img>
      </div>
    </div>
      <div class="text">
        <p>
          <ul class="animate__animated animate__fadeInRight animate__fasts">
            <p>
              Beginner in business development, I have been working for over 1 year with ASP .Net Core,
              <br> 
              in projects that I already work as a freelancer, I used modern and functional methodologies for 
              <br>
              better performance in my development projects, I have high knowledge with Native JavaScript, 
              <br>
              libraries like VueJS , ReactJS and NodeJS, following these technologies I usually adopt 
              <br>
              the implementation of versioned Dockerization and code versioning with Github.
            </p>     
          </ul>
          <ul class="animate__animated animate__fadeInLeft animate__fast">
            <p>
              Currently, my focus is on agile development and looking to improve my career,
              <br> 
              I tend to be always up to date on what is happening in the world of
              <br>
              JS developers, new frameworks and libraries.
            </p>
          </ul>
          <ul class="animate__animated animate__fadeInRight animate__fast">
            <p>
              My web developer skills: VueJs and React, Hooks and Context Api; 
              <br>
              Stylized Components, Stylized System; Formik and Yup; Tests with Jest and Cypress; 
              <br>
              Monorepo; ASP .Net Core; NodeJS; AWS; Docker;
            </p>
         </ul>          
        </p>
      </div>
        <div id="barras" class="animate__animated animate__fadeInLeft animate__fast" >
          <div class="progres">
            <h5>ReactJS</h5>
            <b-progress 
              :value="value[0]" 
              show-progress 
              variant="primary" 
              striped :animated="animate"
              ></b-progress>
            <h5>Vue.JS</h5>
            <b-progress 
              :value="value[1]" 
              show-progress 
              variant="success" 
              striped :animated="animate"
              ></b-progress>
            <h5>Node.JS</h5>
            <b-progress 
              :value="value[2]" 
              show-progress 
              variant="dark" 
              striped :animated="animate"
              ></b-progress>
            <h5>ASP.NET Core</h5>
            <b-progress 
              :value="value[3]" 
              show-progress 
              variant="secondary" 
              striped :animated="animate"
              ></b-progress>
            <h5>C#</h5>
            <b-progress 
              :value="value[4]" 
              show-progress 
              variant="danger" 
              striped :animated="animate"
              ></b-progress>
          </div> 
        </div>
      <div>
        <h4>To download my CV</h4>  
        <b-link target="_blank" href="https://files.fm/down.php?cf&i=6pvs9q6ru&n=henriquehoinacki_desenvolvedorweb.pdf">
        Curriculum <b-icon  icon="download" aria-hidden="true"/>
        </b-link>
      </div>     
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
      return {
        value: [70, 50, 40, 30, 30],
        animate: true
      }
    }
};
</script>

<style scoped>
a {
  color: rgb(0, 128, 85);
  text-decoration: none;
}
.b-icon.bi {
  margin-left: 5px;
}
.hello {
  margin-top: 10px;
}
.logos {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.text {
  width: 800px;
  margin: 10px auto;
}
#barras {
  margin-right: 20rem;
  margin-bottom: 5rem;
}
.progres {
  margin-left: 20rem;
}
img  {
  width: 100px;
  height: 100px;
  margin: 30px;
}
p {
  margin-top: 10px;
  display: inline-block;
  margin: 0 10px;

  font-family: Lexend ,sans-serif;
}

h1 {
  margin: 40px 0 0;
}
h2 {
  font-weight: 700;
}
h5 {
  margin-top: 2rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
@media (max-width: 800px) {
  .logos {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .text {
    width: auto;
  }
  #barras {
  margin-right: 3rem;
  }
  .progres {
  margin-left: 3rem;
  }
}
</style>

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
          <ul class="animate__animated animate__fadeInRight animate__fast">
            <li>
              I started working at an internet provider,
            </li>
            <li>
              that period was where I had my first contacts with linux servers
            </li>
            <li>
                to make settings and put some web website on the air by Apache
            </li>
            <li>
              I worked there for a while, but I had to move to another city       
            </li>
          </ul>
          <ul class="animate__animated animate__fadeInLeft animate__fast">
            <li>
              there was where I got a job of technician where I did maintenance and 
            </li>
            <li>
              configuration of television sets, but i also worked doing some freelance
            </li>
            <li>
               developing some portals and dashboard using ReactJS
            </li>
          </ul>
          <ul class="animate__animated animate__fadeInRight animate__fast">
            <li>
              and nodeJS and postgreSQL database after a while I   
            </li>
            <li>
              decided to find a job in the area of development
            </li>
            <li>            
              and when I got my first job, I worked as a backend with the .NET core language 
            </li>
            <li>
              language that I had little knowledge
            </li>
            <li>
              but with this work I managed to have a great experience.   
            </li>
            <li>
            </li>
         </ul>          
        </p>
      </div> 
      <div class="animate__animated animate__fadeInLeft animate__fast">
          <h4>To download my CV</h4>  
          <b-link target="_blank" href="https://files.fm/down.php?i=faygfmyv8&n=henriquehoinacki_desenvolvedor-web.pdf">
          Curriculum <b-icon  icon="download" aria-hidden="true"/>
          </b-link>
      </div>     
  </div>
</template>

<script>
export default {
  name: 'Home'
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
img  {
  width: 100px;
  height: 100px;
  margin: 30px;
}
p {
  margin-top: 10px;
}

h1 {
  margin: 40px 0 0;
}
h2 {
  font-weight: 700;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;

  font-family: Lexend ,sans-serif;
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
}
</style>

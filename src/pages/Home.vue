<template>
  <div class="hello">
      <h2>Um pouco da minha história</h2>
    <div>
      <b-img :src="require('@/assets/javaScript.png')"></b-img>
      <b-img :src="require('@/assets/logo.png')"></b-img>
      <b-img :src="require('@/assets/react.png')"></b-img>
      <b-img :src="require('@/assets/nodejs.png')"></b-img>
    </div>   
        <p>
         <ul>
          <li>
          Comecei trabalhando num provedor de internet, 
          nesse período foi onde tive meu primeiros contatos com servidores linux
          </li>
          <li>
          para fazer configurações e colocar algum web 
          site no ar pelo Apache 
          </li>
          <li>
          trabalhei por um tempo lá, mas precisei mudar de cidade        
          </li>
          <li>
          lá foi onde eu consegui um trabalho
          de técnico onde eu fazia manutenção e configuração de aparelhos da televisão,         
          </li>
          <li>
          mas eu também trabalhei fazendo alguns freelance desenvolvendo alguns portais e 
          dashboard usando ReactJS 
          </li>
          <li>
          e nodeJS e banco de dados postgreSQL 
          depois de um tempo eu resolvi achar um trabalho na área de desenvolvimento web 
          </li>
          <li>
          e quando eu consegui meu primeiro emprego, trabalhei como backend com a linguagem .NET core
          linguagem que eu tinha pouco conhecimento
          </li>
          <li>
          mas com esse trabalho consegui ter uma ótima experiência. 
          </li>
         </ul>          
        </p>  
        <h4>Para download do meu Currículo</h4>  
        <b-link target="_blank" href="https://drive.google.com/file/d/1LfA_nl-QMyas2R7vd-tXEaPiZlnIqGA2/view?usp=sharing">
         Currículo <b-icon  icon="download" aria-hidden="true"/>
        </b-link>
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>

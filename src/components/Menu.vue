<template>
  <div  class="menu">
      <template>
        <div class="mb-2">
          <b-avatar class="avatar" src="https://files.fm/thumb_show.php?i=v9ff6wnfg" 
          size="6rem"></b-avatar>
        </div>
      </template>
      <div class="px-2 py-2">
       <b-button variant="primary" to="/"> 
            Home <b-icon icon="list-nested" />
       </b-button>
       <b-button variant="primary" type="primary" to="/story"> 
            My resume <b-icon icon="person-fill" />
       </b-button>
       <b-button variant="primary">
            <b-link href="https://www.linkedin.com/in/henrique-hoinacki-a98b851a5/"  target="_blank">
              Linkedin <b-icon icon="linkedin" /> 
           </b-link>  
       </b-button>
       <b-button variant="primary">
            <b-link href="https://github.com/Henrique-Hoi-Dev"  target="_blank">
              Github <b-icon icon="github" /> 
           </b-link>  
       </b-button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
 .px-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
 }
 .btn {
  width: 8.2rem;
  
  margin-top: 5px;
  text-decoration: none;
 }
 .btn a {
  color: #ced2d8;
  text-decoration: none;
  align-items: center;
 }
 .px-2 button {  
  width: 8.2rem;

  color: #ced2d8;
  font-family: Lexend ,sans-serif;
 }
 .mb-2 {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 8rem;
 }
 .b-avatar {
  border: 3px solid purple;
 }
 @media (max-width: 800px) {

  .px-2 {
    margin: 95px 0 0 70px;
  }
  .btn {
    margin-top: 10px;
    text-decoration: none;
  }
  .btn a {
    width: 50px; 
    text-decoration: none;
  }
}
</style>

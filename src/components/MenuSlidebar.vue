<template>
  <div >
    <b-button v-b-toggle.sidebar-backdrop>Profile</b-button>
    <b-sidebar id="sidebar-backdrop" 
    bg-variant="dark"
    title="Sidebar with backdrop"
    backdrop
    shadow
    >
      <template>
        <div class="mb-2">
          <b-avatar class="avatar" to="/" src="https://media-exp1.licdn.com/dms/image/C4D03AQHIFsXtyszNCA/profile-displayphoto-shrink_200_200/0/1617899245079?e=1623283200&v=beta&t=uCK-rB8uXDFIR3UC2S8Sje1IrRuGTJFwskcGBYRBYN8" 
          size="6rem"></b-avatar>
        </div>
      </template>
      <div class="px-2 py-2">
       <b-button variant="success" type="primary" to="/story"> 
            My resume <b-icon icon="person-fill" aria-hidden="true"/>
       </b-button>
       <b-button variant="success">
            <b-link href="https://www.linkedin.com/in/henrique-hoinacki-a98b851a5/"  target="_blank">
              Linkedin <b-icon icon="linkedin" aria-hidden="true"/> 
           </b-link>  
       </b-button>
       <b-button variant="success">
            <b-link href="https://github.com/Henrique-Hoi-Dev"  target="_blank">
              Github <b-icon icon="github" aria-hidden="true"/> 
           </b-link>  
       </b-button>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
   name: "MenuSlidebar",
   
}
</script>

<style scoped>
 .px-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
 }
 .btn {
  margin-top: 5px;
  text-decoration: none;
 }
 .btn a {
  color: #ced2d8;
  text-decoration: none;
 }
 .px-2 button {  
  width: 8rem;

  color: #ced2d8;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
 }
 .mb-2 {
  display: flex;
  justify-content: center;
  align-items: center;

   height: 8rem;
 }
 .b-avatar .b-avatar-img img {
  border: 3px solid #ced2d8;
 }
</style>

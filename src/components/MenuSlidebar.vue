<template>
  <div >
    <b-button v-b-toggle.sidebar-backdrop>Profile</b-button>
    <b-sidebar id="sidebar-backdrop" 
    bg-variant="dark"
    title="Sidebar with backdrop"
    :backdrop-variant="variant"
    backdrop
    shadow
    >
      <template>
        <div class="mb-2">
          <b-avatar class="avatar" @click="add" to="/" src="https://media-exp1.licdn.com/dms/image/C4D03AQGwOTp8p1SnzA/profile-displayphoto-shrink_800_800/0/1596717452186?e=1620864000&v=beta&t=DpLc64lyskgljWlorLrEk5_xv1PfLNZsPkbtYrLYxac" 
          size="6rem"></b-avatar>
        </div>
      </template>
      <div class="px-2 py-2">
       <el-button>
         <button type="primary" >
           <router-link to="/home">
              My resume <b-icon icon="person-fill" aria-hidden="true"/>
           </router-link>

         </button>
       </el-button>
       <el-button>
          <button type="primary">
            <b-link href="https://www.linkedin.com/in/henrique-hoinacki-a98b851a5/"  target="_blank">
              Linkedin <b-icon icon="linkedin" aria-hidden="true"/> 
           </b-link>  
          </button>
       </el-button>
       <el-button>
          <button type="primary">
            <b-link href="https://github.com/Henrique-Hoi-Dev"  target="_blank">
              Github <b-icon icon="github" aria-hidden="true"/> 
           </b-link>  
          </button>     
       </el-button>
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
 }
 .px-2 el-button {
   display: flex;
   justify-content: center;
   margin-top: 1rem;
 }
 .px-2 button {  
   width: 8rem;
   height: 2rem;

   border-radius: 8px;
   color: #ced2d8;
   font-family: Verdana, Geneva, Tahoma, sans-serif;

   background-color: #2eb85c;
 }

 .px-2 button a {
   width: 7rem;
   height: 2rem;

   border-radius: 8px;
   color: #ced2d8;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
   text-decoration: none;  

   background-color: #2eb85c;
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
 /* .b-icon.bi {
   color: #fff;
 } */
</style>

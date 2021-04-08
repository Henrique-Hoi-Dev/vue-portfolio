<template>
  <div >
  <b-navbar class="menu" type="dark" variant="dark">
      <MenuSlidebar />
      <div >
        <b-avatar badge badge-variant="success" src="https://media-exp1.licdn.com/dms/image/C4D03AQHIFsXtyszNCA/profile-displayphoto-shrink_200_200/0/1617899245079?e=1623283200&v=beta&t=uCK-rB8uXDFIR3UC2S8Sje1IrRuGTJFwskcGBYRBYN8"></b-avatar>
      </div>
  </b-navbar>
</div>
</template>

<script>
import MenuSlidebar from "@/components/MenuSlidebar.vue";

export default {
  name: "Header",
  components: { MenuSlidebar }
};
</script>
<style scoped>
.menu {
  height: 70px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
}
.bg-dark {
  display: flex;
  justify-content: space-between;
}
</style>


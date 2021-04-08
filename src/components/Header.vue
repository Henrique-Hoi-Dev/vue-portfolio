<template>
  <div >
  <b-navbar class="menu" type="dark" variant="dark">
      <MenuSlidebar />
      <div >
        <b-avatar badge badge-variant="success" src="https://media-exp1.licdn.com/dms/image/C4D03AQGwOTp8p1SnzA/profile-displayphoto-shrink_800_800/0/1596717452186?e=1620864000&v=beta&t=DpLc64lyskgljWlorLrEk5_xv1PfLNZsPkbtYrLYxac"></b-avatar>
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


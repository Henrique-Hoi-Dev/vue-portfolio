<template>
  <div>
  <b-navbar class="menu" type="dark" variant="dark">
      <MenuSlidebar />
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
<style >
.menu {
  height: 70px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
}

</style>


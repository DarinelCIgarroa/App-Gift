<template>
  <div id="nav">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer
},
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
*{
  margin: 0;
  padding: 0;
}
</style>
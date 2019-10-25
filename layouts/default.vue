
<template>
  <div>
    <!-- <navbar @scrolEv="show"/> -->
    <nuxt/>
    <Footer/>
  </div>
</template>
<script>
// import navbar from "~/components/navbar.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    // navbar,
    Footer
  },
  methods: {
    show() {
      console.log(this.$refs);
    }
  }
};
</script>

<template>
  <router-view :isSizeDesktop="isSizeDesktop" :mobileScreenSize="mobileScreenSize"/>
</template>

<script>
export default{
  data(){
    return{
      isSizeDesktop: true,
      mobileScreenSize: null
    }
  },
  methods: {
    checkScreenSize() {
      this.isSizeDesktop = window.innerWidth >= 768; // Adjust the screen size threshold as needed
      this.mobileScreenSize = window.innerWidth;
    }
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  unmounted() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
}
</script>


<style>
*{
  margin: 0;
  box-sizing: border-box;
  background-color: black;
  color: white;
}
#app {
  font-family: Inter, Helvetica, Arial, sans-serif;
}
</style>

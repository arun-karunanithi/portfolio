<template>
        <nav class="desktop-nav" v-if="isSizeDesktop">
        <p class="logo_text remove-p-margin" @click="refreshHome">AK</p>
        <div class="nav_links">
            <p class="nav_item remove-p-margin"><a href="#about" class="nav-item-link-desktop">About</a></p>
            <p class="nav_item remove-p-margin"><a href="#work" class="nav-item-link-desktop">Work</a></p>
            <p class="nav_item remove-p-margin"><a href="#skills" class="nav-item-link-desktop">Skills</a></p>
            <p class="nav_item remove-p-margin"><a href="#contact" class="nav-item-link-desktop">Contact</a></p>
        </div>
    </nav>
    <nav class="mobile-nav" v-else>
        <p class="logo_text remove-p-margin"  @click="refreshHome">AK</p>
        <div class="nav_links">
            <p class="nav_item remove-p-margin"><a href="#contact" class="nav-item-link-mobile">Contact</a></p>
        </div>
    </nav>
    <home-section :isSizeDesktop="isSizeDesktop" :mobileScreenSize="mobileScreenSize"></home-section>
    <about-me :isSizeDesktop="isSizeDesktop" :mobileScreenSize="mobileScreenSize" id="about"></about-me>
    <work-updated :isSizeDesktop="isSizeDesktop" :mobileScreenSize="mobileScreenSize" id="work"></work-updated>
    <my-skills :isSizeDesktop="isSizeDesktop" :mobileScreenSize="mobileScreenSize" id="skills"></my-skills>
    <contact-section :isSizeDesktop="isSizeDesktop" :mobileScreenSize="mobileScreenSize" id="contact"></contact-section>
</template>

<script>
import HomeSection from '../components/HomeSection.vue'
import AboutMe from '../components/AboutMe.vue'
import MySkills from '../components/MySkills.vue'
import ContactSection from '../components/ContactSection.vue'
import WorkUpdated from '../components/WorkUpdated.vue'


export default{
    components:{
        HomeSection, AboutMe, WorkUpdated, MySkills, ContactSection
    },
    props:['isSizeDesktop','mobileScreenSize'],
    methods:{
        refreshHome(){
            this.$router.go(0);
            return;
        }
    }
}
</script>

<style scoped>
.remove-p-margin{
      margin-bottom: 0;
  }
  .desktop-nav{
      display: flex;
      margin-left: 64px;
      margin-right: 64px;
      margin-top: 48px;
      margin-bottom: 40px;
      font-family: 'Comfortaa','Inter', sans-serif;
      font-weight: 500;
  }
  .mobile-nav{
      display: flex;
      margin-left: 16px;
      margin-right: 16px;
      margin-top: 24px;
      margin-bottom: 16px;
      font-family: 'Comfortaa','Inter', sans-serif;
      font-size: 14px;
      font-weight: 400;
      height: auto;
  }
  .logo_text{
      flex-grow: 1;
  }
  .logo_text:hover{
    cursor: pointer;
  }
  .nav_links{
      display: flex;
      height: auto;
  }
  .nav_item{
      padding-left: 64px;
  }
  .nav-item-link-desktop{
    font-family: 'Comfortaa','Inter', sans-serif;
    text-decoration: none;
    color: white;
  }
  .nav-item-link-mobile{
    font-family: 'Comfortaa','Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
    height: auto;
    text-decoration: none;
    color: white;
  }
</style>
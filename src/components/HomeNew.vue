<template>
    <div class="container">
        <div class="row justify-content-center align-items-center home-content-desktop">
           <div class="bgimage">

           </div>
        </div>
    </div>
  </template>
  
  <script>
  export default{
    props:['isSizeDesktop','mobileScreenSize'],
    computed:{
        dynamicHeroImageHeight() {
            if(!this.isSizeDesktop){
                return { 'min-height': this.mobileScreenSize*0.6 + 'px' }
            } else{
                return null
            }
        }
      }
  }
  </script>
  
  <style scoped>
    .remove-p-margin{
        margin-bottom: 0;
    }
    .home-content-desktop{
        height: 80vh;
    }
    .home-text-desktop h3{
        font-family: 'Comfortaa','Inter', sans-serif;
        font-size: 48px;
        margin-bottom: 40px;
        font-weight: 700;
    }
    .home-text-desktop ul{
        font-family: 'Comfortaa','Inter', sans-serif;
        font-size: 18px;
        list-style: none;
        padding: 0;
    }
    .home-text-desktop ul li{
        padding-left: 24px;
        background-image: url(https://i.imgur.com/vP5KLJx.png);
        background-repeat: no-repeat;
        background-position: left;
        background-size: 16px;
        margin-bottom: 32px;
    }
    .home-text-mobile{
        padding-left: 16px;
        padding-right: 16px;
        margin-bottom: 48px;
    }
    .home-text-mobile h3{
        font-family: 'Comfortaa','Inter', sans-serif;
        font-size: 28px;
        margin-bottom: 28px;
        margin-top: 24px;
        font-weight: 700;
    }
    .home-text-mobile ul{
        font-family: 'Comfortaa','Inter', sans-serif;
        font-size: 16px;
        list-style: none;
        padding: 0;
    }
    .home-text-mobile ul li{
        padding-left: 24px;
        background-image: url(https://i.imgur.com/vP5KLJx.png);
        background-repeat: no-repeat;
        background-position: left;
        background-size: 16px;
        margin-bottom: 24px;
    }
    .home-picture{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .bg-space{
        position: absolute;
        width: 100%;
        z-index: 0;
    }
    .fg-my-picture{
        position: absolute;
        width: 50%;
        z-index: 1;
        background: none;
    }
  </style>
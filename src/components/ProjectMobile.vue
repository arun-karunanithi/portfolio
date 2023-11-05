<template>
    <div class="container-fluid" style="padding: 0;">
        <div class="overall-card">
            <div class="logo-box">
                <img class="logo" :src=projectLogo>
            </div>
            <h3 class="project-title"> {{ projectTitle }} </h3>
            <div class="info-title-group">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.33333 4.66667H2.66666C2.31304 4.66667 1.9739 4.80714 1.72385 5.05719C1.4738 5.30724 1.33333 5.64638 1.33333 6V12.6667C1.33333 13.0203 1.4738 13.3594 1.72385 13.6095C1.9739 13.8595 2.31304 14 2.66666 14H13.3333C13.6869 14 14.0261 13.8595 14.2761 13.6095C14.5262 13.3594 14.6667 13.0203 14.6667 12.6667V6C14.6667 5.64638 14.5262 5.30724 14.2761 5.05719C14.0261 4.80714 13.6869 4.66667 13.3333 4.66667H10.6667M5.33333 4.66667V2.4C5.33333 2.29391 5.37547 2.19217 5.45048 2.11716C5.5255 2.04214 5.62724 2 5.73333 2H10.2667C10.3727 2 10.4745 2.04214 10.5495 2.11716C10.6245 2.19217 10.6667 2.29391 10.6667 2.4V4.66667M5.33333 4.66667H10.6667" stroke="#CBCBCB"/></svg>
                <p class="remove-p-margin">My Role</p>
            </div>
            <p class="project-meta-info"> {{ myRole }} </p>
            <div class="info-title-group">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_248_701)"><path d="M8 4V8H12" stroke="#CBCBCB" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 14.6666C11.682 14.6666 14.6667 11.682 14.6667 7.99998C14.6667 4.31798 11.682 1.33331 8 1.33331C4.318 1.33331 1.33333 4.31798 1.33333 7.99998C1.33333 11.682 4.318 14.6666 8 14.6666Z" stroke="#CBCBCB" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_248_701"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                <p class="remove-p-margin">Duration</p>
            </div>
            <p class="project-meta-info"> {{ duration }} </p>
            <div class="project-link child-flex-info">
                <button class="protected-button" v-if="isProtected">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 12H17.4C17.5591 12 17.7117 12.0632 17.8243 12.1757C17.9368 12.2883 18 12.4409 18 12.6V19.4C18 19.5591 17.9368 19.7117 17.8243 19.8243C17.7117 19.9368 17.5591 20 17.4 20H6.6C6.44087 20 6.28826 19.9368 6.17574 19.8243C6.06321 19.7117 6 19.5591 6 19.4V12.6C6 12.4409 6.06321 12.2883 6.17574 12.1757C6.28826 12.0632 6.44087 12 6.6 12H8M16 12V8C16 6.667 15.2 4 12 4C8.8 4 8 6.667 8 8V12M16 12H8" stroke="#101010" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <p class="remove-p-margin">Protected by NDA</p>
                </button>
                <button class="case-study-button" v-else @click="this.$router.push(destination)">View Case Study</button>
                <p class="remove-p-margin visit-product-button" v-if="isProductLink" @click="openExternalLink"> {{ productLinkText }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:['projectLogo','projectTitle','myRole','duration','isProtected','destination','isProductLink','productLink','productLinkText'],
    methods:{
        openExternalLink(){
            window.open(this.productLink, '_blank');
        }
    }
}
</script>

<style scoped>
*{
    background-color: #101010;
}
.remove-p-margin{
    margin-bottom: 0;
    background-color: #101010;
}
.overall-card{
    margin: 0;
    background-color: #101010;
    padding: 12px;
}
.logo-box{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    background-color: #232323;
    height: 136px;
    border-radius: 12px;
}
.logo{
    max-width: 120px;
    max-height: 104px;
    object-fit: contain;
    background-color: #232323;
}
.project-title{
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 20px;
}
.info-title-group{
    display: flex;
    flex-direction: row;
    gap: 8px;
    background-color: #101010;
    align-items: center;
    margin-bottom: 6px;
}
.info-title-group p{
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
}
.project-meta-info{
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 20px;
}
.project-link{
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 12px;
    background-color: #101010;
    height: 100%;
}
.protected-button{
    padding: auto 12px auto 12px;
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 70%;
    min-width: 160px;
    background: rgba(245, 222, 25, 0.4);
    border-radius: 8px;
    border: none;
}
.protected-button svg{
    background-color: rgba(245, 222, 25, 0);
}
.protected-button p{
    background-color: rgba(245, 222, 25, 0);
    padding-bottom: 0;
    color: #101010;
    font-family: 'Comfortaa','Inter',sans-serif;
    font-size: 14px;
    font-weight: 700;
}
.visit-product-button{
    font-family: 'Comfortaa','Inter',sans-serif;
    font-size: 14px;
    font-weight: 400;
    text-decoration: underline;
}
.case-study-button{
    padding: auto 12px auto 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 70%;
    min-width: 160px;
    background: rgba(245, 222, 25, 1);
    border-radius: 8px;
    border: none;
    font-family: 'Comfortaa','Inter',sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #101010;
}
</style>
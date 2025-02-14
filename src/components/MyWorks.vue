<template> 
    <!-- Not using this component. Decided not relavant while updating from designer to PM portfolio -->
    <div class="container-fluid">
        <div class="container" :class="isSizeDesktop ? 'my-works-container-desktop' : 'my-works-container-mobile'">
            <h3 :class="isSizeDesktop ? 'title-desktop' : 'title-mobile'">My Works</h3>

            <project-desktop 
            v-if="isSizeDesktop"
            class="project-entry"
            projectLogo="https://i.imgur.com/7FZjoa0.png"
            projectTitle="JioCinema Ads"
            projectDescription="An end-to-end platform to run ad campaigns on JioCinema steaming app where businesses and agencies can create, manage ad campaigns, review the campaign peformance using reports and dashboard, manage leads, add and manage funds"
            myRole="Product Management & Design"
            duration="1.5 years of continuous iteration & testing"
            tools="Adobe XD, After Effects, Zeplin"
            :isProtected=true
            :destination=null
            :isProductLink=true
            productLink="https://ads.jiocinema.com/"
            productLinkText="Visit Product"            
            ></project-desktop>

            <project-desktop 
            v-if="isSizeDesktop"
            class="project-entry"
            projectLogo="https://i.imgur.com/n82LPwp.png"
            projectTitle="Bizgain - Digital advertising made easy for SMBs"
            projectDescription="Bizgain is an easy-to-use platform for small businesses to grow their businesses using digital marketing. The AI-driven platform helps business owners to launch professional-looking ad campaigns which are efficient and optimized to deliver results."
            myRole="From conceptualization to testing & iterating along with product management"
            duration="1.5 years of continuous iteration & testing"
            tools="Adobe XD, After Effects, Zeplin"
            :isProtected=true
            :destination=null
            :isProductLink=true
            productLink="https://bizgain.com/"
            productLinkText="Visit Product"            
            ></project-desktop>
            
            <project-desktop 
            v-if="isSizeDesktop"
            class="project-entry"
            projectLogo="https://i.imgur.com/qI5s2vn.png"
            projectTitle="Second Opinion - Doctor Appointment Booking and Health Chats"
            projectDescription="Second opinion is a healthcare app where users can book doctor appointments & chat with the experts directly during the booked slot. The platform aims to make it easy for the users to get expert opinion on any health issues"
            myRole="UI Design & Interaction Design"
            duration="7 Days"
            tools="Figma"
            :isProtected=false
            destination= '/case-study-second-opinion'
            :isProductLink=false
            :productLink=null
            :productLinkText=null           
            ></project-desktop>
            
            <project-desktop 
            v-if="isSizeDesktop"
            class="project-entry"
            projectLogo="https://i.imgur.com/apZRfHE.png"
            projectTitle="BrandX - All in one manager for Performance Marketers"
            projectDescription="BrandX enables performance marketers and agencies to track, optimize and manage spends across Search, Social, Display, Mobile and Video ads more efficiently."
            myRole="From conceptualization to product design"
            duration="3 Months"
            tools="Adobe XD, Illustrator"
            :isProtected=true
            :destination=null
            :isProductLink=true
            productLink="https://play.google.com/store/apps/details?id=com.deltax.brandx.app&pli=1"
            productLinkText="Visit Playstore"           
            ></project-desktop>
            
            <project-desktop 
            v-if="isSizeDesktop"
            class="project-entry"
            projectLogo="https://i.imgur.com/P4a388d.png"
            projectTitle="Enhancing & Simplifying Reporting Experience"
            projectDescription="As part of my journey with DeltaX as a product designer, I’ve worked on multiple projects that enhances & simplifies  the user experience of possibly the most flexible & robust reporting tool for performance marketers."
            myRole="Research & Product Design"
            duration="Multiple projects over 3 years"
            tools="Adobe XD, Figma"
            :isProtected=true
            :destination=null
            :isProductLink=false
            :productLink=null
            :productLinkText=null           
            ></project-desktop>
            
            <project-mobile 
            v-if="!isSizeDesktop"
            class="project-entry"
            projectLogo="https://i.imgur.com/n82LPwp.png"
            projectTitle="Bizgain - Digital advertising made easy for SMBs"
            myRole="From conceptualization to testing & iterating along with product management"
            duration="1.5 years of continuous iteration & testing"
            :isProtected=true
            :destination=null
            :isProductLink=true
            productLink="https://bizgain.com/"
            productLinkText="Visit Product"            
            ></project-mobile>
            
            <project-mobile 
            v-if="!isSizeDesktop"
            class="project-entry"
            projectLogo="https://i.imgur.com/qI5s2vn.png"
            projectTitle="Second Opinion - Doctor Appointment Booking and Health Chats"
            myRole="UI Design & Interaction Design"
            duration="7 Days"
            :isProtected=false
            destination= '/case-study-second-opinion'
            :isProductLink=false
            :productLink=null
            :productLinkText=null           
            ></project-mobile>
            
            <project-mobile 
            v-if="!isSizeDesktop"
            class="project-entry"
            projectLogo="https://i.imgur.com/apZRfHE.png"
            projectTitle="BrandX - All in one manager for Performance Marketers"
            myRole="From conceptualization to product design"
            duration="3 Months"
            :isProtected=true
            :destination=null
            :isProductLink=true
            productLink="https://play.google.com/store/apps/details?id=com.deltax.brandx.app&pli=1"
            productLinkText="Visit Playstore"           
            ></project-mobile>
            
            <project-mobile 
            v-if="!isSizeDesktop"
            class="project-entry"
            projectLogo="https://i.imgur.com/P4a388d.png"
            projectTitle="Enhancing & Simplifying Reporting Experience"
            myRole="Research & Product Design"
            duration="Multiple projects over 3 years"
            :isProtected=true
            :destination=null
            :isProductLink=false
            :productLink=null
            :productLinkText=null           
            ></project-mobile>
        </div>
    </div>
</template>

<script>
import ProjectDesktop from './ProjectDesktop.vue';
import ProjectMobile from './ProjectMobile.vue'

export default{
    props:['isSizeDesktop','mobileScreenSize'],
    components:{ProjectDesktop,ProjectMobile}
}
</script>

<style scoped>
.my-works-container-desktop{
    padding-top: 120px;
    padding-bottom: 80px;
}
.my-works-container-mobile{
    padding-top: 72px;
    padding-bottom: 32px;
}
.title-desktop{
    font-family: 'Comfortaa','Inter', sans-serif;
    font-size: 48px;
    margin-bottom: 28px;
    text-align: center;
    font-weight: 700;
}
.title-mobile{
    font-family: 'Comfortaa','Inter', sans-serif;
    font-size: 28px;
    margin-bottom: 28px;
    text-align: center;
    font-weight: 700;
}
.project-entry{
    margin-bottom: 24px;
}
</style>
<template>
    <div class="container-fluid">
        <div class="container set-max-width" :class="isSizeDesktop ? 'my-works-container-desktop' : 'my-works-container-mobile'">
            <h3 :class="isSizeDesktop ? 'title-desktop' : 'title-mobile'">My Works</h3>
            <project-updated
            class="add-bottom-margin"
            projectLogo="https://i.imgur.com/7FZjoa0.png"
            :projectDescription = jioCinemaDesc
            :points = jioCinemaPoints 
            >
            </project-updated>
            <project-updated
            projectLogo="https://i.imgur.com/n82LPwp.png"
            :projectDescription = bizgainDesc
            :points = bizgainPoints 
            class="add-bottom-margin"
            >
            </project-updated>
            <project-updated
            projectLogo="https://i.imgur.com/P4a388d.png"
            :projectDescription = finopsDesc
            :points = finopsPoints 
            class="add-bottom-margin"
            >
            </project-updated>
            <project-updated
            projectLogo="https://i.imgur.com/AwPbfjw.png"
            :projectDescription = oneTruthDesc
            :points = oneTruthPoints 
            class="add-bottom-margin"
            >
            </project-updated>
        </div>
    </div>
</template>

<script>
import  ProjectUpdated  from './ProjectUpdated.vue';

export default{
    data(){
        return{
            jioCinemaDesc: "Led the end-to-end development of JioCinema Ads, a self-serve advertising platform for IPL 2024, delivering it within a tight 3-month deadline. Post-launch, continuously optimized the platform to enhance UX, increase advertiser value, and drive revenue growth—all while balancing priorities and aligning expectations across sales, business, operations, and engineering stakeholders.",
            bizgainDesc: "Designed and led the development of Bizgain, a digital marketing tool that simplifies paid ads for SMBs. Launched the MVP, tested with target users, and iterated with new features and enhancements to drive user growth and adoption.",
            finopsDesc: "Designed a comprehensive fin-tech solution to manage finance for large advertisers and agencies. Built an end-to-end system covering order placement to invoicing, credit notes, and reconciliation While adapting to organization-specific workflows.",
            oneTruthDesc: "Ideated and built multiple features to simplify and enhance the experience and usability of 1Truth, a powerful and flexible reporting ecosystem designed for various stakeholders in the ad ecosystem.",
            jioCinemaPoints: ['Solution pitch to first customer onboarding in 3 months',
            'Onboarded 300+ advertisers & agencies during WPL & IPL 2024',
            'Worked with 30+ stakeholders across Design, Engineering, Business, Sales, Ops & Product',
            'Solved challenges in campaign creation, reporting, fin-tech & ad-ops within DeltaX & JioCinema integrations'],
            bizgainPoints: ['Automated key aspects of paid ads – Campaign launch, reporting, finance & optimization',
            'Reduced first-campaign launch time by 80%',
            'Hands-on involvement in sales, customer success & digital marketing to identify improvements'],
            finopsPoints: ['Automated complex finance operations after deep process understanding',
            'Customized workflows to adapt to organization-specific requirements',
            'Integrated new financial entities seamlessly with existing systems'],
            oneTruthPoints: ['Reduced report creation time by 30%',
            'Built 20+ features across scheduling, dashboards, and more']
        }
    },
    props:['isSizeDesktop','mobileScreenSize'],
    components:{ProjectUpdated}
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
    margin-bottom: 64px;
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
.set-max-width{
    max-width: 760px;
}

.add-bottom-margin{
    margin-bottom: 40px;
}
</style>
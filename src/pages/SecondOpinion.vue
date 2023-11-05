<template>
    <div @click="this.$router.push('/home')" :class="isSizeDesktop ? 'back-button-desktop' : 'back-button-mobile'">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6L9 12L15 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <p class="remove-p-margin">Back to Home</p>
    </div>
    <div class="container-fluid">
        <div class="container" :class="isSizeDesktop ? '' : 'container-mobile'">
            <h3 :class="isSizeDesktop ? 'page-title-desktop' : 'page-title-mobile'">Second Opinion - Doctor Appointment Booking and Health Chats</h3>
            <div class="hero-image-group" v-if="isSizeDesktop">
                <img src="https://i.imgur.com/OygJzW3.png">
                <img src="https://i.imgur.com/QCCiPWC.png">
                <img src="https://i.imgur.com/Jn9bwFt.png">
            </div>
            <div class="row" :class="isSizeDesktop ? 'group-type-1-desktop' : 'group-type-1-mobile'">
                <div class="text-group col-md-6 col-12 order-2 order-md-1"  :class="isSizeDesktop ? '' : 'padding-class-mobile'">
                    <h3 :class="isSizeDesktop ? 'section-title-desktop' : 'section-title-mobile'"> What is Second Opinion? </h3>
                    <p :class="isSizeDesktop ? 'section-content-desktop' : 'section-content-mobile'">It is a online health appointment booking app where users can chat with doctors directly on booked time slot to get clarity on their health issues, general health related doubts & second opinion on taking certain health related decisions </p>
                    <h5 :class="isSizeDesktop ? 'section-subtitle-desktop' : 'section-subtitle-mobile'">But why this app? 🤔</h5>
                    <p :class="isSizeDesktop ? 'section-content-desktop' : 'section-content-mobile'">
                        <ul>
                            <li>Traditional doctor appointment for minor health issues or doubts  can seem very expensive</li>
                            <li>This app provides a comfortable experience for the user attending the appointment from home</li>
                            <li>Chat based appointment makes it less expensive & suitable experience for getting second opinions & suggestions on minor health issues</li>
                        </ul>
                    </p>
                </div>
                <div :class="isSizeDesktop ? 'padding-div1-desktop' : 'padding-div1-mobile'" class="col-md-6 col-12 order-1 order-md-2">
                    <div :class="isSizeDesktop ? 'image-group-desktop' : 'image-group-mobile'">
                        <img src="https://i.imgur.com/OygJzW3.png">
                    </div>
                </div>
            </div>
            <div class="row" :class="isSizeDesktop ? 'group-type-2-desktop' : 'group-type-2-mobile'">
                <div class="text-group col-md-6 col-12 order-2 order-md-2"  :class="isSizeDesktop ? '' : 'padding-class-mobile'">
                    <h3 :class="isSizeDesktop ? 'section-title-desktop' : 'section-title-mobile'"> My role </h3>
                    <p :class="isSizeDesktop ? 'section-content-desktop' : 'section-content-mobile'">I took care of designing the complete app experience including the doctor & admin app which will take care of the supply side of the product.</p>
                    <project-details></project-details>
                </div>
                <div :class="isSizeDesktop ? 'padding-div2-desktop' : 'padding-div2-mobile hide-image-mobile'" class="col-md-6 col-12 order-1 order-md-1" >
                    <div :class="isSizeDesktop ? 'image-group-desktop' : 'image-group-mobile'">
                        <img src="https://i.imgur.com/HYK1UUy.png">
                    </div>
                </div>
            </div>
            <div class="row" :class="isSizeDesktop ? 'group-type-1-desktop' : 'group-type-1-mobile'">
                <div class="text-group col-md-6 col-12 order-2 order-md-1"  :class="isSizeDesktop ? '' : 'padding-class-mobile'">
                    <h3 :class="isSizeDesktop ? 'section-title-desktop' : 'section-title-mobile'">Challenges Faced</h3>
                    <p :class="isSizeDesktop ? 'section-content-desktop' : 'section-content-mobile'">
                        <ul>
                            <li>Extremely tight deadline</li>
                            <li>Making sure logics & interactions remains sensible & functional across user, doctor & admin apps</li>
                            <li>Simplifying complex interactions such as doctor filtering & doctor application review</li>
                        </ul>
                    </p>
                    <p :class="isSizeDesktop ? 'section-content-desktop' : 'section-content-mobile'">Scroll Down to see some interesting problems & solutions achieved as part of this project 👇</p>
                </div>
                <div :class="isSizeDesktop ? 'padding-div1-desktop' : 'padding-div1-mobile  hide-image-mobile'" class="col-md-6 col-12 order-1 order-md-2">
                    <div :class="isSizeDesktop ? 'image-group-desktop' : 'image-group-mobile'">
                        <img src="https://i.imgur.com/QCCiPWC.png">
                    </div>
                </div>
            </div>
            <div class="row" :class="isSizeDesktop ? 'group-type-2-desktop' : 'group-type-2-mobile'">
                <div class="text-group col-md-6 col-12 order-1 order-md-2">
                    <h3 :class="isSizeDesktop ? 'section-title-desktop' : 'section-title-mobile'">Make finding easy</h3>
                    <p :class="isSizeDesktop ? 'section-content-desktop' : 'section-content-mobile'">There are multiple ways a user can find a doctor. Looking for a specialist from specific field (most common), Looking for someone who works in a specific hospital & directly searching for a doctor. And there are multiple filters on top of this. So as a designer I had to make sure the experience of finding a doctor is as seamless & simple as possible for any user</p>
                    <p :class="isSizeDesktop ? 'section-content-desktop' : 'section-content-mobile'">
                        <ul>
                            <li>Tried out multiple products that has many entities to search for to understand how they handle it (E.g. Facebook, LinkedIn, Practo)</li>
                            <li>Finalized that apart from doctor profile any entity such as hospital & specialization will end up as a filter for doctors profile</li>
                            <li>Made sure the filtering process is familiar & as simple as possible</li>
                        </ul>
                    </p>
                </div>
                <div :class="isSizeDesktop ? 'padding-div2-desktop' : 'padding-div2-mobile padding-class-mobile'" class="col-md-6 col-12 order-2 order-md-1" >
                    <div :class="isSizeDesktop ? 'image-group-desktop' : 'image-group-mobile'">
                        <img src="https://i.imgur.com/SC1lRUM.png">
                    </div>
                </div>
            </div>
            <div class="row" :class="isSizeDesktop ? 'group-type-1-desktop' : 'group-type-1-mobile'">
                <div class="text-group col-md-6 col-12 order-1 order-md-1">
                    <h3 :class="isSizeDesktop ? 'section-title-desktop' : 'section-title-mobile'">Make it clear</h3>
                    <p :class="isSizeDesktop ? 'section-content-desktop' : 'section-content-mobile'">For users there are many constrains around what they can & cannot do based on status of the appointment and the rules differ for the doctor. So making it clear for both of them to make sure there are no miscommunication is really important</p>
                    <p :class="isSizeDesktop ? 'section-content-desktop' : 'section-content-mobile'">
                        <ul>
                            <li>Defining the boundaries & logics based on product & business goals</li>
                            <li>Making sure it's communicated wherever it is applicable</li>
                        </ul>
                    </p>
                </div>
                <div :class="isSizeDesktop ? 'padding-div1-desktop' : 'padding-div1-mobile padding-class-mobile'" class="col-md-6 col-12 order-2 order-md-2">
                    <div :class="isSizeDesktop ? 'image-group-desktop' : 'image-group-mobile'">
                        <img src="https://i.imgur.com/lE3jWTJ.png">
                    </div>
                </div>
            </div>
            <div class="row" :class="isSizeDesktop ? 'group-type-2-desktop' : 'group-type-2-mobile'">
                <div class="text-group col-md-6 col-12 order-1 order-md-2">
                    <h3 :class="isSizeDesktop ? 'section-title-desktop' : 'section-title-mobile'">Make it rewarding</h3>
                    <p :class="isSizeDesktop ? 'section-content-desktop' : 'section-content-mobile'">The app had a gamification element where the user can earn reward points by actions such as booking, referring, etc., & use those points to get discounts on future bookings</p>
                    <p :class="isSizeDesktop ? 'section-content-desktop' : 'section-content-mobile'">
                        <ul>
                            <li>Had multiple discussions & design iterations on how to use the reward points</li>
                            <li>Finalized & made sure enough information is provided about reward points in relevant pages</li>
                            <li>Created a separate reward section to show the user various reward related information that the user might need</li>
                        </ul>
                    </p>
                </div>
                <div :class="isSizeDesktop ? 'padding-div2-desktop' : 'padding-div2-mobile padding-class-mobile'" class="col-md-6 col-12 order-2 order-md-1" >
                    <div :class="isSizeDesktop ? 'image-group-desktop' : 'image-group-mobile'">
                        <img src="https://i.imgur.com/aDJbMxX.png">
                    </div>
                </div>
            </div>
            <div class="row" :class="isSizeDesktop ? 'group-type-1-desktop' : 'group-type-1-mobile'">
                <div class="text-group col-md-6 col-12 order-2 order-md-1" :class="isSizeDesktop ? '' : 'padding-class-mobile'">
                    <h3 :class="isSizeDesktop ? 'section-title-desktop' : 'section-title-mobile'">A few more</h3>
                    <p :class="isSizeDesktop ? 'section-content-desktop' : 'section-content-mobile'">
                        <ul>
                            <li>Interaction to create appointment slots for doctors</li>
                            <li>Simplifying doctor application review process</li>
                            <li>Reporting earnings & other relevant metrics in a consumable way to both doctors & admin</li>
                            <li>Creating special admin actions such as blocking, verifying users & processing payments</li>
                        </ul>
                    </p>
                    <p :class="isSizeDesktop ? 'section-content-desktop' : 'section-content-mobile'">You've already read a lot. Lets discuss these over a call so you get to know my thought process better</p>
                </div>
                <div :class="isSizeDesktop ? 'padding-div1-desktop' : 'padding-div1-mobile hide-image-mobile'" class="col-md-6 col-12 order-1 order-md-2">
                    <div :class="isSizeDesktop ? 'image-group-desktop' : 'image-group-mobile'">
                        <img src="https://i.imgur.com/ZivuD3I.png">
                    </div>
                </div>
            </div>
            <div :class="isSizeDesktop ? 'button-group-desktop' : 'button-group-mobile'">
                <a href="#contact">                    
                        Contact Me                    
                </a>
                <button class="back-to-home-button" @click="this.$router.push('/home')">
                    Back to Home
                </button>
            </div>
        </div>
        <contact-section :isSizeDesktop="isSizeDesktop" :mobileScreenSize="mobileScreenSize" id="contact"></contact-section>
    </div>
</template>

<script>
import ProjectDetails from '../components/ProjectDetails.vue'
import ContactSection from '../components/ContactSection.vue'

export default{
    props:['isSizeDesktop','mobileScreenSize'],
    components:{ProjectDetails, ContactSection}
}
</script>

<style scoped>
.remove-p-margin{
    margin-bottom: 0;
}
.back-button-desktop{
    display: flex;
    gap: 16px;
    margin-top: 32px;
    margin-left: 40px;
    margin-bottom: 64px;
    cursor: pointer;
    align-items: center;
}
.back-button-mobile{
    display: flex;
    gap: 8px;
    margin-top: 24px;
    margin-left: 12px;
    margin-bottom: 32px;
    cursor: pointer;
    align-items: center;
}
.page-title-desktop{
    font-family: 'Inter',sans-serif;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 40px;
}
.page-title-mobile{
    font-family: 'Inter',sans-serif;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 40px;
}
.hero-image-group{
    display: flex;
    gap: 64px;
    align-items: center;
    justify-content: center;
    padding-top: 48px;
    padding-bottom: 48px;
    padding-left: auto;
    padding-right: auto;
    background-color: #101010;
    margin-bottom: 40px;
}
.hero-image-group img{
    max-height: 440px;
    object-fit: contain;
}
.container-mobile{
    padding: 0;
}
.group-type-1-desktop{
    align-items: center;
    margin-top: 72px;
    margin-bottom: 72px;
}
.padding-div1-desktop{
    padding-left: 24px;
}
.padding-div2-desktop{
    padding-right: 24px;
}
.group-type-2-desktop{
    align-items: center;
    margin-top: 72px;
    margin-bottom: 72px;
}
.padding-class-mobile{
    margin-bottom: 40px;
}
.hide-image-mobile{
    display: none;
}
.section-title-desktop{
    font-family: 'Inter',sans-serif;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 24px;
}

.section-title-mobile{
    font-family: 'Inter',sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
}
.section-content-desktop{
    font-family: 'Inter',sans-serif;
    font-size: 16px;
    margin-bottom: 40px;
}
.section-content-mobile{
    font-family: 'Inter',sans-serif;
    font-size: 16px;
    margin-bottom: 28px;
}
li{
    margin-bottom: 12px;
}
.section-subtitle-desktop{
    font-family: 'Inter',sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
}
.section-subtitle-desktop{
    font-family: 'Inter',sans-serif;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
}
.image-group-desktop{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #101010;
    padding-top: 32px;
    padding-bottom: 32px;
}
.image-group-mobile{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #101010;
    padding-top: 32px;
    padding-bottom: 32px;
    margin-bottom: 24px;
}
.image-group-desktop img{
    max-height: 440px;
    object-fit: contain;
}
.image-group-mobile img{
    max-height: 440px;
    object-fit: contain;
}
.button-group-desktop{
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
}
.button-group-mobile{
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 64px;
}
a{
    padding: auto 12px auto 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 100%;
    background: rgba(245, 222, 25, 1);
    border-radius: 8px;
    border: none;
    font-family: 'Comfortaa','Inter',sans-serif;
    font-size: 14px;
    font-weight: 900;
    color: #101010;
    max-width: 320px;
    text-decoration: none;
}
.back-to-home-button{
    padding: auto 12px auto 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    background: black;
    border: 1px solid white;
    /* border-color: white; */
    border-radius: 8px;
    font-family: 'Comfortaa','Inter',sans-serif;
    font-size: 14px;
    font-weight: 900;
    color: white;
    width: 100%;
    max-width: 320px;
}
</style>
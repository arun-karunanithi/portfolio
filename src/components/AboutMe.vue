<template>
    <div class="container-fluid about-me-container-fluid">
        <div class="container" :class="isSizeDesktop ? 'about-me-container-desktop' : 'about-me-container-mobile'">
            <h3 :class="isSizeDesktop ? 'title-desktop' : 'title-mobile'">About Me</h3>
            <p  :class="isSizeDesktop ? 'description-desktop' : 'description-mobile'">I'm a Product Manager who approaches problems with a practical lens 🔍, balancing business goals 🎯 with necessary trade-offs ↔️ to drive impact. My experience spans designing and building products end-to-end, ensuring they are both user-friendly and business-driven. Responsibilities I've held 👇</p>
            <div class="row justify-content-center align-items-center" :class="isSizeDesktop ? 'about-content-desktop' : 'about-content-mobile'">
                <div class="col-md-4 col-xs-12 about-me-pointer">
                    <img src="https://i.imgur.com/dZ7zQ9C.png">
                    <p>Simplifying Complex <br>B2B Solutions</p>
                </div>
                <div class="col-md-4 col-xs-12 about-me-pointer">
                    <img src="https://i.imgur.com/cgl1py3.png">
                    <p>Owning the complete <br>product lifecycle</p>
                </div>
                <div class="col-md-4 col-xs-12 about-me-pointer">
                    <img src="https://i.imgur.com/Nh15kqM.png">
                    <p>Stakeholder <br>Management</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:['isSizeDesktop','mobileScreenSize']
}
</script>

<style scoped>
*{
    background-color: #101010;
}
.about-me-container-desktop{
    padding-top: 120px;
    padding-bottom: 80px;
}
.about-me-container-mobile{
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
.description-desktop{
    /* font-family: 'Comfortaa','Inter', sans-serif; */
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 28px;
    margin-bottom: 80px;
}
.description-mobile{
    /* font-family: 'Comfortaa','Inter', sans-serif; */
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    line-height: 24px;
    margin-bottom: 64px;
}
.about-me-pointer{
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    margin-bottom: 40px;
}
.about-me-pointer img{
    height: 48px;
    object-fit: contain;
}
.about-me-pointer p{
    /* font-family: 'Comfortaa','Inter', sans-serif; */
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    text-align: center;
    line-height: 24px;
    font-weight: 600;
}
</style>
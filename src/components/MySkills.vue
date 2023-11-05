<template>
    <div class="container-fluid">
        <div :class="isSizeDesktop ? 'container-for-css-desktop' : 'container-for-css-mobile'">
            <div class="container image-container">
                <img src="https://i.imgur.com/IAi8PoU.png" class="among-us-image" v-if="isSizeDesktop">
                <img src="https://i.imgur.com/tCS5wVk.png" class="among-us-image" v-else>
            </div>
        </div>
        <div class="container">
            <div class="techmologies-container row">
                <h3 :class="isSizeDesktop ? 'title-desktop' : 'title-mobile'">Other Technologies</h3>
                <div class="col-md-3 col-4" :class="isSizeDesktop ? 'parent-card-desktop' : 'parent-card-mobile'">
                    <div :class="isSizeDesktop ? 'tool-card-desktop' : 'tool-card-mobile'">
                        <img src="https://i.imgur.com/iQIogne.png">
                        <p>HTML</p>
                    </div>
                </div>
                <div class="col-md-3 col-4" :class="isSizeDesktop ? 'parent-card-desktop' : 'parent-card-mobile'">
                    <div :class="isSizeDesktop ? 'tool-card-desktop' : 'tool-card-mobile'">
                        <img src="https://i.imgur.com/XQx3QW7.png">
                        <p>CSS</p>
                    </div>
                </div>
                <div class="col-md-3 col-4" :class="isSizeDesktop ? 'parent-card-desktop' : 'parent-card-mobile'">
                    <div :class="isSizeDesktop ? 'tool-card-desktop' : 'tool-card-mobile'">
                        <img src="https://i.imgur.com/CrFTmKG.png">
                        <p>Javascript</p>
                    </div>
                </div>
                <div class="col-md-3 col-4" :class="isSizeDesktop ? 'parent-card-desktop' : 'parent-card-mobile'">
                    <div :class="isSizeDesktop ? 'tool-card-desktop' : 'tool-card-mobile'">
                        <img src="https://i.imgur.com/tDOV3M6.png">
                        <p>VueJS</p>
                    </div>
                </div>
                <div class="col-md-3 col-4" :class="isSizeDesktop ? 'parent-card-desktop' : 'parent-card-mobile'">
                    <div :class="isSizeDesktop ? 'tool-card-desktop' : 'tool-card-mobile'">
                        <img src="https://i.imgur.com/ri9bVcd.png">
                        <p>PowerBi</p>
                    </div>
                </div>
                <div class="col-md-3 col-4" :class="isSizeDesktop ? 'parent-card-desktop' : 'parent-card-mobile'">
                    <div :class="isSizeDesktop ? 'tool-card-desktop' : 'tool-card-mobile'">
                        <img src="https://i.imgur.com/3HQOwAn.png">
                        <p>After Effects</p>
                    </div>
                </div>
                <div class="col-md-3 col-4" :class="isSizeDesktop ? 'parent-card-desktop' : 'parent-card-mobile'">
                    <div :class="isSizeDesktop ? 'tool-card-desktop' : 'tool-card-mobile'">
                        <img src="https://i.imgur.com/rC85xoU.png">
                        <p>Photoshop</p>
                    </div>
                </div>
                <div class="col-md-3 col-4" :class="isSizeDesktop ? 'parent-card-desktop' : 'parent-card-mobile'">
                    <div :class="isSizeDesktop ? 'tool-card-desktop' : 'tool-card-mobile'">
                        <img src="https://i.imgur.com/7i6xsNN.png">
                        <p>Illustrator</p>
                    </div>
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
.container-for-css-desktop{
    padding-top: 120px;
    background-color: #101010;
    display: flex;
    justify-content: center;
}
.container-for-css-mobile{
    padding-top: 80px;
    background-color: #101010;
    display: flex;
    justify-content: center;
}
.image-container{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    background-color: #101010;
}
.among-us-image{
    height: 100%;
    width: 100%;
    object-fit: contain;
    background-color: #101010;
    max-width: 1000px;
}
.techmologies-container{
    display: flex;
    justify-content: center;
    background-color: black;
    padding-top: 64px;
    padding-bottom: 96px;
}
.title-desktop{
    font-family: 'Comfortaa','Inter', sans-serif;
    font-size: 48px;
    margin-bottom: 32px;
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
.tool-card-desktop{
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    padding-top: 32px;
    padding-bottom: 32px;
    background-color: #101010;
    border-radius: 16px;
}
.tool-card-desktop img{
    max-width: 96px;
    max-height: 96px;
    object-fit: contain;
    background-color: #101010;
}
.tool-card-desktop p{
    font-family: 'Inter',sans-serif;
    margin-bottom: 0;
    background-color: #101010;
}
.parent-card-desktop{
    margin-bottom: 16px;
}
.parent-card-mobile{
    padding-left: 4px;
    padding-right: 4px;
    margin-bottom: 16px;
}
.tool-card-mobile{
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: #101010;
    border-radius: 12px;
}
.tool-card-mobile img{
    max-width: 64px;
    max-height: 64px;
    object-fit: contain;
    background-color: #101010;
}
.tool-card-mobile p{
    font-family: 'Inter',sans-serif;
    font-size: 15px;
    margin-bottom: 0;
    background-color: #101010;
    text-align: center;
}
</style>
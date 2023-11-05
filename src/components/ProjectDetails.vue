<template>
    <div class="point-group">
        <p class="title">Project Type:</p>
        <p class="detail">Freelance</p>
    </div>
    <div class="point-group">
        <p class="title">Duration:</p>
        <p class="detail">7 Days</p>
    </div>
    <div class="point-group">
        <p class="title">Tools:</p>
        <p class="detail">Figma</p>
    </div>
</template>

<style scoped>
.point-group{
    display: flex;
    gap: 12px;
}
.title{
    font-family: 'Inter',sans-serif;
    font-size: 16px;
    font-weight: 600;
    width: 144px;
}
.details{
    font-family: 'Inter',sans-serif;
    font-size: 16px;
    flex-grow: 1;
}
</style>
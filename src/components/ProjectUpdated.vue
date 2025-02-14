<template>
    <div class="overall-card">
        <div class="logo-container">
            <img :src=projectLogo class="logo">
        </div>
        <div class="description">
            <p> {{ projectDescription }} </p>
        </div>
        <ul>
            <li class="point" v-for="(point, index) in points" :key="index">
                {{ point }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        props:['projectLogo', 'projectDescription','points']
    }
</script>

<style scoped>
:deep(*){
    background-color: #000000;
}
.overall-card{
    background-color: #000000;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 24px 0px 8px 0px;
}

.logo-container{
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}

.logo{
    height: 40px;
}

.description
{
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 0;
}

.description p{
    color: #D0D0D0;
}

ul{
    padding: 8px 24px;
}

.point{
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 12px;
    color: #D0D0D0;
}
</style>
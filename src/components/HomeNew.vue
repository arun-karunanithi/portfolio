<template>
    <div class="container">
        <div class="home-content-desktop">
            <h3>Arun Karunanithi</h3>
            <p>Associate Product Manager @ DeltaX</p>
            <div class="bgimage">
                <div class="loader" v-if="showLoader">
                    <p>loading...</p>
                </div>
                <div class="input-content" v-else>
                    <h3>How can I contribute to your org as a PM?</h3>
                    <p>Provide your company website URL & findout</p>
                    <form @submit.prevent class="form">
                        <input  type="text" id="name" name="name" placeholder="Website URL" required v-model="websiteUrl">
                        <button type="submit" :class="isSizeDesktop ? 'button-desktop' : 'button-mobile'" @click="checkMatch">Submit</button>
                    </form>
                    <p>Match Score: {{ matchScore }}</p>
                    <p>Reason: {{ matchDesc }}</p>
                </div>
            </div>
        </div>
    </div>
  </template>

  <script>
  export default{
    data(){
        return{
            websiteUrl:null, showLoader:false, matchScore:null, matchDesc:null
        }
    },
    props:['isSizeDesktop','mobileScreenSize'],
    methods:{
        async checkMatch() {
            console.log("Starting Request", this.websiteUrl);
            const data = { question: this.websiteUrl };
            this.websiteUrl=null;
            this.matchScore=null;
            this.matchDesc=null;
            this.showLoader=true;
            const response = await this.query(data);
            console.log("Response from API:", response);
        },
        async query(data) {
            try {
                const response = await fetch(
                "https://jobmatchchatbot.onrender.com/api/v1/prediction/1130a8a9-49ea-4889-a940-651e65fa9b17",
                {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
                );
                const result = await response.json();
                console.log(result);

                const parsedText = JSON.parse(result.text);

                this.matchScore = parsedText.score;
                this.matchDesc = parsedText.reason;
                this.showLoader=false;
                return;
            } catch (error) {
                console.error("API Error:", error);
            }
        }
    }
  }
  </script>
  
  <style scoped>
    *{
        background-color: transparent;
    }
    .remove-p-margin{
        margin-bottom: 0;
    }
    .home-content-desktop{
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 64px;

    }
    .home-text-desktop h3{
        font-family: 'Comfortaa','Inter', sans-serif;
        font-size: 48px;
        margin-bottom: 40px;
        font-weight: 700;
    }
    .bgimage{
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url(https://i.imgur.com/6WdcXoy.png);
      max-width: 880px;
      width: 100%;
      margin: 24px 16px 16px 24px;
      padding: 12px;
      height: auto;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      min-height: 400px;
      border: 0.5px solid #fff;
      border-radius: 12px;
    }
    .form{
        margin-bottom: 24px;
    }
  </style>
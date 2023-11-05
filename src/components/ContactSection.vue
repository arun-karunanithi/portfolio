<template>
    <div class="container-fluid">
        <div class="container">
            <h3 :class="isSizeDesktop ? 'title-desktop' : 'title-mobile'">Contact</h3>
            <p :class="isSizeDesktop ? 'description-desktop' : 'description-mobile'">Have a cool idea or a project to work on or just want to chat about something interesting? <br v-if="isSizeDesktop">Feel free to get in touch</p>
            <form @submit.prevent="submitForm" :class="isSizeDesktop ? 'form-desktop' : 'form-mobile'">
                <input type="text" id="name" name="name" placeholder="Name" required v-model="formData.name" :class="isSizeDesktop ? 'field-desktop' : 'field-mobile'">
                <input type="email" id="email" name="email" placeholder="Email" required v-model="formData.email" :class="isSizeDesktop ? 'field-desktop' : 'field-mobile'">
                <input type="text" id="mobile" name="mobile" placeholder="Mobile Number" v-model="formData.mobile" :class="isSizeDesktop ? 'field-desktop' : 'field-mobile'">
                <textarea id="message" name="message" rows="4" placeholder="Your Message" v-model="formData.message" :class="isSizeDesktop ? 'textarea-desktop' : 'textarea-mobile'"></textarea>

                <button type="submit" :class="isSizeDesktop ? 'button-desktop' : 'button-mobile'" @click="submitLead">Submit</button>
            </form>
            <div :class="isSizeDesktop ? 'contact-info-group-desktop' : 'contact-info-group-mobile'">
                <div :class="isSizeDesktop ? 'contact-icon-text-group-desktop' : 'contact-icon-text-group-mobile'">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_326_238)"><path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" fill="white"/></g><defs><clipPath id="clip0_326_238"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                    <p :class="isSizeDesktop ? 'contact-info-desktop' : 'contact-info-mobile'"><a class="contact-info-link" href="tel:+919047305560">+91 90473 05560</a></p>
                    <svg class="copy-button" @click="copyToClipboard('mobileNumber')" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div :class="isSizeDesktop ? 'contact-icon-text-group-desktop' : 'contact-icon-text-group-mobile'">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_326_243)"><path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white"/></g><defs><clipPath id="clip0_326_243"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                    <p :class="isSizeDesktop ? 'contact-info-desktop' : 'contact-info-mobile'"><a class="contact-info-link" href="mailto:arunsok2@gmail.com">arunsok2@gmail.com</a></p>
                    <svg class="copy-button" @click="copyToClipboard('emailAddress')" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
            </div>
            <div :class="isSizeDesktop ? 'social-media-icons-desktop' : 'social-media-icons-mobile'">
                <svg @click="openExternalLink('https://www.linkedin.com/in/arun-karunanithi')" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_326_216)"><path d="M20.4844 0H3.51562C2.58356 0.00110408 1.68999 0.371854 1.03092 1.03092C0.371854 1.68999 0.00110408 2.58356 0 3.51562L0 20.4844C0.00110408 21.4164 0.371854 22.31 1.03092 22.9691C1.68999 23.6281 2.58356 23.9989 3.51562 24H20.4844C21.4164 23.9989 22.31 23.6281 22.9691 22.9691C23.6281 22.31 23.9989 21.4164 24 20.4844V3.51562C23.9989 2.58356 23.6281 1.68999 22.9691 1.03092C22.31 0.371854 21.4164 0.00110408 20.4844 0ZM8.48438 19.0312H5.67188V9.1875H8.48438V19.0312ZM8.48438 7.78125H5.67188V4.96875H8.48438V7.78125ZM18.3281 19.0312H15.5156V13.4062C15.5156 13.0333 15.3675 12.6756 15.1037 12.4119C14.84 12.1482 14.4823 12 14.1094 12C13.7364 12 13.3787 12.1482 13.115 12.4119C12.8513 12.6756 12.7031 13.0333 12.7031 13.4062V19.0312H9.89062V9.1875H12.7031V9.71761C13.44 9.48853 13.9186 9.1875 14.8125 9.1875C16.7199 9.18952 18.3281 10.9006 18.3281 12.9229V19.0312Z" fill="white"/></g><defs><clipPath id="clip0_326_216"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                <svg @click="openExternalLink('https://medium.com/@arunkarunanithi')" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_326_218)"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 24H0V0H24V24ZM19.97 18.351V18.082L18.7231 16.858C18.6691 16.8167 18.6272 16.7615 18.6022 16.6982C18.5772 16.635 18.5699 16.5661 18.5812 16.499V7.50098C18.5699 7.43389 18.5772 7.365 18.6022 7.30173C18.6272 7.23847 18.6691 7.18323 18.7231 7.14197L20.0002 5.91797V5.64895H15.578L12.426 13.512L8.84006 5.649H4.20202V5.91802L5.69602 7.71703C5.76805 7.78244 5.82376 7.86382 5.85866 7.95464C5.89357 8.04546 5.90671 8.1432 5.89702 8.24002V15.312C5.91854 15.4378 5.9102 15.5668 5.87268 15.6887C5.83516 15.8107 5.76951 15.9221 5.68102 16.014L3.99998 18.052V18.321H8.766V18.052L7.08502 16.014C6.99581 15.9221 6.92858 15.8112 6.8884 15.6896C6.84822 15.5681 6.83613 15.4389 6.85303 15.312V9.19598L11.036 18.321H11.5219L15.1149 9.19598V16.469C15.1149 16.663 15.1149 16.701 14.9879 16.828L13.6959 18.082V18.351H19.97V18.351Z" fill="white"/></g><defs><clipPath id="clip0_326_218"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                <svg @click="openExternalLink('https://www.behance.net/arunk2')" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_326_220)"><path d="M8.48438 8.48438H5.67188V11.2969H8.48438C8.85734 11.2969 9.21502 11.1487 9.47874 10.885C9.74247 10.6213 9.89062 10.2636 9.89062 9.89062C9.89062 9.51766 9.74247 9.15998 9.47874 8.89626C9.21502 8.63253 8.85734 8.48438 8.48438 8.48438Z" fill="white"/><path d="M8.48438 12.7031H5.67188V15.5156H8.48438C8.85734 15.5156 9.21502 15.3675 9.47874 15.1037C9.74247 14.84 9.89062 14.4823 9.89062 14.1094C9.89062 13.7364 9.74247 13.3787 9.47874 13.115C9.21502 12.8513 8.85734 12.7031 8.48438 12.7031Z" fill="white"/><path d="M16.2187 11.2969C15.7826 11.2975 15.3573 11.4329 15.0012 11.6847C14.6451 11.9364 14.3755 12.2922 14.2295 12.7031H18.208C18.062 12.2922 17.7924 11.9364 17.4363 11.6847C17.0802 11.4329 16.6549 11.2974 16.2187 11.2969Z" fill="white"/><path d="M20.4375 0H3.51562C2.58356 0.00110408 1.68999 0.371854 1.03092 1.03092C0.371854 1.68999 0.00110408 2.58356 0 3.51562L0 20.4844C0.00110408 21.4164 0.371854 22.31 1.03092 22.9691C1.68999 23.6281 2.58356 23.9989 3.51562 24H20.4375C22.3759 24 24 22.4228 24 20.4844V3.51562C24 1.57725 22.3759 0 20.4375 0ZM13.4062 7.07812H19.0312V8.48438H13.4062V7.07812ZM11.2969 14.1094C11.2961 14.8551 10.9996 15.57 10.4723 16.0973C9.94499 16.6246 9.23006 16.9211 8.48438 16.9219H4.26562V7.07812H8.48438C9.05694 7.07572 9.61648 7.24885 10.0876 7.57419C10.5588 7.89954 10.9189 8.36147 11.1195 8.89776C11.32 9.43405 11.3514 10.0189 11.2094 10.5736C11.0674 11.1283 10.7588 11.6261 10.3252 12C10.6289 12.2614 10.8729 12.585 11.0405 12.949C11.2082 13.3129 11.2956 13.7087 11.2969 14.1094ZM19.7344 14.1094H14.2295C14.364 14.4896 14.6047 14.8233 14.9231 15.071C15.2414 15.3186 15.624 15.4699 16.0257 15.5068C16.4273 15.5437 16.8311 15.4647 17.1893 15.2792C17.5474 15.0938 17.8449 14.8095 18.0465 14.4602L19.2632 15.1648C18.8367 15.9035 18.1562 16.4619 17.3484 16.7361C16.5407 17.0103 15.6608 16.9814 14.8728 16.655C14.0847 16.3286 13.4422 15.7268 13.0649 14.9617C12.6876 14.1967 12.6013 13.3206 12.8221 12.4967C13.0428 11.6727 13.5556 10.9571 14.2648 10.4832C14.974 10.0093 15.8313 9.80932 16.677 9.92061C17.5227 10.0319 18.2992 10.4468 18.8616 11.0881C19.4241 11.7294 19.7343 12.5533 19.7344 13.4062V14.1094Z" fill="white"/></g><defs><clipPath id="clip0_326_220"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                <svg @click="openExternalLink('https://dribbble.com/arunkarunanithi_97')" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_326_225)"><path d="M18.395 5.39025C19.1293 4.57195 19.5575 3.71522 19.7075 2.83556C17.6313 1.09716 14.9605 0 12.0469 0C10.5878 0.00242497 9.14155 0.273803 7.78076 0.800531C10.0031 3.02709 11.8617 5.66344 13.3153 8.50927C15.4575 7.73475 17.2425 6.67509 18.395 5.39025H18.395Z" fill="white"/><path d="M19.4413 6.32947C18.1513 7.76722 16.2338 8.93652 13.9429 9.78631C14.2276 10.4107 14.4892 11.0481 14.7355 11.6937C15.9312 11.4331 17.1512 11.3 18.3749 11.2968C20.2854 11.2952 22.1826 11.6138 23.9878 12.2394C23.9894 12.159 23.9999 12.0808 23.9999 11.9999C23.9999 8.9045 22.8072 6.08924 20.8699 3.96411C20.584 4.78771 20.1097 5.58477 19.4413 6.32947Z" fill="white"/><path d="M0.273926 9.47414C1.83964 9.74806 3.42593 9.88742 5.01543 9.89072C7.36353 9.89429 9.70091 9.57408 11.9616 8.93916C10.5067 6.14419 8.63652 3.57174 6.40428 1.42041C3.36636 3.05429 1.02243 6.01069 0.273926 9.47414Z" fill="white"/><path d="M23.8668 13.6875C22.1102 13.0325 20.2499 12.6991 18.3751 12.7032C17.3116 12.7044 16.2508 12.8117 15.2085 13.0234C16.2673 16.2253 16.8547 19.5642 16.9522 22.9353C20.6092 21.2809 23.2824 17.7962 23.8668 13.6875Z" fill="white"/><path d="M0 12C0 15.698 1.78252 19.0552 4.42842 21.2494C4.70873 19.3844 5.54958 17.5497 6.91903 16.0142C8.54794 14.1879 10.8084 12.8202 13.3682 12.0397C13.13 11.4252 12.8698 10.8228 12.5951 10.2288C10.3078 10.9072 7.73142 11.2969 5.01562 11.2969C3.35364 11.2931 1.69499 11.1479 0.0576563 10.8627C0.022125 11.2375 0 11.6162 0 12Z" fill="white"/><path d="M7.9687 16.9499C6.58532 18.5012 5.83589 20.3205 5.73975 22.1818C7.18555 23.0896 8.81007 23.6749 10.5026 23.898C12.1951 24.1211 13.9158 23.9767 15.5474 23.4745C15.4938 19.9737 14.9062 16.5313 13.8375 13.3628C11.4984 14.0643 9.44057 15.2997 7.9687 16.95V16.9499Z" fill="white"/></g><defs><clipPath id="clip0_326_225"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                <svg @click="openExternalLink('https://www.instagram.com/blood_bones_and_flesh/')" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_326_232)"><path d="M20.4844 0H3.51562C2.58356 0.00110408 1.68999 0.371854 1.03092 1.03092C0.371854 1.68999 0.00110408 2.58356 0 3.51562L0 20.4844C0.00110408 21.4164 0.371854 22.31 1.03092 22.9691C1.68999 23.6281 2.58356 23.9989 3.51562 24H20.4844C21.4164 23.9989 22.31 23.6281 22.9691 22.9691C23.6281 22.31 23.9989 21.4164 24 20.4844V3.51562C23.9989 2.58356 23.6281 1.68999 22.9691 1.03092C22.31 0.371854 21.4164 0.00110408 20.4844 0ZM12.0469 18.2812C8.55745 18.2812 5.71875 15.4425 5.71875 11.9531C5.71875 8.4637 8.55745 5.625 12.0469 5.625C15.5363 5.625 18.375 8.4637 18.375 11.9531C18.375 15.4425 15.5363 18.2812 12.0469 18.2812ZM19.0781 7.03125C18.6609 7.03125 18.2531 6.90754 17.9062 6.67576C17.5593 6.44398 17.289 6.11454 17.1293 5.7291C16.9697 5.34366 16.9279 4.91953 17.0093 4.51036C17.0907 4.10118 17.2916 3.72532 17.5866 3.43032C17.8816 3.13532 18.2574 2.93442 18.6666 2.85303C19.0758 2.77164 19.4999 2.81341 19.8853 2.97307C20.2708 3.13272 20.6002 3.40308 20.832 3.74997C21.0638 4.09685 21.1875 4.50468 21.1875 4.92188C21.1869 5.48112 20.9644 6.01727 20.569 6.41272C20.1735 6.80816 19.6374 7.0306 19.0781 7.03125Z" fill="white"/><path d="M19.0781 4.21875C18.9391 4.21875 18.8031 4.25999 18.6875 4.33725C18.5719 4.41451 18.4817 4.52432 18.4285 4.6528C18.3753 4.78128 18.3614 4.92265 18.3885 5.05905C18.4156 5.19544 18.4826 5.32073 18.5809 5.41906C18.6793 5.51739 18.8046 5.58436 18.941 5.61149C19.0773 5.63862 19.2187 5.6247 19.3472 5.57148C19.4757 5.51826 19.5855 5.42814 19.6628 5.31251C19.74 5.19688 19.7813 5.06094 19.7813 4.92188C19.7811 4.73543 19.707 4.55665 19.5752 4.42481C19.4433 4.29298 19.2646 4.21886 19.0781 4.21875Z" fill="white"/><path d="M12.0469 7.03125C11.0734 7.03125 10.1218 7.31991 9.31243 7.86074C8.50303 8.40156 7.87218 9.17025 7.49966 10.0696C7.12713 10.969 7.02966 11.9586 7.21957 12.9133C7.40949 13.8681 7.87825 14.7451 8.56659 15.4334C9.25492 16.1218 10.1319 16.5905 11.0867 16.7804C12.0414 16.9703 13.031 16.8729 13.9304 16.5003C14.8298 16.1278 15.5984 15.497 16.1393 14.6876C16.6801 13.8782 16.9688 12.9266 16.9688 11.9531C16.9672 10.6482 16.4481 9.39726 15.5254 8.47457C14.6027 7.55188 13.3518 7.03283 12.0469 7.03125Z" fill="white"/></g><defs><clipPath id="clip0_326_232"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                <svg @click="openExternalLink('https://www.facebook.com/arun.karunanithi1997')" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_326_214)"><path d="M20.4844 0H3.51562C2.58356 0.00110408 1.68999 0.371854 1.03092 1.03092C0.371854 1.68999 0.00110408 2.58356 0 3.51562L0 20.4844C0.00110408 21.4164 0.371854 22.31 1.03092 22.9691C1.68999 23.6281 2.58356 23.9989 3.51562 24H10.5938V15.5156H7.78125V11.2969H10.5938V8.4375C10.595 7.319 11.0399 6.24666 11.8308 5.45576C12.6217 4.66486 13.694 4.21999 14.8125 4.21875H19.0781V8.4375H14.8125V11.2969H19.0781L18.375 15.5156H14.8125V24H20.4844C21.4164 23.9989 22.31 23.6281 22.9691 22.9691C23.6281 22.31 23.9989 21.4164 24 20.4844V3.51562C23.9989 2.58356 23.6281 1.68999 22.9691 1.03092C22.31 0.371854 21.4164 0.00110408 20.4844 0Z" fill="white"/></g><defs><clipPath id="clip0_326_214"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            formData: {
                name: '',
                email: '',
                mobile: '',
                message: ''
            }
        };
    },
    props:['isSizeDesktop','mobileScreenSize'],
    methods:{
        openExternalLink(link){
            window.open(link, '_blank');
        },
        copyToClipboard(entity) {
            var textToCopy = null
            if(entity=='mobileNumber'){
                textToCopy = '+919047305560';
            } else if(entity=='emailAddress'){
                textToCopy = 'arunsok2@gmail.com';
            }

            const textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            document.body.appendChild(textArea);

            textArea.select();
            document.execCommand('copy');

            document.body.removeChild(textArea);

            if(entity=='mobileNumber'){
                alert('Copied Mobile Number');
            } else if(entity=='emailAddress'){
                alert('Copied Email Address');
            }
        },
        async submitLead(){
            if (this.name != null || this.name != '') {
                if (this.email != null || this.email != '') {
                    const newLead = {};
                    newLead.Name = this.formData.name;
                    newLead.email = this.formData.email;
                    newLead.mobile = this.formData.mobile;
                    newLead.message = this.formData.message;

                    const response = await fetch('https://http-course-f3e8f-default-rtdb.firebaseio.com/leads.json',{
                        method: 'POST',
                        body: JSON.stringify(newLead)
                    })
                    if (!response.ok){
                        const error = new Error(response.statusText || "Something went wrong")
                        throw error;
                    } else {
                        console.log(newLead);
                        this.formData.name= '';
                        this.formData.email= '';
                        this.formData.mobile= '';
                        this.formData.message= '';
                        alert("Thank you! I'll get in touch as soon as possible")
                    }
                }
            }
        }
    }
}
</script>

<style scoped>
*{
    background-color: #101010;
}
.container-fluid{
    background-color: #101010;
    margin: 0;
    padding-top: 64px;
    padding-bottom: 32px;
}
.container{
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: center;
}
.title-desktop{
    font-family: 'Comfortaa','Inter', sans-serif;
    font-size: 48px;
    margin-bottom: 32px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 12px;
}
.title-mobile{
    font-family: 'Comfortaa','Inter', sans-serif;
    font-size: 28px;
    margin-bottom: 28px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 16px;
}
.description-desktop{
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    text-align: center;
    margin-bottom: 32px;
}
.description-mobile{
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    text-align: center;
    margin-bottom: 32px;
}
.form-desktop{
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 520px;
    justify-content: center;
    align-items: center;
}
.form-mobile{
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.field-desktop{
    width: 100%;
    min-height: 48px;
    padding-left: 16px;
    background-color: #D4D4D4;
    border: none;
    border-radius: 8px;
    color: #101010;
    font-family: 'Inter',sans-serif;
}
::placeholder{
    font-family: 'Inter',sans-serif;
    color: #9C9C9C;
}
:focus{
    border: none;
    outline: none;
}
.field-mobile{
    width: 100%;
    min-height: 48px;
    padding-left: 16px;
    background-color: #D4D4D4;
    border: none;
    border-radius: 8px;
    color: #101010;
    font-family: 'Inter',sans-serif;
}
.textarea-desktop{
    width: 100%;
    min-height: 48px;
    padding-top: 8px;
    padding-left: 16px;
    background-color: #D4D4D4;
    border: none;
    border-radius: 8px;
    color: #101010;
    font-family: 'Inter',sans-serif;
}
.textarea-mobile{
    width: 100%;
    min-height: 48px;
    padding-top: 8px;
    padding-left: 16px;
    background-color: #D4D4D4;
    border: none;
    border-radius: 8px;
    color: #101010;
    font-family: 'Inter',sans-serif;
}
.button-desktop{
    width: 100%;
    min-height: 48px;
    border-radius: 8px;
    background: rgba(245, 222, 25, 1);
    border-radius: 8px;
    border: none;
    font-family: 'Comfortaa','Inter',sans-serif;
    font-size: 14px;
    font-weight: 900;
    color: #101010;

}
.button-mobile{
    width: 100%;
    min-height: 48px;
    border-radius: 8px;
    background: rgba(245, 222, 25, 1);
    border-radius: 8px;
    border: none;
    font-family: 'Comfortaa','Inter',sans-serif;
    font-size: 15px;
    font-weight: 900;
    color: #101010;
}
.contact-info-group-desktop{
    display: flex;
    margin-top: 32px;
    gap: 28px;
}
.contact-info-group-mobile{
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    gap: 16px;
    align-items: center;
}
.contact-icon-text-group-desktop{
    display: flex;
    gap: 4px;
}
.contact-icon-text-group-mobile{
    display: flex;
    gap: 4px;
}
.contact-info-desktop{
    margin-bottom: 0;
    font-family: 'Inter',sans-serif;
    font-size: 16px;
    text-decoration: underline;
    cursor: pointer;
}
.contact-info-mobile{
    margin-bottom: 0;
    font-family: 'Inter',sans-serif;
    font-size: 16px;
    text-decoration: underline;
    cursor: pointer;
}
.contact-info-link{
    text-decoration: none;
    color: white;
}
.social-media-icons-desktop{
    display: flex;
    gap: 16px;
    margin-top: 32px;
}
.social-media-icons-desktop svg{
    cursor: pointer;
}
.social-media-icons-mobile{
    display: flex;
    gap: 16px;
    margin-top: 32px;
}
.copy-button{
    cursor: pointer;
}
</style>
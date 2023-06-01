const  {createApp} = Vue;

createApp({
    data(){
        return{
            title : "Hello Vue!!",
            image : "https://picsum.photos/seed/picsum/800/400"
        }
    }
}).mount("#app");
console.log('Vue Slider');

const { createApp } = Vue;

createApp ({

  data(){
    return {
      images: [
        {
          photo: 'assets/img/01.webp',
          title: 'Spider-man Miles Morales',
          text: 'Da grandi poteri, derivano grandi responsabilitá',
        },
        
        {
          photo: 'assets/img/02.webp',
          title: 'Gameplay',
          text: 'lorem h harhahrgaga',
        },
      
        {
          photo: 'assets/img/03.webp',
          title: 'Fortnite',
          text: 'lorem harabfaghgfha',
        },
      
        {
          photo: 'assets/img/04.webp',
          title: 'Cat',
          text: 'lorem nsfjksfnsfgw',
        },
      
        {
          photo: 'assets/img/05.webp',
          title: 'Marvel Avengers',
          text: 'lorem agsgsgadgagdag',
        }
      ],
      
      counterImage: 0,
    }
  },

  methods: {

  },

  mounted(){
    console.log(counterImage);
  }


}).mount('#app');
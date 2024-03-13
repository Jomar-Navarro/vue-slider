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
      isNext: true,
      goNext: true,
    }
  },

  methods: {
    nextPrev(isNext){
      isNext ? this.counterImage++ : this.counterImage--;

      if (this.counterImage === this.images.length) {
        this.counterImage = 0
      }else if(this.counterImage < 0){
        this.counterImage = this.images.length - 1
      }
    },

    autoPlay(){
      setInterval(() => {
        if (this.isNext) {
          this.nextPrev(this.goNext)
        }
      }, 2000);
    },

    invertAutoscroll(){
      console.log('invert');
      this.goNext = !this.goNext;
    }
  },

  mounted(){
    this.autoPlay()
  }


}).mount('#app');
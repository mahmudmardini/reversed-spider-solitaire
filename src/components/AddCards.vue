<template lang="html">

  <div class="cards-to-add">
    <div 
      v-for="card in (cards.length / piles.length)" :key="card" 
      class="flipper-wrap--reversed">
      
      <div class="flipper">

        <div class="card card__back"
        :style="{ left: (card * leftCardIndex) + 'vw' , backgroundImage: `url('images/card.jpeg')`}" 
        @click="addCards"
        >
        </div>

      </div>
    </div>
  </div>
    
</template>

<script>

export default {
  
  name: "AddCards",

  props: {
    cards: Array,
    piles: Array
  },

  data () {
    return {
      leftCardIndex: 6 
    }
  },

  methods: {

    checkSortedSuit(){
        this.$emit('checkSortedSuit', 'pile')
    },

    addCards () {
      if (this.cards.length === 0) {
        return
      }

      // check if an empty pile exists
      const isEmptyCard = this.piles.some(pile => pile[0].empty)

      // show warinig message using vue toasted library
      if (isEmptyCard) {
          this.$toasted.show("Cannot send cards to an empty pile, please fill all piles and try again.", { 
            theme: "toasted-primary", 
            position: "top-right", 
            duration : 5000
          })
        return
      }

      // deal cards to each pile 
      this.piles.forEach((pile, pileIndex) => {
        const card = this.cards.pop()
        card.pile = pileIndex
        card.reversed = false
        
        pile.push(card)			  

        // check if a full correct suit has formed
        this.checkSortedSuit(pile)
      })
      
      // play card sound
      let cardSound = new Audio('audio/card.mp3')
      cardSound.play()    
    },

  }

}
</script>

<template>
  <div class="container">
    
    <Header 
      :time="time"
      :score="score"
      :moves="moves"
    />
    <TopRow
    :cards="cards" 
    :piles="piles"
    />

    <div class="piles">
      <Pile
        v-for="(pile, i) in piles"
        :pile="pile"
        :key="i"
        @onCardSelect="onCardSelect"
      />
    </div>

    <WinModal
      v-if="showWinModal"
      :gameTime="time"
      :moves="moves"
      :score="score"
      :highestScore="highestScore"
      @close="showWinModal = false"
      @newGame="clearData(); createCards()"
    />

    <StartModal
      v-if="showStartModal"
      @close="showStartModal = false"
      @clearData="clearData()"
      @createCards=" createCards()"
      :levelValue="selectedLevel" @setLevelValue="selectedLevel = $event"
    />

    <Actions
      @restart="clearData(); createCards();"

      :startModalValue="showStartModal" @setStartModal="showStartModal = $event"
    />
  </div>
</template>

<script>
import _ from 'lodash'

// import components
import TopRow from '@/views/TopRow'
import Header from '@/views/Header'
import Pile from '@/components/Pile'
import WinModal from '@/views/WinModal'
import StartModal from '@/views/StartModal'
import Actions from '@/views/Actions'

// import styles
import '@/styles/App.scss'
import '@/styles/modal.scss'

import Vue from "vue";
import Toasted from 'vue-toasted';

Vue.use(Toasted)

export default {
  components: {
    TopRow,
    Header,
    Pile,
    WinModal,
    StartModal,
    Actions
  },

  data () {
    return {
      piles: Array(10).fill().map(() => []),
      cards: [],
      suits: ['spade', 'heart', 'club', 'diamond'],
      selectedCards: [],
      selectedLevel: 1,
      sortedSuits: 0,
      sortedSuitPoints: 65,
      sortedSuitSymbols: 0,
      symbolsInCard: 2,
      pilesToSort: 8,
      cardsInSuit: 13,
      time: {
        seconds: '00',
        minutes: '00',
        hours: '00',
      },
      score: 0,
      highestScore: 0,
      moves: 0,
      showStartModal: true,
      showWinModal: false
    }
  },

  methods: {
    createCards () {

      // create 104 cards (13 cards in one suit * 8 piles that we want to sort)
      for (let i = 0; i < this.cardsInSuit * this.pilesToSort; i++) {
        this.cards.push({
          id: i,
          value: i % this.cardsInSuit,
          suit: this.suits[i % this.selectedLevel],
          reversed: true,
          pile: -1,
          selected: false,
          empty: false,
          toString () {
            const names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
            return `${ names[this.value] } ${ this.suit } - Pile: ${ this.pile }`
          }
        })
      }
      // shuffle cards
      this.cards = _.shuffle(this.cards)

      // put 6 cards in first 4 piles
      for (let pileNumber = 0; pileNumber < 4; pileNumber++) {
        for (let i = 0; i < 6; i++) {
          const card = this.cards.pop()
          card.pile = pileNumber
          this.piles[pileNumber].push(card)
        }
      }

      // put 6 cards in the other piles
      for (let pileNumber = 4; pileNumber < this.piles.length; pileNumber++) {
        for (let i = 0; i < 5; i++) {
          const card = this.cards.pop()
          card.pile = pileNumber
          this.piles[pileNumber].push(card)
        }
      }

      // show last card in pile
      this.piles.forEach(pile => {
        const lastIndex = pile.length - 1
        pile[lastIndex].reversed = false
      })

    // start timer 
    this.startTimer()
    },

    clearData () {
      this.piles = Array(10).fill().map(() => [])
      this.cards = []
      this.sortedSuits = 0
      this.sortedSuitSymbols = 0
      this.score = 0
      this.moves = 0
      this.resetTimer()

      // hide sorted piles cards
      let sortedPileCards = document.querySelectorAll('.sorted-pile-card')
      sortedPileCards.forEach(card => {
        card.style.visibility = 'hidden'
      })

    },

    deselectCards () {
      this.piles.forEach(pile => {
        pile.forEach(card => {
          card.selected = false
        })
      })
      this.selectedCards = []

      // play card audio
      let cardSound = new Audio('audio/card.mp3')
			cardSound.play()
    },

    createEmptyCard (pile) {
      pile.push({
        pile: this.piles.indexOf(pile),
        empty: true
      })
    },

    checkCardsToMove (cards) {
      // move if only one card selected
      if (cards.length === 1) {
        return true
      }

      // check selected cards suits
      const isLikeFirstCardSuit = card => card.suit === cards[0].suit
      const areSuitsCorrect = cards.every(isLikeFirstCardSuit)

      // check selected cards values
      const firstValue = cards[0].value
      const cardsValues = cards.map(card => card.value)
      const areVlauesCorrect = cardsValues.every((value, index) => {
        return value === firstValue + index 
      })

      return areSuitsCorrect && areVlauesCorrect
    },

    // check if cards on pile creating full suit in correct order
    checkSortedSuit (pile) {
      let pileLength = 0
      const currentPileValues = []
      const currentPileSuits = []

      // set current pile values and suits
      pile.forEach(card => {
        if (!card.reversed) {
          pileLength++
          currentPileValues.push(card.value)
          currentPileSuits.push(card.suit)
        }
      })
      
      // return false if current sorted pile length is less than 13
      if (pileLength < this.cardsInSuit) {
        return false
      }

      let correctValues = 0
      // check if cards are in good order
      for (let i = pileLength - this.cardsInSuit; i < pileLength - 1; i++) {
        // check sorted cards values
        if (currentPileValues[i] + 1 === currentPileValues[i + 1]) {
          correctValues++
        } else {
          return false
        }

      //   // check sorted cards suits
        if (currentPileSuits[i] !== currentPileSuits[i + 1]){
          return false
        }
      }

      if (correctValues === this.cardsInSuit - 1) { // cards in good order
        
        // set sorted pile symbols
        for(let i = 0; i < this.symbolsInCard; i++){
          let sortedSuitSymbol = document.querySelectorAll('.sorted-suit-symbol')[this.sortedSuitSymbols]
          sortedSuitSymbol.src = `images/${currentPileSuits[currentPileSuits.length - 1]}.svg`
          this.sortedSuitSymbols++
        }

        // remove sorted pile cards
        pile.splice(- this.cardsInSuit)

        // check if any more cards exists in current pile
        if (pile.length === 0) {
          this.createEmptyCard (pile)
        }

        else if (pile[pile.length - 1].reversed === true) {
          pile[pile.length - 1].reversed = false
        }

        this.sortedSuits++
        this.score += this.sortedSuitPoints * this.selectedLevel

        // show sorted pile card
        let sortedPileCard = document.querySelectorAll('.sorted-pile-card')[this.sortedSuits - 1]
        sortedPileCard.style.visibility = 'visible'

        // play sorted suit sound
        let sortedSuitSound = new Audio('audio/sorted-suit.ogg')
				sortedSuitSound.play();

        this.checkWin()
      }

    },
    // Select card
    onCardSelect (card) {

      // don't select reversed card
      if (card.reversed) {
        this.deselectCards()
        return false
      }

      // check if any cards selected before
      const isAnyCardSelected = this.piles.some(pile => {
        return pile.some(card => card.selected)
      })

      // don't select if it's empty and there is no card selected to move
      if (!isAnyCardSelected && card.empty) {
        return false
      }

      if (!isAnyCardSelected) {
          
          // set current pile
          const currentPile = this.piles[card.pile]

          // set card index in pile
          const cardIndex = currentPile.findIndex(cardInPile => {
            return cardInPile.id === card.id
          })

          // check cards to select
          const cardsOnTop = currentPile.slice(cardIndex)
          const isCardsSelectCorrect = this.checkCardsToMove(cardsOnTop)

          if (isCardsSelectCorrect) {
            // select cards
            cardsOnTop.forEach(card => card.selected = true)
            this.selectedCards.push(...cardsOnTop)
          } else {
            this.deselectCards()
          }

      } else { // if there is selected card
        
        // deselect card if click on earlier selected card
        if (card.selected) {
          this.deselectCards()
          return false
        }

        this.moveCards(card)
      }

    },

    moveCards(card){

      const targetPile = this.piles[card.pile]
      const selectedPile = this.piles[this.selectedCards[0].pile]

      const lastCardInTargetPile = targetPile[targetPile.length - 1]; 

      // check last card in target pile
      if ( lastCardInTargetPile.value + 1 !== this.selectedCards[0].value && !card.empty) { 
        this.deselectCards()
        this.onCardSelect (card)
        return false
      }

      // set selected card index in its pile
      const indexFrom = selectedPile.findIndex(cardInPile => {
        return cardInPile.id === this.selectedCards[0].id
      })

      // remove empty card if it was exist
      if (targetPile[0].empty === true) {
        targetPile.pop()
      }

      // move cards
      const movingCards = selectedPile.splice(indexFrom)
      movingCards.forEach(movingCard => movingCard.pile = card.pile)
      targetPile.push(...movingCards)

      this.checkSortedSuit(targetPile)

      this.deselectCards()

      // reverse last card in the pile
      if (selectedPile.length > 0) {
        selectedPile[selectedPile.length - 1].reversed = false
      }
      else { // if moved card was the last one on the pile
        this.createEmptyCard(selectedPile)
      }

      // increase moves
      this.moves++;

      // play move audio
      let moveSound = new Audio('audio/move.mp3');
			moveSound.play();
    },

    startTimer() {  
      // increase minutes
      if(this.time.seconds === 60) {
        this.time.minutes++
        this.time.seconds = '00'

        // reduce score
        if(this.score > 0){
          this.score = this.score - 6
        }
      }
      // increase hours
      if(this.time.minutes === 60) {
        this.time.hours++
        this.time.minutes = '00'
      }
      // increase seconds
      this.timer = setTimeout(() => {
                      this.time.seconds++
                      this.startTimer()
                    }, 1000)

      // set seconds format
      if(this.time.seconds < 10) {
        this.time.seconds = '0' + Number(this.time.seconds)
      }
      // set minutes format
      if(this.time.minutes < 10) {
        this.time.minutes = '0' + Number(this.time.minutes)
      }
      // set hours format
      if(this.time.hours < 10) {
        this.time.hours = '0' + Number(this.time.hours)
      }
    },

    stopTimer(){
      clearTimeout(this.timer);
    },

    resetTimer(){
      this.time.seconds = '00'
      this.time.minutes = '00'
      this.time.hours = '00'
      clearTimeout(this.timer);
    },

    checkWin () {
      // check if all cards has sorted
      if (this.sortedSuits === this.pilesToSort) {
        this.showWinModal = true // show win modal
        this.stopTimer() //stop timer
        this.highestScore = this.score > this.highestScore ? this.score : this.highestScore
      }
    }
  },
}
</script>


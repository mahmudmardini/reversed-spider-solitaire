<template lang="html">
  <div class="flipper-wrap" :class="{ 'flipper-wrap--reversed': card.reversed }">
    <div class="flipper">

      <div
        class="card card__front"
        :class="{ 'card--selected': card.selected, 'card--empty': card.empty }">
        <span class="name name--up">
          {{ name }}
        </span>
        
        <img v-if="!card.empty" class="symbol symbol--small symbol--up" :src="`images/${ suit }.svg`">

        <span class="name name--big">
          {{ name }}
        </span>
        
        
        <span class="name name--down">
          {{ name }}
        </span>
        
        <img v-if="!card.empty" class="symbol symbol--small symbol--down" :src="`images/${ suit }.svg`">

      </div>

      <div class="card card__back" :style="{ backgroundImage: `url('images/card.jpeg')` }">
      </div>

    </div>
  </div>
</template>

<script>
import '@/styles/card.scss'

export default {
  
  name: "Card",
  
  props: {
    card: { type: Object, required: true }
  },
  
  computed: {
    name () {
      const names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
      return names[this.card.value]
    },
    
    suit () {
      return this.card.suit
    }
  }
}
</script>

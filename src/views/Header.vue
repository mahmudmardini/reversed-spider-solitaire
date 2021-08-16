<template lang="html">

    <section class="header">
      
      <Timer :time="time"/>

      <Moves :moves="moves" />

      <Score :score="score"/>

    </section>
    
</template>

<script>
import Timer from '@/components/Timer'
import Moves from '@/components/Moves'
import Score from '@/components/Score'
import '@/styles/header.scss'

export default {
  
  name: "Header",

  components: {
    Timer,
    Moves,
    Score
  },

  props:
   {
    time: Object,
    score: Number,
    moves: Number,
  }
  
}
</script>

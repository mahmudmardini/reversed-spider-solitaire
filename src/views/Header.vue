<template lang="html">

    <section class="header">
      
      <Timer :time="time"/>

      <Moves :moves="moves" />

      <Score :score="score" />

      <HighestScore />

    </section>
    
</template>

<script>
import Timer from '@/components/Timer'
import Moves from '@/components/Moves'
import Score from '@/components/Score'
import HighestScore from '@/components/HighestScore'
import '@/styles/header.scss'

export default {
  
  name: "Header",

  components: {
    Timer,
    Moves,
    Score,
    HighestScore
  },

  props:
   {
    time: Object,
    score: Number,
    moves: Number,
  }
  
}
</script>

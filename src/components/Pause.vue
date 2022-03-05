<template lang="html">

  <div class="pause" @click="pause">

    <div v-if="!isPaused" class="pause-button"> 
      <!-- pause icon -->
      <img src="images/pause.png" />

      <!-- pause gutton -->
      <button> Pause </button>
    </div>

    <div v-else  class="resume-button"> 
      <!-- pause icon -->
      <img src="images/play.png" />

      <!-- pause gutton -->
      <button> Resume </button>
    </div>

  </div>
    
</template>

<script>

export default {
  
  name: "Pause",

    props: {
      isPaused: Boolean
    },

    methods: {
      pause () {
        this.$emit('pauseGame')
      }
    },

}
</script>

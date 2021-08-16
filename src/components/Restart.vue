<template lang="html">

  <div class="restart" @click="restart();">

    <!-- restart icon -->
    <img src="images/restart.png" />

    <!-- restart icon -->
    <button> Restart </button>

  </div>
    
</template>

<script>

export default {
  
  name: "Restart",
  
  methods: {
    restart () {
      this.$emit('restart')
    }
  }
}
</script>

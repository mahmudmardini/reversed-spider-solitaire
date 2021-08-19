<template lang="html">

  <div class="hint" @click="hint()">

    <!-- hint icon -->
    <img src="images/hint.png" />

    <!-- hint icon -->
    <button> Hint </button>

  </div>
    
</template>

<script>

export default {
  
  name: "Hint",
  
  methods: {
    hint () {
      this.$emit('hint')
    }
  }
}
</script>

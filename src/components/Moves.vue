<template lang="html">

  <div class="moves">

    <!-- moves label -->
    <label>Moves: {{moves}}</label>

  </div>
</template>

<script>

export default {

  name: "Moves",
  
  props: {
    moves: Number
  }
  
} 
</script>

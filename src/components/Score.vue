<template lang="html">
  <div class="score">

    <!-- Score label -->
    <label>Score: {{score}}</label>

  </div>
</template>

<script>

export default {
  
  name: "Score",
  
  props: {
    score: Number
  },
  
} 
</script>

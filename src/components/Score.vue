<template lang="html">
  <div class="score">

    <!-- cup icon -->
    <img src="images/cup.png" />

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

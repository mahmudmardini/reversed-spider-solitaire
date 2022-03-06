<template lang="html">
  <div class="highest-score">

    <!-- cup icon -->
    <img src="images/cup.png" />

    <!-- Highest Score label -->
    <label>Highest Score: {{highestScore}}</label>

  </div>
</template>

<script>

export default {
  
  name: "HighestScore",

  data () {
    return {
      highestScore: 0
    }
  },

  created () {
    this.getHighestScore().then( (response) => {
      this.highestScore = response.data
    })
  },

  methods: {
     getHighestScore () {
      return this.$http.get('https://mahmudmardini.bartinrehberi.info/projects/reversed-spider-solitaire/services/getScore.php')
    }
  }
  
} 
</script>

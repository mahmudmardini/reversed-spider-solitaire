<template lang="html">
  <div class="level">
    <!-- level options -->
    <label v-for="levelOption in levelOptions" :key="levelOption" :for="'level'+levelOption">
            
      <input 
      :id="'level'+levelOption"
      type="radio"
      name="numberOfSuits"
      v-model="selectedLevel"
      :value="levelOption"
      class="level-option"
      />
            
      {{ levelNames[levelOption-1] + ( (levelOption == 1) ? ' Suit' : ' Suits' ) }}

      <!-- level suits' icons -->
      <img :src="`images/spade.svg`">
      <img v-if="levelOption >= 2" :src="`images/heart.svg`">
      <img v-if="levelOption > 2" :src="`images/club.svg`">
      <img v-if="levelOption > 2" :src="`images/diamond.svg`">

    </label>
  </div>
</template>

<script>

export default {
  
  name: "Levels",
  
  data () {
    return {
      levelOptions: [1, 2, 4],
      levelNames: ['One', 'Two', 'Three', 'Four']
    }
  },

  props: {
    levelValue: Number
  },

  created () {
    this.clearData()
  },
  
    computed: {
      selectedLevel: {
        get() {
          return this.levelValue;
        },
        set(levelValue) {
          this.$emit('setLevelValue', levelValue);
        }
      }
    },
  
  methods: {
    clearData(){
        this.$emit('clearData')
    }
  }

}
</script>

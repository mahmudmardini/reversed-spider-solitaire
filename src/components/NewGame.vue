<template lang="html">

  <div class="new-game" @click="showStartModal = true">

    <!-- new game icon -->
    <img src="images/new-game.png" />

    <!-- new game gutton -->
    <button> New Game </button>

  </div>
    
</template>

<script>

export default {
  
  name: "NewGame",

    props: {
        startModalValue: Boolean
    },
  
    computed: {
        showStartModal: {
            get() {
            return this.startModalValue;
            },
            set(startModalValue) {
            this.$emit('setStartModal', startModalValue);
            }
        }
  }

}
</script>

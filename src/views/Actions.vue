<template lang="html">
    <section class="actions">

      <!-- hint button -->
      <Hint @hint="hint()" />

      <!-- pause button -->
      <Pause :isPaused="isPaused" @pauseGame="pauseGame" />

      <!-- restart button -->
      <Restart @restart="restart()" />

      <!-- new game button -->
      <NewGame :startModalValue="showStartModal" @setStartModal="showStartModal = $event" />

    </section>
</template>

<script>
import NewGame from '@/components/NewGame'
import Pause from '@/components/Pause'
import Restart from '@/components/Restart'
import Hint from '@/components/Hint'
import '@/styles/actions.scss'

export default {
  
  name: "Actions",

  components: {
    NewGame,
    Pause,
    Restart,
    Hint
  },

  props: {
    startModalValue: Boolean,
    isPaused: Boolean,
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

  },

  methods: {

    restart(){
        this.$emit('restart')
    },

    hint(){
        this.$emit('hint')
    },

    pauseGame(){
        this.$emit('pauseGame')
    }

  }
}
</script>

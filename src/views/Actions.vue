<template lang="html">
    <section class="actions">

      <!-- hint button -->
      <Hint @hint="hint()" />

      <!-- restart button -->
      <Restart @restart="restart()" />

      <!-- new game button -->
      <NewGame :startModalValue="showStartModal" @setStartModal="showStartModal = $event" />

    </section>
</template>

<script>
import NewGame from '@/components/NewGame'
import Restart from '@/components/Restart'
import Hint from '@/components/Hint'
import '@/styles/actions.scss'

export default {
  
  name: "Actions",

  components: {
    NewGame,
    Restart,
    Hint
  },

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
  },

  methods: {

    restart(){
        this.$emit('restart')
    },

    hint(){
        this.$emit('hint')
    }

  }
}
</script>

<template lang="html">
    <section class="actions">

      <!-- new game button -->
      <NewGame :startModalValue="showStartModal" @setStartModal="showStartModal = $event" />

      <!-- restart button -->
      <Restart @restart="restart()" />

    </section>
</template>

<script>
import NewGame from '@/components/NewGame'
import Restart from '@/components/Restart'
import '@/styles/actions.scss'

export default {
  
  name: "Actions",

  components: {
    NewGame,
    Restart
  },

  props:
   {
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
    }
  }
}
</script>

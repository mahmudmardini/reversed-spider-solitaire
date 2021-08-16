<template lang="html" type="text/x-template" id="modal-template">
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container">

          <div class="modal__header">
            <h1 class="modal__title">
              Reversed Spider Solitaire
            </h1>
          </div>
            
            <!-- levels component-->
            <Levels
                @clearData="clearData();" 
                :levelValue="selectedLevel" @setLevelValue="selectedLevel = $event"
            />

          <div class="modal__footer">
            <slot name="footer">
              <button
                @click="close(); createCards();"
                class="modal__button button button--newGame"
                type="button">
                Start!
              </button>
            </slot>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Levels from '@/components/Levels'

export default {
  
  name: "StartModal",

    components: {
        Levels
    },

    props: {
    levelValue: Number,
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
        createCards () {
            this.$emit('createCards')
        },

        clearData () {
            this.$emit('clearData')
        },

        close () {
            this.$emit('close');
        }
    }

}
</script>

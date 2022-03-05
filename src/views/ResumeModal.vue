<template lang="html" type="text/x-template" id="modal-template">
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container">

          <div class="modal__header">
            <h1 class="modal__title">
              Game Paused!
            </h1>
          </div>

          <div class="modal__footer">
            <slot name="footer">
              <button
                @click="resume()"
                class="modal__button button button--newGame"
                type="button">
                Resume!
              </button>
            </slot>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  
  name: "ResumeModal",

    methods: {
        resume () {
            this.$emit('resume')
        }
    }

}
</script>

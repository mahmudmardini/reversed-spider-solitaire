<template lang="html" type="text/x-template" id="modal-template">
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container">

          <div class="modal__header">
            <h1 class="modal__title">
              Are you sure?
            </h1>
          </div>

          <div class="modal__footer">
            <slot name="footer">
              <button
                @click="restart()"
                class="modal__button button button--confirm"
                type="button">
                Yes
              </button>
              <button
                @click="cancel()"
                class="modal__button button button--cancel"
                type="button">
                Cancel
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
  
  name: "RestartModal",

    methods: {
        restart () {
            this.$emit('restart')
        },

        cancel () {
            this.$emit('cancel')
        }
    }

}
</script>

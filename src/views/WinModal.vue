<template lang="html" type="text/x-template" id="modal-template">
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container">

          <div class="modal__header">
            <h3 class="modal__title">
              Congratulations!
            </h3>
            <button
              type="button"
              class="modal__button button button--exit"
              @click="$emit('close')">
                x
            </button>
          </div>

          <div class="modal__body">
            <p name="body">
              You have won this game! 🤩 
              <br>
              Time: {{gameTime.hours}}:{{gameTime.minutes}}:{{gameTime.seconds}} 
              <br>
              Moves: {{moves}} 
              <br>
              Score: {{score}} 
              <br>
              Highest Score: {{highestScore}} 
            </p>
          </div>

          <div class="modal__footer">
            <slot name="footer">
              <button
                @click="$emit('close'); $emit('newGame')"
                class="modal__button button button--newGame"
                type="button">
                New Game
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

  props: {
    gameTime: Object,
    moves: Number,
    score: Number,
    highestScore: Number
  },

  created () {
        let winSound = new Audio('audio/win.mp3');
				winSound.play();
  }

}
</script>

<template lang="html" type="text/x-template" id="modal-template">
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container">

          <div class="modal__header">
            <h3 class="modal__title">
              Congratulations!
            </h3>
            <!-- <button
              type="button"
              class="modal__button button button--exit"
              @click="$emit('close')">
                x
            </button> -->
          </div>

          <div class="modal__body">
              <p> You have won this game! 🤩</p>
              <p> Time: {{gameTime.hours}}:{{gameTime.minutes}}:{{gameTime.seconds}} </p>
              <p> Moves: {{moves}}</p>
              <p> Your score: {{score}}</p>
              <p v-if="score >= highestScore"> Old highest score: {{oldHighestScore}} </p>
              <p v-if="score >= highestScore"> You got the highest score ever! </p>
              <p v-else> Highest Score: {{highestScore}} </p>
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
    score: Number
  },

  data () {
    return {
      highestScore: 0,
      oldHighestScore: 0
    }
  },

  created () {
        let winSound = new Audio('audio/win.mp3');
				winSound.play();

    this.getHighestScore().then( (response) => {
      this.highestScore = this.oldHighestScore = response.data;

      if(this.score >= this.highestScore){
        this.updateHighestScore(this.score);
      }
    })

  },

  methods: {

    updateHighestScore (score) {this.$http.get('https://mahmudmardini.bartinrehberi.info/projects/reversed-spider-solitaire/services/updateScore.php?highestScore='+score)
        .then(function () {
          // handle success
        })
        .catch(function (error) {
          alert(error);
        });
    },

     getHighestScore () {
      return this.$http.get('https://mahmudmardini.bartinrehberi.info/projects/reversed-spider-solitaire/services/getScore.php')
    },
  }

}
</script>

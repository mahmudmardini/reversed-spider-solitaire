<template lang="html">
  <div class="pile">
    <Card
      v-for="(card, index) in pile"
      :card="card"
      :key="card.id"
      :style="{ top: -index * topPileIndex + 'px' }"
      @click.native="onCardClick(card)"
    />
  </div>
</template>

<script>
import Card from '@/components/Card'


export default {
  
  name: "Pile",

  components: {
    Card
  },

  props: {
    pile: { type: Array, required: true }
  },

  data () {
    return {
      topPileIndex: 125,
      topPileIndexLg: 125,
      topPileIndexMd: 97,
      topPileIndexSm: 70
    }
  },

  created () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },

  methods: {
    onCardClick (card) {
      this.$emit('onCardSelect', card)
    },


  // responsive design
    onResize () {
      let WindowWidth = window.innerWidth

      if (WindowWidth > 1155) {
        if (this.topPileIndex !== this.topPileIndexLg) {
          this.topPileIndex = this.topPileIndexLg
        }
        return
      }

      else if (WindowWidth <= 889) {
        if (this.topPileIndex !== this.topPileIndexSm) {
          this.topPileIndex = this.topPileIndexSm
        }
        return
      }

      else if (WindowWidth <= 1155) {
        if (this.topPileIndex !== this.topPileIndexMd) {
          this.topPileIndex = this.topPileIndexMd
        }
        return
      }
    }
    
  }
}
</script>

<template lang="html">

  <div class="toprow">
      
      <!-- add cards component -->
      <AddCards :cards="cards" :piles="piles" @checkSortedSuit="checkSortedSuit" />
        
        <div class="sorted-piles">
            
            <!-- show 8 piles -->
            <div v-for="index in 8" :key="index" class="sorted-pile flipper">
                 
                <div class="card card__front sorted-pile-card">
                    <span class="name name--up">A</span>
                    <img class="sorted-suit-symbol symbol symbol--small symbol--up" src="#">
                    <span class="name name--big">A</span>
                    <span class="name name--down">A</span>
                    <img class="sorted-suit-symbol symbol symbol--small symbol--down" src="#">
                </div>
                
            </div>

        </div>
	</div>

    
</template>

<script>
import AddCards from '@/components/AddCards'
import '@/styles/topRow.scss'

export default {

    props:
    {
        cards: Array,
        piles: Array
    },
    
    components: {
      AddCards
    },

    methods: {

        checkSortedSuit(){
            this.$emit('checkSortedSuit', 'pile')
        },


    }

}
</script>

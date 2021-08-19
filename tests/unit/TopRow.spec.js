import { shallowMount } from "@vue/test-utils";
import TopRow from '@/views/TopRow'
import AddCards from '@/components/AddCards'

describe('test top row section and its components', () => {
  
  const topRowComponent = shallowMount(TopRow, {
    propsData: {
      cards: [{value: 11}],
      piles: [{value: 11}]
    }
  })

  const addCardsComponent = shallowMount(AddCards, {
    propsData: {
      cards: [{value: 5}, {value: 2}, {value:8}],
      piles: [[{value: 5}, {value: 2}, {value:8}]]
    }
  })

  topRowComponent.vm.checkSortedSuit(0)

  addCardsComponent.vm.addCards()
  addCardsComponent.vm.checkSortedSuit(0)

  test('should contain A card', () => {
    expect(topRowComponent.text()).toContain('A')
  })
  
})
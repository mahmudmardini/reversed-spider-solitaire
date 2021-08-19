import { mount  } from "@vue/test-utils";
import Pile from '@/components/Pile'

describe('test card component', () => {

  let card = {
    name: 'A',
    value: 0,
    selected: true
  }
  
  const pileComponent = mount (Pile, {
    propsData: {
      pile: [card]
    }
  })

  pileComponent.vm.onResize()
  pileComponent.vm.onCardClick(card)

  test('card should be selected', () => {
    expect(card.selected).toBeTruthy()
  })
  
})
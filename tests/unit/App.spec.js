import { mount } from "@vue/test-utils";
import App from '@/App'

describe('test top row section and its components', () => {
  
  const AppWrapper = mount(App)

  AppWrapper.vm.createCards()
  const cards = AppWrapper.vm.cards
  test('should contain all cards after calling creatCards method', () => {
    const cardNames = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
      cardNames.forEach( cardName => {
        expect(cards.toString()).toContain(cardName)
      })
  })


  AppWrapper.vm.clearData()
  test('should not contain any cards after calling clearData method', () => {      
      expect(cards.toString()).not.toContain('k')
  })


AppWrapper.vm.startTimer()

AppWrapper.vm.stopTimer()

AppWrapper.vm.resetTimer()

AppWrapper.vm.checkWin()

AppWrapper.vm.hint()
const hintIterator = AppWrapper.vm.hintIterator

test('should equal to 0', () => {      
    expect(hintIterator).toEqual(0)
})
})
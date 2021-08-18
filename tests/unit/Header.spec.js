import { mount } from '@vue/test-utils'
import Header from '@/views/Header'
import Timer from '@/components/Timer'
import Moves from '@/components/Moves'
import Score from '@/components/Score'

describe('test header section', () => {
  
  const wrapper = mount(Header, {
    
    propsData: {
      time: {
        hours: '00',
        minutes: '15',
        seconds: '30'
      },
      moves: 145,
      score: 500
    }
    
  })


  test('should return correct time', () => {
    expect(wrapper.getComponent(Timer).text()).toContain('00:15:30')
  })
  
  
  test('should return correct moves number', () => {
    expect(wrapper.getComponent(Moves).text()).toContain('Moves: 145')
  })
  
  
  test('should return correct Score', () => {
    expect(wrapper.getComponent(Score).text()).toContain('Score: 500')
  })

})
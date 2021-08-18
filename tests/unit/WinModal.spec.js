import { mount } from '@vue/test-utils'
import WinModal from '@/views/WinModal'

describe('test win modal', () => {
  test('should return correct time, moves and score values', () => {
    const wrapper = mount(WinModal, {
      propsData: {
        gameTime: {
          hours: '00',
          minutes: '15',
          seconds: '30'
        },
        moves: 150,
        score: 480,
        highestScore: 520
      },
    })
    
    expect(wrapper.text()).toContain('Congratulations!')
    expect(wrapper.text()).toContain('Time: 00:15:30')
    expect(wrapper.text()).toContain('Moves: 150')
    expect(wrapper.text()).toContain('Score: 480')
    expect(wrapper.text()).toContain('Highest Score: 520')
    
  })
})
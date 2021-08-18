import { shallowMount } from "@vue/test-utils";
import Levels from '@/components/Levels'

describe('test game level modes', () => {
  
  const wrapper = shallowMount(Levels, {
    propsData: {levelValue: 2}
  })


  test('should contain all game modes', () => {
    expect(wrapper.text()).toContain('One Suit')
    expect(wrapper.text()).toContain('Two Suits')
    expect(wrapper.text()).toContain('Four Suits')
  })

  wrapper.vm.$emit('setLevelValue', 2)
  wrapper.setData({selectedLevel: 2})
  const twoSuits = wrapper.find('#level2')

  test('should select two suits option', () => {
    expect(twoSuits.element.checked).toBeTruthy()
  })
  
})
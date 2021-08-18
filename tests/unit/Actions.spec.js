import { mount } from '@vue/test-utils'
import { shallowMount } from "@vue/test-utils";
import Actions from '@/views/Actions'
import NewGame from '@/components/NewGame'
import Restart from '@/components/Restart'

describe('test game action buttons', () => {
  
  const wrapper = mount(Actions)

  wrapper.findComponent(Restart).vm.restart()
  wrapper.findComponent(NewGame).vm.$emit('setStartModal', true)
  shallowMount(NewGame).setData({showStartModal: true})

  test('should contain new game button', () => {
    expect(wrapper.getComponent(NewGame).text()).toContain('New Game')
  })
  
  
  test('should contain restart button', () => {
    expect(wrapper.getComponent(Restart).text()).toContain('Restart')
  })
  
})
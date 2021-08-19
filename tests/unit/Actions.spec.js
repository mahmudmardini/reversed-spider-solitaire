import { mount } from '@vue/test-utils'
import { shallowMount } from "@vue/test-utils";
import Actions from '@/views/Actions'
import NewGame from '@/components/NewGame'
import Restart from '@/components/Restart'
import Hint from '@/components/Hint'

describe('test game action buttons', () => {
  
  const actionsWrapper = mount(Actions)

  actionsWrapper.findComponent(Restart).vm.restart()
  actionsWrapper.findComponent(NewGame).vm.$emit('setStartModal', true)
  actionsWrapper.findComponent(Hint).vm.hint()

  mount(NewGame).setData({showStartModal: true})

  test('should contain new game button', () => {
    expect(actionsWrapper.findComponent(NewGame).text()).toContain('New Game')
  })
  
  
  test('should contain restart button', () => {
    expect(actionsWrapper.getComponent(Restart).text()).toContain('Restart')
  })
  
  
  test('should contain hint button', () => {
    expect(actionsWrapper.findComponent(Hint).text()).toContain('Hint')
  })
  
})
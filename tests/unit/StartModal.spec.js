import { shallowMount } from "@vue/test-utils";
import StartModal from '@/views/StartModal'

describe('test top row section and its components', () => {
  
  const startModalWrapper = shallowMount(StartModal, {
    propsData: {
      levelValue: 2
    }
  })

  startModalWrapper.vm.createCards()
  startModalWrapper.vm.clearData()
  startModalWrapper.vm.close()
  startModalWrapper.setData({selectedLevel: 2})

  test('should find start button', () => {
    expect(startModalWrapper.text()).toContain('Start!')
  })
  
})
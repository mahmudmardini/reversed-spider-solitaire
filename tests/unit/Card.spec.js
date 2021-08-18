import { mount  } from "@vue/test-utils";
import Card from '@/components/Card'

describe('test card component', () => {
  
  const wrapper = mount (Card, {
    propsData: {
      card: {
        value: 11,
      }
    }
  })

  test('should contain card name', () => {
    expect(wrapper.text()).toContain('Q')
  })
  
})
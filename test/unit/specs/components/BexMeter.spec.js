import { mount } from '@vue/test-utils'
import BexMeter from '@/components/BexMeter'

describe('BexMeter', () => {
  describe('when percentage is 0%', () => {
    it('the arc with colour should be hidden', () => {
      const wrapper = mount(BexMeter, { propsData: { percentage: 0 } })
      expect(wrapper.findAll('circle')).toHaveLength(1)
    })
  })

  describe('when percentage is bigger than 0%', () => {
    it('the arc with colour should be visible', () => {
      const wrapper = mount(BexMeter, { propsData: { percentage: 50 } })
      expect(wrapper.findAll('circle')).toHaveLength(2)
    })
  })
})

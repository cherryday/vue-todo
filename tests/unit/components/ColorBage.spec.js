import { shallowMount, enableAutoDestroy } from '@vue/test-utils'
import ColorBage from '@/components/ColorBage'

describe('ColorBage', () => {
  enableAutoDestroy(beforeEach)

  let wrapper

  const createComponent = (props) => {
    wrapper = shallowMount(ColorBage, {
      propsData: {
        color: '#64C4ED',
        ...props
      }
    })
  }

  it('emit event on click', () => {
    createComponent()
    wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })

  it.each([
    ['active', 'bage--active'],
    ['selected', 'bage--selected']
  ])('add classes if props', (propsName, className) => {
    createComponent({ [propsName]: true })
    expect(wrapper.classes()).toContain(className)
  })
})

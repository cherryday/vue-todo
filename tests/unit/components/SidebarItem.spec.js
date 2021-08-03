import { shallowMount, enableAutoDestroy } from '@vue/test-utils'
import SidebarItem from '@/components/sidebar/SidebarItem'

describe('SidebarItem', () => {
  enableAutoDestroy(beforeEach)

  let wrapper

  const findButtonRemove = () => wrapper.find('button')

  const createComponent = (props) => {
    wrapper = shallowMount(SidebarItem, {
      propsData: props,
      slots: {
        prepend: 'PREPEND',
        text: 'TEXT'
      }
    })
  }

  it('render slots', () => {
    createComponent()
    expect(wrapper.text()).toContain('PREPEND')
    expect(wrapper.text()).toContain('TEXT')
  })

  it('emit event if wrapper click', () => {
    createComponent()
    wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })

  it('emit event if button click', () => {
    createComponent({ remove: true })
    findButtonRemove().trigger('click')
    expect(wrapper.emitted().remove).toBeTruthy()
  })

  it('render button remove', () => {
    createComponent({ remove: true })
    expect(findButtonRemove().exists()).toBeTruthy()
  })

  it('add classes if props', () => {
    createComponent({ active: true })
    expect(wrapper.classes()).toContain('sidebar-item--active')
  })
})

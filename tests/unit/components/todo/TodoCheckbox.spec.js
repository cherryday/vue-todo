import { shallowMount, enableAutoDestroy } from '@vue/test-utils'
import TodoCheckbox from '@/components/todo/TodoCheckbox'

describe('TodoCheckbox', () => {
  enableAutoDestroy(beforeEach)

  let wrapper

  const findButtonRemove = () => wrapper.find('button')

  const createComponent = (props) => {
    wrapper = shallowMount(TodoCheckbox, {
      propsData: props
    })
  }

  it('show button if completed', () => {
    createComponent({ item: { name: 'test', completed: true } })
    expect(findButtonRemove().exists()).toBeTruthy()
  })

  it('emit remove', () => {
    createComponent({ item: { name: 'test', completed: true } })
    findButtonRemove().trigger('click')
    expect(wrapper.emitted().remove).toBeTruthy()
  })
})

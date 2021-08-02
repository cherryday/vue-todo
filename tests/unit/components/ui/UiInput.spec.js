import { shallowMount, enableAutoDestroy } from '@vue/test-utils'
import UiInput from '@/components/ui/UiInput'

describe('UiInput', () => {
  enableAutoDestroy(beforeEach)

  let wrapper

  const findInput = () => wrapper.find('input')

  const createComponent = (props) => {
    wrapper = shallowMount(UiInput, {
      propsData: props
    })
  }

  it('error message', () => {
    createComponent({ error: 'Error' })
    expect(wrapper.text()).toContain('Error')
  })

  it('emit event', async () => {
    createComponent()
    const input = findInput()
    await input.setValue('test')
    expect(wrapper.emitted().input).toEqual([['test']])
  })

  it('set attributes', () => {
    createComponent({ placeholder: 'test', value: 'test' })
    const input = findInput()
    expect(input.attributes().placeholder).toBe('test')
    expect(input.element.value).toBe('test')
  })
})

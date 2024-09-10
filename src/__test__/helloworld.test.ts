import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

test('Count Event', async () => {
  const wrapper = shallowMount(HelloWorld, {
    props: {
      msg: 'hello world'
    }
  })

  await wrapper.setProps({ msg: 'test a prop msg' })

  expect(wrapper.find('h1').text()).toContain('test a prop msg')

  wrapper.find('button').trigger('click')
  wrapper.find('button').trigger('click')

  expect(wrapper.vm.count).toBe(2)
})
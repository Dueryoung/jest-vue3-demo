import { shallowMount } from '@vue/test-utils'
import Nav from '@/views/Nav.vue'
test('renders a profile link', () => {
  const wrapper = shallowMount(Nav)

  // Here we are implicitly asserting that the
  // element #profile exists.
  const profileLink = wrapper.get('#profile')

  expect(profileLink.text()).toEqual('My Profile')
  expect(wrapper.find('#admin').exists()).toBe(false)
  expect(wrapper.get('#user-dropdown').isVisible()).toBe(false)
})

test('renders an admin link', async () => {
  const wrapper = await shallowMount(Nav)

  // 修改响应式数据
  wrapper.vm.admin = true; // 如果是使用 ref，可以通过 count.value = 10 来修改
  // 等待Vue更新DOM
  await wrapper.vm.$nextTick();

  // Again, by using `get()` we are implicitly asserting that
  // the element exists.
  expect(wrapper.get('#admin').text()).toEqual('Admin')
})
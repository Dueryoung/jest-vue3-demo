import { shallowMount } from '@vue/test-utils'
import Counter from '@/views/Counter.vue'
test('emits an event with count when clicked', () => {
  const wrapper = shallowMount(Counter)

  wrapper.find('button').trigger('click')
  wrapper.find('button').trigger('click')

  // `emitted()` accepts an argument. It returns an array with all the
  // occurrences of `this.$emit('increment')`.
  const incrementEvent = wrapper.emitted('increment')

  // 点击了两次，这个 increment 应该有两个结果
  expect(incrementEvent).toHaveLength(2)

  // 断言第一次点击的结果
  // 注意这个值是一个数组
  // expect(incrementEvent[0]).toEqual([1])
  // 断言第二次点击结果
  // expect(incrementEvent[1]).toEqual([2])

  // 修改传递值
  expect(incrementEvent[0]).toEqual([{
    count: 1,
    isEven: false
  }])
  expect(incrementEvent[1]).toEqual([{
    count: 2,
    isEven: true
  }])
})
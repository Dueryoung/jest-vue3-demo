import { mount, flushPromises } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { useUser } from '@/hooks/useUser.ts'
import axios from 'axios'

// jest.spyOn(axios, 'get').mockResolvedValue({ data: 'some mocked data!' })

// test('uses a mocked axios HTTP client and flushPromises', async () => {
//   // some component that makes a HTTP called in `created` using `axios`
//   // const wrapper = mount(AxiosComponent)

//   await flushPromises() // axios promise is resolved immediately

//   // after the line above, axios request has resolved with the mocked data.
// })

// Mock API request
jest.spyOn(axios, 'get').mockResolvedValue({ data: { id: 1, name: 'User' } })

test('fetch user on mount', async () => {
  const TestComponent = defineComponent({
    template: `<div>hello world</div>`,
    props: {
      // Define props, to test the composable with different input arguments
      userId: {
        type: Number,
        required: true
      }
    },
    setup (props) {
      return {
        // Call the composable and expose all return values into our
        // component instance so we can access them with wrapper.vm
        ...useUser(props.userId)
      }
    }
  })

  const wrapper = mount(TestComponent, {
    props: {
      userId: 1
    }
  })

  expect(wrapper.vm.user).toBeUndefined()

  await flushPromises()

  expect(wrapper.vm.user).toEqual({ id: 1, name: 'User' })
})
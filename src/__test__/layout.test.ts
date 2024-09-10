import { shallowMount } from "@vue/test-utils"
import Layout from "@/components/Layout.vue"

test('layout full page layout', () => {
  const wrapper = shallowMount(Layout, {
    slots: {
      header: '<div>Header</div>',
      main: '<div>Main Content</div>',
      footer: '<div>Footer</div>',
      scoped: `<template #scoped="scope">
        Hello {{ scope.msg }}
        </template>
      `
    }
  })

  expect(wrapper.html()).toContain('<div>Header</div>')
  expect(wrapper.html()).toContain('<div>Main Content</div>')
  expect(wrapper.html()).toContain('<div>Footer</div>')
  expect(wrapper.html()).toContain('hello world')
})
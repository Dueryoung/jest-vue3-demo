# jest-vue3-demo

#### 介绍
jest vue3 项目测试

#### 相关链接
1. vue3 test utils 文档： https://test-utils.vuejs.org/guide/ ，直接按照文档的例子测试代码，每个例子都很清晰。
  * vue 异步更新DOM机制，注意搭配 async/await 使用，或者使用 await nextTick()
  * 要注意匹配，注释也会匹配
  * 格式约束 Arrange, Act, Assert： 新行分隔，不同阶段用新的一行进行分隔，安排、执行、断言三个阶段


#### 相关知识点

1.  关于测试文件命名规范
  * .test.js：通常用于表示该文件包含测试用例，强调这是一个测试文件。使用 .test.js 更直观地表明文件的用途。
  * .spec.js：通常用于表示该文件包含对某个特定功能或模块的规范（specification）测试，强调测试的规范性。使用 .spec.js，因为它与行为驱动开发（BDD）中的“规范”概念相符。
2.  xxxx
3.  xxxx

#### 使用说明

1.  npm install
2.  npm run test
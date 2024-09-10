test("基础类型的比较", () => {
  // ...
  // boolean
  expect(true).toBe(true);
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
  // undefined
  expect(undefined).toBe(undefined);
  expect(undefined).not.toBeDefined();
  expect(undefined).toBeUndefined();
})

test("基础类型的比较 0.1+0.2", () => {
  // ...
  // 浮点数
  // expect(0.2 + 0.1).toBe(0.3);
  expect(0.2 + 0.1).toBeCloseTo(0.3);
})

test("引用类型的比较", () => {
  const a = { obj1: { name: "obj1", obj2: { name: "obj2" } } };
  const b = Object.assign(a);
  const c = JSON.parse(JSON.stringify(a));
  expect(a).toBe(b);
  expect(a).not.toBe(c);
  expect(a).toEqual(b);
  expect(a).toEqual(c);
})

test("数字符号", () => {
  // >
  expect(3).toBeGreaterThan(2);
  // <
  expect(3).toBeLessThan(4);
  // >=
  expect(3).toBeGreaterThanOrEqual(3);
  expect(3).toBeGreaterThanOrEqual(2);
  // <=
  expect(3).toBeLessThanOrEqual(3);
  expect(3).toBeLessThanOrEqual(4);
});
test('表单验证', () => {
  // 数组元素验证
  expect([1,2,3]).toContain(1)
  expect([1,2,3]).toEqual(expect.arrayContaining([1,2]))
  expect([{a: 1, b: 2}]).toContainEqual({a: 1, b: 2})

  // 数组长度
  expect([1,2,3]).toHaveLength(3)

  // 对象属性验证
  const testObj = {
    prop1: 1,
    prop2: {
      child1: 2,
      child2: 'test'
    }
  }
  expect(testObj).toHaveProperty('prop1')
  expect(testObj).toHaveProperty('prop2.child2')
})

test('错误抛出', () => {
  const throwError = () => {
    const err = new Error('console err: 这是一个测试错误抛出')
    throw(err)
  };
  // expect(throwError).toThrow()
  // expect(throwError).toThrowError()
  
  const catchError = () => {
    try {
      const err = new Error('console err: 这是一个测试错误抛出2')
      throw(err)
    } catch (error) {
      console.log(error);
    }
  }
  expect(catchError).not.toThrow()
  // expect(throwError).not.toThrowError()
})

test('同步自定义匹配器', () => {
  const toBeBetweenZeroAndTen = (num: number) => {
    if (num >= 0 && num <= 10) {
      return {
        message: () => "",
        pass: true
      }
    } else {
      return {
        message: () => "excepted num to be between zero and ten.",
        pass: false
      }
    }
  }
  expect.extend({
    toBeBetweenZeroAndTen
  })
  expect(8).toBeBetweenZeroAndTen()
  expect(11).not.toBeBetweenZeroAndTen()
})

test("异步自定义匹配器", async () => {
  // debugger
  const toBeBetweenZeroAndTen = async (num: number) => {
    const res = await new Promise<{ message: () => string; pass: boolean }>(
      (resolve) => {
        setTimeout(() => {
          if (num >= 0 && num <= 10) {
            resolve({
              message: () => "",
              pass: true,
            });
          } else {
            resolve({
              message: () =>
                "expected num to be a number between zero and ten",
              pass: false,
            });
          }
        }, 100); // 1000 会出现 Exceeded timeout of 5000 ms for a test
      }
    );
    return (
      res || {
        message: () => "expected num to be a number between zero and ten",
        pass: false,
      }
    );
  };
  expect.extend({
    toBeBetweenZeroAndTen,
  });
  await expect(8).toBeBetweenZeroAndTen();
  await expect(11).not.toBeBetweenZeroAndTen();
});
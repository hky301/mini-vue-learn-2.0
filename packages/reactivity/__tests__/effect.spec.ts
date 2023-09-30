
describe("effect", () => {
  it.skip("happy path", () => {
    const user = reactive({
      age: 10
    })
    let nextAge;
    effect(() => {
      nextAge = user.age
    })

    expect(nextAge).toBe(11)

    user.age++
    expect(nextAge).toBe(12)
  })
})

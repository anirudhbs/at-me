export const HELLO_WORLD = 'HELLO_WORLD'

export function helloWorld () {
  return {
    type: HELLO_WORLD,
    value: [1, 2, 3]
  }
}

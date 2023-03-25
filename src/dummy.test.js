import { describe, it, expect } from 'vitest'

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true)
  })

  it('false to be false', () => {
    expect(false).toBe(false)
  })
})
const message = 'Hello, world!'

it('contains the word "world"', () => {
  expect(message).toContain('world')
})

const person = { name: 'Alice', age: 30 }

it('has the "name" property', () => {
  expect(person).toHaveProperty('name')
})

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1
}

it('returns a number greater than or equal to 1', () => {
  expect(getRandomNumber()).toBeGreaterThanOrEqual(1)
})

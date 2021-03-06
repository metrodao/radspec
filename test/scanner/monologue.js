import test from 'ava'
import { scan } from '../../src/scanner'

test('Scanner: MONOLOGUE', async (t) => {
  const cases = [
    ['', []],
    ['Hello, world', ['MONOLOGUE']],
    ['Anything goes in a monologue: ð¤\nããã«ã¡ã¯', ['MONOLOGUE']],
    ['Anything between ticks are not monologues `a`, anything after is', [
      'MONOLOGUE', 'TICK', 'IDENTIFIER', 'TICK', 'MONOLOGUE'
    ]]
  ]
  t.plan(cases.length)

  for (let [input, expected] of cases) {
    t.deepEqual(
      (await scan(input))
        .map((token) => token.type),
      expected
    )
  }
})

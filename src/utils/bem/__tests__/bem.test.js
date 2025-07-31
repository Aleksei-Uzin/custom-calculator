import { bem } from '../bem'

const b = 'block'
const e = 'element'
const m = 'modifier'

describe('bem', () => {
  describe('BLOCK component', () => {
    it('SHOULD add a MODIFIER for BLOCK component', () => {
      const className = bem(b, '', m)

      expect(className).toBe(`${b}_${m}`)
    })
  })

  describe('ELEMENT component', () => {
    it('SHOULD create a class name for ELEMENT component', () => {
      const className = bem(b, e)

      expect(className).toBe(`${b}__${e}`)
    })

    it('SHOULD add a MODIFIER for ELEMENT component', () => {
      const className = bem(b, e, m)

      expect(className).toBe(`${b}__${e}_${m}`)
    })
  })
})

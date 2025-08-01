import { createElement } from '../createElement'

describe('createElement', () => {
  it('SHOULD create new element', () => {
    const div = createElement()
    const h1 = createElement({ type: 'h1' })
    const button = createElement({ type: 'button' })

    expect(div).toBeInstanceOf(Element)
    expect(div.tagName).toBe('DIV')

    expect(h1).toBeInstanceOf(Element)
    expect(h1.tagName).toBe('H1')

    expect(button).toBeInstanceOf(Element)
    expect(button.tagName).toBe('BUTTON')
  })

  it('SHOULD add the class name', () => {
    const className = 'main'
    const div = createElement({ className })

    expect(div).toBeInstanceOf(Element)
    expect(div.tagName).toBe('DIV')
    expect(div.classList.contains(className)).toBeTruthy()
  })

  it('SHOULD be set a new attribute', () => {
    const props = {
      ['data-value']: '25',
      id: 'main',
    }
    const div = createElement(props)

    expect(div).toBeInstanceOf(Element)
    expect(div.tagName).toBe('DIV')
    expect(div.getAttribute('data-value')).toBe(props['data-value'])
    expect(div.id).toBe(props.id)
  })

  it('SHOULD insert the STRING as a child node', () => {
    const childNode = 'test content'
    const div = createElement({ children: childNode })

    expect(div).toBeInstanceOf(Element)
    expect(div.tagName).toBe('DIV')
    expect(div.innerHTML).toBe(childNode)
  })

  it('SHOULD insert new ELEMENT as a child node', () => {
    const childElement = createElement({ type: 'button', id: 'main' })
    const element = createElement({ children: childElement })

    expect(element).toBeInstanceOf(Element)
    expect(element.tagName).toBe('DIV')
    expect(element.innerHTML).toMatch('<button id="main"></button>')
  })
})

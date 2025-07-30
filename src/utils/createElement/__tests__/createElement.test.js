import { createElement } from '../createElement'

describe('createElement', () => {
  it('SHOULD create new element', () => {
    const div = createElement('div')
    const h1 = createElement('h1')
    const button = createElement('button')

    expect(div).toBeInstanceOf(Element)
    expect(div.tagName).toBe('DIV')

    expect(h1).toBeInstanceOf(Element)
    expect(h1.tagName).toBe('H1')

    expect(button).toBeInstanceOf(Element)
    expect(button.tagName).toBe('BUTTON')
  })

  it('SHOULD add the class name', () => {
    const className = 'main'
    const div = createElement('div', { className })

    expect(div).toBeInstanceOf(Element)
    expect(div.tagName).toBe('DIV')
    expect(div.classList.contains(className)).toBeTruthy()
  })

  it('SHOULD be set a new attribute', () => {
    const dataValue = '25'
    const id = 'main'
    const div = createElement('div', {
      'data-value': dataValue,
      id,
    })

    expect(div).toBeInstanceOf(Element)
    expect(div.tagName).toBe('DIV')
    expect(div.getAttribute('data-value')).toBe(dataValue)
    expect(div.id).toBe(id)
  })

  it('SHOULD insert the STRING as a child node', () => {
    const childNode = 'test content'
    const className = 'main'
    const div = createElement('div', { className }, childNode)

    expect(div).toBeInstanceOf(Element)
    expect(div.tagName).toBe('DIV')
    expect(div.innerHTML).toBe(childNode)
  })

  it('SHOULD insert new ELEMENT as a child node', () => {
    const id = 'main'
    const childElement = createElement('button', { id })
    const element = createElement('div', {}, childElement)

    expect(element).toBeInstanceOf(Element)
    expect(element.tagName).toBe('DIV')
    expect(element.innerHTML).toMatch('<button id="main"></button>')
  })
})

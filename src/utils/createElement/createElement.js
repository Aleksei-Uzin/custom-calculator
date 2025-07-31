export function createElement(elementType, props = {}, ...children) {
  const element = document.createElement(elementType)

  for (const [prop, value] of Object.entries(props)) {
    if (prop === 'className') {
      element.classList.add(value)
    } else {
      element.setAttribute(prop, value)
    }
  }

  for (let childElement of children) {
    if (typeof childElement === 'string') {
      childElement = document.createTextNode(childElement)
    }

    element.appendChild(childElement)
  }

  return element
}

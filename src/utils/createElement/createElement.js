export function createElement({ type = 'div', children, ...props } = {}) {
  const element = document.createElement(type)

  for (const [prop, value] of Object.entries(props)) {
    if (prop === 'className') {
      element.classList.add(value)
    } else {
      element.setAttribute(prop, value)
    }
  }

  if (children) {
    children = Array.isArray(children) ? children : [children]

    for (let childElement of children) {
      if (typeof childElement === 'string') {
        childElement = document.createTextNode(childElement)
      }

      element.appendChild(childElement)
    }
  }

  return element
}

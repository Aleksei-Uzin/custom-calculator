export function bem(b, e, m) {
  let className = b

  if (e) {
    className += `__${e}`
  }

  if (m) {
    className += `_${m}`
  }

  return className
}

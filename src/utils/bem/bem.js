export function bem(b, e, m) {
  let className = b

  if (Boolean(e)) {
    className += `__${e}`
  }

  if (Boolean(m)) {
    className += `_${m}`
  }

  return className
}

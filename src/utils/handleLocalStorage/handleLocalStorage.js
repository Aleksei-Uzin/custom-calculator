export function handleLocalStorage() {
  const key = 'memoryOperations'

  const getStorage = () => {
    const valueInLocalStorage = window.localStorage.getItem(key)

    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage)
    } else {
      return []
    }
  }

  const cleareStorage = () => {
    window.localStorage.removeItem(key)
  }

  const updateStorage = value => {
    let storage = getStorage()
    storage = [value]

    window.localStorage.setItem(key, JSON.stringify(storage))
  }

  return { getStorage, cleareStorage, updateStorage }
}

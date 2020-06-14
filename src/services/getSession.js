function getSession () {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('oenfaeifu01923g89')
    }, 3000)
  })
  return promise
}

export {
  getSession
}

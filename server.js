import express from 'express'

const app = express()

let server = null

const listen = (callback) => {
  return new Promise((resolve, reject) => {
    server = app.listen(1337, () => {
      console.log('starting server on port 1337')
      resolve()
    })
  })
}

export { app, listen }
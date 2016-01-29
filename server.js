import express from 'express'

const app = express()

// keep an instance of the server in memory so we pass it around or close it
let server = null

const listen = () => {
  return new Promise((resolve, reject) => {
    server = app.listen(1337, () => {
      console.log('starting server on port 1337')

      resolve()
    })
  })
}

const close = (callback) => {
    console.log('Shutting down server');

    // possible errors if we open and close express servers in rapid succession
    // wait a little bit before closing the server
    setTimeout(() => {
        if (server) {
            server.close(callback);
        } else {
            callback()
        }
    }, 250)
};

export { app, listen, close }
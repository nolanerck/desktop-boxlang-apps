const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.webContents.openDevTools(); // Turn on client-side dev tools

  win.loadFile('./src/index.html')
}

app.whenReady().then(() => {
  createWindow()
})

const path = require("path")
const { app, BrowserWindow, ipcMain, Tray } = require("electron")
require("dotenv").config()

const isDev = process.env.NODE_ENV == "dev"
let mainWindow
let tray

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: +process.env.APP_WIDTH || 1366,
    height: +process.env.APP_HEIGHT || 768,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
    title: require("../package.json").electronWindowTitle,
  })

  // and load the index.html of the app.
  // win.loadFile("index.html");
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../dist/index.html")}`
  )
  tray = new Tray(path.join(__dirname, "./assets/icon.png"))

  tray.setToolTip("Innovolve app")

  tray.on("click", () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
  })
  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools()
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  ipcMain.on("menu-click", (e, action) => {
    if (action === "min") {
      mainWindow.minimize()
    } else if (action === "max") {
      mainWindow.maximize()
    } else if (action === "close") {
      mainWindow.close()
    }
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

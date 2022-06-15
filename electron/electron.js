const path = require("path")
const {
  app,
  BrowserWindow,
  ipcMain,
  Tray,
  dialog,
  Menu,
  MenuItem,
} = require("electron")
const i18n = require("./i18next.config")
const config = require("../package.json")
const servicesUtils = require("./services")
require("dotenv").config()

const isDev = process.env.NODE_ENV == "dev"
let mainWindow
let tray

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: +config.appWidth,
    height: +config.appHeight,
    show: false,
    frame: false,
    icon: path.join(__dirname, "./assets/icon.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
  })

  // and load the index.html of the app.
  // win.loadFile("index.html");
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../dist/index.html")}`
  )

  //splash screen
  var splash = new BrowserWindow({
    width: 500,
    height: 550,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    icon: path.join(__dirname, "./assets/icon.png"), //added icon for loader.
  })

  splash.loadURL(path.join(__dirname, "./loader/splash.html"))
  splash.center()
  setTimeout(function () {
    splash.close()
    mainWindow.center()
    mainWindow.show()
  }, 5000)

  //tray
  tray = new Tray(path.join(__dirname, "./assets/icon.png"))

  tray.setToolTip("Innovolve app")

  tray.on("click", () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
  })

  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools()
  }

  //   Context Menu
  const ctxMenu = new Menu()
  ctxMenu.append(new MenuItem({ role: "copy" }))
  ctxMenu.append(new MenuItem({ role: "paste" }))
  ctxMenu.append(new MenuItem({ role: "minimize" }))
  ctxMenu.append(new MenuItem({ role: "reload" }))
  ctxMenu.append(new MenuItem({ role: "toggleDevTools", visible: isDev }))

  mainWindow.webContents.on("context-menu", function (e, params) {
    ctxMenu.popup(mainWindow, params.x, params.y)
  })
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
      mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize()
    } else if (action === "close") {
      mainWindow.close()
    }
  })

  ipcMain.on("lang-change", (e, lang) => {
    i18n.changeLanguage(lang)
    mainWindow.setTitle(i18n.t("app.title"))
  })

  mainWindow.on("close", function (e) {
    const choice = dialog.showMessageBoxSync(this, {
      type: "question",
      buttons: [i18n.t("prompt.quit"), i18n.t("prompt.minimize")],
      title: i18n.t("prompt.confirm"),
      message: i18n.t("prompt.msg"),
    })
    if (choice === 1) {
      e.preventDefault()
      mainWindow.hide()
    } else {
      servicesUtils.stopServices()
    }
  })

  // wait for window to be ready before loading services.
  mainWindow.on("ready", function () {
    servicesUtils.init(mainWindow)
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  servicesUtils.stopServices()
  if (process.platform !== "darwin") {
    app.quit()
  }
})

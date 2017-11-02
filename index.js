const {app, BrowserWindow} = require('electron');
const path = require('path');

app.on('ready', () => {
    const win = new BrowserWindow({

    });
    win.loadURL(`file://${path.join(__dirname, 'index.html')}`);
    win.webContents.openDevTools();
});
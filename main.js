const path = require('path')
const url = require('url')
const {app, BrowserWindow, protocol} = require('electron')
const express = require('express')
const server = express()

let win; 

function serverSide(){

    server.use(express.static(__dirname))
    server.set('view engine', 'hbs')

    server.get('/main', (req, res)=>{
        res.end('ok1')
    })

    server.use('/egor', (req, res)=>{
        res.render('egor.hbs')
    })

    

    server.listen('3000')
}

function createWindow(){
    win = new BrowserWindow(
        {
            width: 1600,
            height: 900,
            icon: __dirname + '/img/nar.jpg'
        }
    )

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'main.html'), 
        protocol: 'file:', 
        slashes: true
    }))

    //win.webContents.openDevTools()

    serverSide()

    win.on('closed', ()=>{
        win = 'null'
    })
    
    
}

app.on('ready', createWindow)

app.on('window-all-closed', ()=>{
    app.quit()
})
const fs = require('fs')
const path = require('path')
    //REQUIRE PATH, READ FILE and SYNC JSON DOCUMENT
const comunasFilePath = path.join(__dirname, '../data/comunasDataBase.json')
const p00BaseFilePath = path.join(__dirname, '../data/p00_DataBase.json')
    //JSON OBJECT --> JS OBJECT
const comunas = JSON.parse(fs.readFileSync(comunasFilePath, 'utf-8'));
const p00 = JSON.parse(fs.readFileSync(p00BaseFilePath, 'utf-8'));
let controller = {
    comunasP: (req, res) => {
        let comunaID = req.params.comunaID
        res.render('products/productosComuna', {
            title: 'Comuna ' + comunaID
        })
    },
    detallesL: (req, res) => {
        let idRooms = req.params.idRooms
        res.render('products/detallesP', {
            title: 'Producto ' + idRooms,
        })
    },
    listCABA: (req, res) => {
        res.render('products/landingProducts', {
            title: 'PRODUCTOS - CABA',
            comunas: comunas
        })
    }
}
module.exports = controller
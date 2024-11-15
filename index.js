const express = require( 'express' );
const app = express();
const port = 3000;

// JSON faylini import qilish
const shopData = require( './API/YaponOvqatlari.json' );

// JSON uchun middleware
app.use( express.json() );

// API endpoint
app.get( '/api/yaponOvqatlari', ( req, res ) => {
    res.json( shopData );
} );

// Serverni ishga tushirish
app.listen( port, () => {
    console.log( `\n API server http://localhost:${ port } da ishga tushdi! \n
 Yapon Ovqatlari http://localhost:${ port }/api/yaponOvqatlari da ishga tushdi!
    ` );
} );

//routig map
//mapa de rutas para el explorador web
module.exports = function (app, db) {
    //just playing here
    //reg exp url
    //pruebas anti estres
    app.get(/secret/, function (req, res, next) {
        res.format({
            html: function () {
                res.send('<p>Secrtet Poems Directory : 𐤏𐤔𐤕𐤓𐤕 𐤌𐤋𐤊 </p>')
            }
        }),
            next(console.log("uh??"));
    })
    //get collection Documents count
    //trae el numero de documentos de la coleccion
    app.get(/count/, async (req, res, next) => {
        console.log("Entro una solicitud desde http://localhost:3000/count");
        //refactor: DAO implementation
        //refactor: encapsular en otro modulo DAO
        try {
            const collection = db.collection("phoenician_alphabet");
            const countDocuments = await collection.countDocuments();
            //send ya no acepta mas conexiones
            res.send('Browser Canvas via Express:Document Count is: ' + countDocuments);
            //close connection
            //espress docs: cerrar conexion
            next(console.log("express dice: bye!"));
        } catch (e) {
            console.log(e);
        }
    })
    //get alphabet collection
    //trae la collecion completa del alfabeto
    app.get(/alpha/, async (req, res, next) => {
        console.log("Entro una solicitud desde http://localhost:3000/alpha");
        //refactor: DAO implementation
        //refactor: encapsular en otro modulo DAO
        //regresamos la coleccion phoenician_alphabet
        //operacion Read a base de datos
        try {
            const coll = await db.collection("phoenician_alphabet").find({}).project({ symbol: 1, meaning: 1, fav_votes: 1, _id: 0 }).toArray();
            let response = {
                res: coll
            }
            console.log(response.res);
            res.json(response);
            next(console.log("express dice: bye!"));
        } catch (e) {
            console.log(e);
        }
    })
    //mongoDB aggregation framework
    //top 5 symbols
    app.get(/votingpool/, async (req, res, next) => {
        console.log("Entro una solicitud desde http://localhost:3000/votingpool");
        //refactor: encapsular en otro modulo DAO
        const sortStage = { $sort: { "fav_votes": -1 } }
        const project = { $project: { "_id": 0, "meaning": 1, "symbol": 1, "fav_votes": 1 } }
        const limitStage = { $limit: 5 }

        const queryPipeline = [
            sortStage,
            project,
            limitStage
        ]

        try {
            const aggfResults = await db.collection("phoenician_alphabet").aggregate(queryPipeline).toArray();
            console.log(aggfResults);
            res.json(aggfResults)
            next(console.log("express dice: bye!"));

        } catch (e) {
            return { error: "Error al traer los votos desde el server..." }
        }
    })
    //write operation
    //operacion write
    app.route('/vote/:meaning')
        .get(function (req, res) {
            res.send('Get some data from...');
        })
        .post(function (req, res) {
            res.send('Add a vote' + req.params.id + "respond to client");
            //refactor: DAO implementation
        })
        .put(async (req, res) => {
            console.log("El cliente selecciono desde UI" + req.params.meaning);
            // 2 symbol tienen mas de 1 signif...
            let stringLook = req.params.meaning;
            let stringLookFlag = req.params.meaning;
            let string_id_back = stringLookFlag.includes(",");
            //workaround
            let id = req.params.meaning;
            if (string_id_back) {
                let myArrayId = stringLook.split(",");
                id = myArrayId;
            }
            try {
                //refactor: DAO implementation
                //refactor: encapsular en otro modulo DAO
                const collection = db.collection("phoenician_alphabet");
                const backendprocess_result = await collection.updateOne(
                    { meaning: id },
                    { $inc: { fav_votes: 1 } }
                );
                //console.log(backendprocess_result);
                console.log("entro y modifico fav_votes para:_" + id);
                res.send('Un voto mas para:_' + id);

            } catch (err) {
                console.error(err.stack)
            }
        })
}
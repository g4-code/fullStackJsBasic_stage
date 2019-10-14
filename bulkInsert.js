//inicio...
//insertar coleccion phoenician alphabet
//en tu cluster atlas mongoDB
//puede que veas un cuadro en la llave symbol
//eso depende de tu host O.S, pero al insertar en mongodb Atlas 
//ya se ven los simbolos correctamente...
const MongoClient = require("mongodb").MongoClient
const ObjectId = require("mongodb").ObjectId
const MongoError = require("mongodb").MongoError

    /**
     * Refer to http://mongodb.github.io/node-mongodb-native/3.1/tutorials/crud/#bulkwrite
     */

    // This leading semicolon (;) is to make this Immediately Invoked Function Expression (IIFE).
    // To read more about this type of expression, refer to https://developer.mozilla.org/en-US/docs/Glossary/IIFE
    ; (async () => {
        try {
            //ensure you update your host information below!
            //el host lo configuras desde Atlas UI
            //configura un usuario y una contraseña 
            //para la base de datos sample_collections
            //despues reemplaza tu user y tu pass en la linea 24
            //puede que el query string cambie...you can do this!!!
            const host = "mongodb+srv://user:password@mongodb.net/test?retryWrites=true&w=majority"
            //const host = MFLIX_DB_URI
            const client = await MongoClient.connect(
                host,
                { retryWrites: true },
                { useNewUrlParser: true },
                { useUnifiedTopology: true },
            )
            //const mflix = client.db(process.env.MFLIX_NS)
            const sample_collections = client.db("sample_collections")

            const docsArray = [{
                insertOne: {
                    latin_l: 'a',
                    latin_u: 'A',
                    name: '`alp',
                    meaning: 'ox',
                    symbol: '𐤀',
                    fav_votes: 30
                }
            },
            {
                insertOne: {
                    latin_l: 'b',
                    latin_u: 'B',
                    name: 'Bēt',
                    meaning: 'house',
                    symbol: '𐤁',
                    fav_votes: 71
                }
            },
            {
                insertOne: {
                    latin_l: ['c', 'g'],
                    latin_u: ['C', 'G'],
                    name: 'gimel',
                    meaning: ['throwing', 'stick', 'camel'],
                    symbol: '𐤂',
                    fav_votes: 41
                }
            },
            {
                insertOne: {
                    latin_l: 'd',
                    latin_u: 'D',
                    name: 'dalt',
                    meaning: 'door',
                    symbol: '𐤃',
                    fav_votes: 60
                }
            },
            {
                insertOne: {
                    latin_l: 'e',
                    latin_u: 'E',
                    name: 'hē',
                    meaning: 'window',
                    symbol: '𐤄',
                    fav_votes: 49
                }
            },
            {
                insertOne: {
                    latin_l: ['f', 'u', 'v', 'y', 'w'],
                    latin_u: ['F', 'U', 'V', 'Y', 'W'],
                    name: 'wāw',
                    meaning: 'hook',
                    symbol: '𐤅‎',
                    fav_votes: 27
                }
            },
            {
                insertOne: {
                    latin_l: 'z',
                    latin_u: 'Z',
                    name: 'zayin',
                    meaning: 'weapon',
                    symbol: '𐤆',
                    fav_votes: 50
                }
            },
            {
                insertOne: {
                    latin_l: 'h',
                    latin_u: 'H',
                    name: 'hēt',
                    meaning: ['wall', 'courtyard'],
                    symbol: '𐤇‎',
                    fav_votes: 80
                }
            },
            {
                insertOne: {
                    latin_l: '-',
                    latin_u: '-',
                    name: 'tēt',
                    meaning: 'wheel',
                    symbol: '𐤈',
                    fav_votes: 41
                }
            },
            {
                insertOne: {
                    latin_l: ['i', 'j'],
                    latin_u: ['I', 'J'],
                    name: 'yad',
                    meaning: 'hand',
                    symbol: '𐤉',
                    fav_votes: 125
                }
            },
            {
                insertOne: {
                    latin_l: 'k',
                    latin_u: 'K',
                    name: 'kap',
                    meaning: 'palm of a hand',
                    symbol: '𐤊',
                    fav_votes: 25
                }
            },
            {
                insertOne: {
                    latin_l: 'l',
                    latin_u: 'L',
                    name: 'lamed',
                    meaning: 'goad',
                    symbol: '𐤋',
                    fav_votes: 10
                }
            },
            {
                insertOne: {
                    latin_l: 'm',
                    latin_u: 'M',
                    name: 'mēm',
                    meaning: 'water',
                    symbol: '𐤌',
                    fav_votes: 95
                }
            },
            {
                insertOne: {
                    latin_l: 'n',
                    latin_u: 'N',
                    name: 'nūn',
                    meaning: 'serpent',
                    symbol: '𐤍',
                    fav_votes: 127
                }
            },
            {
                insertOne: {
                    latin_l: 'x',
                    latin_u: 'X',
                    name: 'sāmek',
                    meaning: 'fish',
                    symbol: '𐤎',
                    fav_votes: 204
                }
            },
            {
                insertOne: {
                    latin_l: 'o',
                    latin_u: 'O',
                    name: 'ʿēn',
                    meaning: 'eye',
                    symbol: '𐤏',
                    fav_votes: 0
                }
            },
            {
                insertOne: {
                    latin_l: 'p',
                    latin_u: 'P',
                    name: 'pē',
                    meaning: 'mouth',
                    symbol: '𐤐',
                    fav_votes: 60
                }
            },
            {
                insertOne: {
                    latin_l: '-',
                    latin_u: '-',
                    name: 'Ṣādē',
                    meaning: 'plant',
                    symbol: '𐤑',
                    fav_votes: 60
                }
            },
            {
                insertOne: {
                    latin_l: 'q',
                    latin_u: 'Q',
                    name: 'qōp',
                    meaning: 'needle eye',
                    symbol: '𐤒',
                    fav_votes: 93
                }
            },
            {
                insertOne: {
                    latin_l: 'r',
                    latin_u: 'R',
                    name: 'rūsh',
                    meaning: 'head',
                    symbol: '𐤓',
                    fav_votes: 0
                }
            },
            {
                insertOne: {
                    latin_l: 's',
                    latin_u: 'S',
                    name: 'Šin',
                    meaning: 'tooth',
                    symbol: '𐤔',
                    fav_votes: 69
                }
            },
            {
                insertOne: {
                    latin_l: 't',
                    latin_u: 'T',
                    name: 'tāw',
                    meaning: 'mark',
                    symbol: '𐤕',
                    fav_votes: 90
                }
            }]

            const bulkWriteResponse2 = await sample_collections.collection("phoenician_alphabet").bulkWrite(docsArray)
            //si todo salio bien veras el siguiente mensaje en la consola
            //con le numero de docs insertados: 22
            console.log("Numero de Docs Insertados:_" + bulkWriteResponse2.nInserted);
            console.log(
                "\x1b[32m",
                `...`,
                `___`,
            )
            client.close()
            process.exit(0)
        } catch (e) {
            if (
                e instanceof MongoError &&
                e.message.slice(0, "Invalid Operation".length) === "Invalid Operation"
            ) {
                console.log("\x1b[32m", "No documents to update")
            } else {
                console.error("\x1b[31m", `Error during migration, ${e}`)
            }
            process.exit(1)
        }
    })()

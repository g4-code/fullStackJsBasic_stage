Demo FullStack JS Básico
==============

- Código para pruebas...
- Falta crear proceso de build (Gulp etc..)...
- Terminal MacOS (debe funcionar para windows)


1) Debes tener node.js instalado.
2) Debes de crear una cuenta en mongoDB Atlas.
3) Crea una base de datos con una colección vacía en Atlas UI, dale el nombre “sample_collections".
4) Crea un usuario para esta base de datos con SRV string desde Atlas.
5) Navega hacia el Directorio del proyecto en una consola Terminal y ejecuta::

   $npm i

   - Esto instala las dependencias, jsonlock incluido para no tener problemas de versiones.

6) Abre el archivo bulkInsert.js, reemplaza el valor de la variable “host” con tu SRV query string,
después ejecuta el archivo desde Terminal::

   $node bulkInsert.js

   - Esto insertara la colección phoenician alphabet en mongoDB Atlas.

7) Actualiza las variables de entorno en el archivo .env::

   MONGO_DB_URI = el URI+srv con tu usuario y tu password 
   MDB_NS = test_collections

8) Dentro del directorio del proyecto, desde terminal ejecuta::

   $npm start 

   - Esto iniciara la app.

>Nota: Usa el siguiente comando desde Terminal si tienes el error "header in use"::

   $sudo kill $(lsof -ti:3000)

Colección del alfabeto fenicio.
-----------------
Fullstack JS Demo.

- Se configuraron web workers para cargar datos desde el servidor backend.
- El front End se construyo con HTML DOM API y JS
- Se uso expressjs como servidor Web
- Se uso Semantic UI para estilos CSS
- Las operaciones Read y Write están conectadas en el mapa de rutas (Falta implementar DAO)

Este sitio web ayuda a los usuarios a votar en su símbolo fenicio favorito, 
Una vez que un voto fue emitido por un usuario, los resultados se muestran en 
en una grafica tipo Pie Chart.

Operaciones CRUD.
   
Cuando esta página esta lista, ya se han realizado 2 operaciones Read a nivel 
base de datos. Se llama de forma asíncrona a las rutas "./alpha" y "./votingpool", 
en ambas hay una operación Read, donde se solicitan los datos del alfabeto y 
el numero de votos. En el canvas de la pagina web se insertan los datos del alfabeto 
y de la gráfica con la API de HTML/JS. Los visitantes de la pagina web pueden 
votar "tocando/click" en algún símbolo, este evento "tocando/click" procesa 1 
operación Write a nivel base de datos.

Tecnologías:

- node.js
- ExpressJS
- HTML DOM API
- Semantic UI
- MongoDB Atlas

Phoenicean Alphabet.

- Dos operaciones Read: All Docs, Top 5
- Una operación write: Doc by meaning (ID)

===== =========
Mapa de rutas
---------------
http://localhost:3000/
---------------
http://localhost:3000/secret
---------------
http://localhost:3000/alpha.json
---------------
http://localhost:3000/top5.json
===============


> Tags: JavaScript, Código, Educación, Hobby.
> Diseño : Marco Galicia

Puedes contactarme si tienes alguna duda sobre el código.

////////////////////////////////////////////////////////////////////////////////

Basic Demo FullStack JS
==============
- dev code only (TODO: Build process)
- MacOS Terminal (this should work on Windows)

1) Make sure you have node.js installed locally.
2) Make sure to create a free account on MongoDB Atlas.
3) Create an empty database in Atlas UI, call it "sample_collections" with an empty collection.
4) Create an user for the database with an SRV (You can do this via Atlas UI).
5) In terminal, go to the project folder and execute::

   $npm i

   - This will install dependencies. jsonlock file included

6) Open buklInsert.js, replace the hots variable with your SRV query string,
then run the file in Terminal as follows::

   $node bulkInsert.js

   - This action will insert the Phoenician alphabet collection into MongoDB Atlas.

7) Update the env. file with your Atlas credentials::

   MONGO_DB_URI = your URI+srv with user and password ::
   MDB_NS = test_collections

8) Open a terminal into the project folder, then run:

   $npm start 

> Note:Use this command to kill the port if you're getting an error related to "header in use"::

 $sudo kill $(lsof -ti:3000)

Phoenician alphabet collection.
-----------------
JS Fullstack Demo.

- Web workers to load data from backend.
- HTML DOM API with JS to display front End.
- ExpressJS as FTP server.
- Semantic UI for style CSS.
- Read and write CRUD operations wired (No DAO)
- MongoDB Atlas Document Database

> This site helps users to vote on their preferred Phoenician Symbol,
Once a vote is performed by a user, the results are being displayed
into a graphic dashboard.

CRUD operations.

> When this page is ready, 2 Read operations have already been performed at the
 database level. The routes "./alpha" and "./votingpool" are called asynchronously,
a Read operation is being executed in both routes, the app makes a GET request for
the alphabet data and the number of votes. In the web page canvas, the data of 
the alphabet and the graph are inserted with the HTML / JS API. 
Visitors to the website can vote by "tapping / clicking" on some symbol, 
this "tapping / clicking" event processes 1 Write operation at the database level.

Technologies:

- node.js
- ExpressJS
- HTML DOM API
- Semantic UI
- MongoDB

Phoenicean Alphabet.

> (2) Read Ops: All Docs, Top 5.
> (1) Write operation: Doc by meaning (ID)

Route Map / Link

- http://localhost:3000/
- http://localhost:3000/secret
- http://localhost:3000/alpha.json
- http://localhost:3000/top5.json

> Tags: JavaScript, Code, Education, Hobby.
> Design : Marco Galicia

> Let me know if you have any question



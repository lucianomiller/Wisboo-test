# Wisboo-test

Explicación de lo realizado:

Back:
Se creó una api con NestJs que contiene 4 rutas para manejar las consultas (agregue un delete al test). La cual almacena los datos en MongoDB Atlas.
Se realizo el deploy en Heroku : https://wisboo-test.herokuapp.com/
Para tener todas las consultas :https://meaning-tech.herokuapp.com/images

Funcionamiento: realizo solicitud de imagenes a Unsplash y los mando al fron segun lo solicitado. Estas imagenes pueden ser guardadas en la base de datos solo si la id de la imagen no se encuantra en la base de datos. Luego se puede solicitar las url de las imagenes almacenadas y eliminarlas.

Iniciación en localhost: realizar npm i en la carpeta back y luego npm run start:dev

Front:
El fron fue realizado con React, donde en la misma página se puede buscar imagenes, guardarlas y observar despues las imagenes guardadas y eliminarlas.
El deploy del front lo hice en netlify : https://wisboo.netlify.app/
Funcionamiento. cuenta con 2 páginas: 
- la página de Search es un formulario que manda la información de la consulta a la api de heroku. 
- la página Images permite obtener las imagenes guardadas.

Iniciación en localhost: realizar npm i en la carpeta front y luego npm start


DB: utilice mongoDB como base de datos ya que tenia un poco de experiencia y utilizo datos no relacionados.


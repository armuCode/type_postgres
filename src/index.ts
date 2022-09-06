import express from 'express'
const app = express();

import indexRoutes from './routes/index'

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false})); // si le enviamos datos desde un formulario los puede convertir a JSOn

app.use(indexRoutes)

app.listen (4000, () => {
  console.log('server on port 4000')
})
const express = require ('express')
const morgan = require ('morgan')
const bodyParser = require ('body-parser')
const cookieParser = require ('cookie-parser')
const cors = require ('cors')
const mongoose = require ('mongoose')
// routes
const blogRoutes = require ('./routes/blog')
const authRoutes = require ('./routes/auth')

require ('dotenv').config()

//app
const app = express ()

//database
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log('Hello database'))
    .catch(err => {
        console.log(err);
    })

//middlewares
app.use(morgan ('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
//cors
if (process.env.NODE_ENV === 'development') {
    app.use(cors({origin: `${process.env.CLIENT_URL}`}))
}

//routes
app.use('/api', blogRoutes)
app.use('/api', authRoutes)

const PORT = process.env.PORT || 8000

app.listen (PORT, () => {
    console.log(`server is up and running at port ${PORT}`)
})
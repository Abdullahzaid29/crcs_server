const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const morgan = require("morgan")

const app = express()
dotenv.config({path:"config/config.env"})
var corOptions = {
    origin:["https://crcs-dashboard-2023.vercel.app","http://localhost:8000"],
    credentials: true,
    optionsSuccessStatus: 200
}
// models.sequelize.sync()
//     .then(function () {
//         console.log('Connected to Database!!')
//     }).catch(function (err) {
//         console.log(err, "Something went wrong with the Database Update!")
// });

app.use(morgan('tiny'))

app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended:true }))

const router = require('./routes/Router.js')
app.use('/api',router)

app.get("/",(req,res)=>{
res.json({Message:"Server is running on port 3001"})
})

const PORT = process.env.PORT 

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
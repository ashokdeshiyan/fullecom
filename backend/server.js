const connectDB = require('./config/database')
const app = require('./app')
const dotenv = require("dotenv");

process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`closing server due to uncaught Exception`);
    process.exit(1)

})


dotenv.config({path:"backend/config/config.env"})

const port = process.env.PORT
connectDB()



const server = app.listen(port, () => console.log(`this app listening on port ${port}!`))


// unhandle responsse from server

process.on("unhandledRejection",(err)=>{
    console.log(` Error=> ${err.message}`);
    console.log(`closing server due to unhandled Rejection`);

    server.close(()=>{
        process.exit(1)
    })
})

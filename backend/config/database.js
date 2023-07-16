// const { error } = require('console');
const mongoose = require('mongoose')




// const MONGO_URL ='mongodb+srv://admin:root@cluster0.ndcojeo.mongodb.net/fullecommerce?retryWrites=true&w=majority'

const connectDB = 
// async() =>{
//     try {
//         const connect = await mongoose.connect(process.env.MONGO_URL);
//         console.log('db connected: ', connect.connection.host,
//     connect.connection.name);
       
//     } catch (error) { 
//         console.log(error); 
//         process.exit(1)
//     }
// }



 ()=>{
    // console.log(`here is mongo url string ${process.env.MONGO_URL}`);
    mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then((data)=>{
        console.log(`mongodb connected to the server ${data.connection.host} and db is ${data.connection.connection}`);
    })

    //as we handled unhandledRejection so no need to use catch 


    // .catch((error)=>{
    //     console.log(error);
    
    // })
}

module.exports = connectDB;  


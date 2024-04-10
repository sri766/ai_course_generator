const require = require('mongoose')


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
}).then(()=>{
    console.log('Connected to MongoDB')
}).then(err =>{
    console.log("Unable to Connect due to this Error",err)
})

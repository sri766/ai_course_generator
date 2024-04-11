const moongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

moongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log("Unable to connect due to this error:", err);
});

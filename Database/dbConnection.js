import mongoose from "mongoose";


export async function dbConnection() {

    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect('mongodb://127.0.0.1:27017/mongooser', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connection is successful!');
    }
    catch (err) {
        console.log(err);

    }


}

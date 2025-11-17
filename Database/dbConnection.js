import mongoose from "mongoose";


export async function dbConnection() {

    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect('mongodb+srv://NanoRules:ZTFj54G78jusruu@cluster0.uk9amxm.mongodb.net/StickyNotes', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connection is successful!');
    }
    catch (err) {
        console.log(err);

    }


}

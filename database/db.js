import mongoose from "mongoose";

export const Connection = async (USERNAME,PASSWORD) => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.ilk9dq1.mongodb.net/?retryWrites=true&w=majority`;    
    try{
        await    mongoose.connect(URL ,{useUnifiedTopology : true  , useNewUrlParser : true } );
        console.log('Successfully')
    }catch (error){
        console.log('erroe while connecting with the database' , error.message);
    }
}
export default Connection;
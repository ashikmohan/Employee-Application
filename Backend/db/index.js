const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://AshikMohan:Ashik12345@cluster0.ngaoxfw.mongodb.net/Employee')
.then(()=>{
    console.log('Mongo DB is connected')
})
.catch(()=>{
    console.log('Error in connecting MongoDB'+ err)
})
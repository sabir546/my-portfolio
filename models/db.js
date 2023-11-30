const mongoose=require('mongoose')
.connect('mongodb+srv://mdgulamsabir9:r2HcZbcng675etwv@cluster0.i3jkt5d.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log("Db connected"))
.catch((error)=>console.log(error))




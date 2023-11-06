const mongoose=require('mongoose')
.connect('mongodb+srv://mdgulamsabir9:zV252VjkAKVMY2ZN@cluster0.dms7hk3.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log("Db connected"))
.catch((error)=>console.log(error))




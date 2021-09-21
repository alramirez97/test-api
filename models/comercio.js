const  Mongoose  =require( "mongoose");



const comercioSchema= Mongoose.Schema({

    nombre:{type:String,required:true},
    direccion:{type:String,required:true}

})
comercioSchema.statics.Constructor=function(nombre,direccion){
    return new this({
        nombre:nombre,
        direccion:direccion
    })
}

module.exports= Mongoose.model('Comercio',comercioSchema)


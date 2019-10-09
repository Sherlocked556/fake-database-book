var mongoose=require("mongoose");
const BookSchema={
  title:{type:String,require:true},  
   author:{type:String,require:true},
    description:{type:String,require:true},
    price:{type:Number,require:true},
    image:{type:String,require:true},
    copies:{type:String,require:true},
    mrp:{type:Number,require:true},
    pages:{type:Number,require:true},

}
module.exports=mongoose.model('Book',BookSchema);
// const mongoose = require('mongoose');




// main().then(()=>{                                            
//     console.log("succesfull");
// })
// .catch(err => console.log(err));                                  // STEP 1) CONNECTION Established
//                                                                   //  Step 2) W eite the scheme in your collection 
//                                                                   // step3) write to the model   this is main step
// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }
// const bookScheme = new mongoose.Schema({
//     title:String,
//     author:String,
//     price:Number
// });

// const Book = mongoose.model("Book" , bookScheme);

// let Book1 = new Book({
//     title:"gauravaawanke",
//     author:"hap lee",
//     price:"2226"                                                     // data inserted
// });
// Book1.save().then((res)=>{
//     console.log(res);

// }).catch((err)=>{
//     console.log(err);

// });

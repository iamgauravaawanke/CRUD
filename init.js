

// import mongoose from 'mongoose';
// import Chat from './models/chat.js';


const mongoose = require('mongoose');
const Chat = require("./models/chat.js"); // ✅ correct






main()

.then(()=>{
  console.log("succesfull");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');



// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const chatSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  msg: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});


const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
                                // this chat created and save to the database
  
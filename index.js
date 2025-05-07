// const mongoose = require('mongoose');




// main().then(()=>{
//     console.log("succesfull");
// })
// .catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

// const userScheme = new mongoose.Schema({
//     name: String,
//     email:String,
//     age: Number,

// })

// const User = mongoose.model("User", userScheme);

// // User.find({})
// // .then((res) =>{
// //   console.log(res);
// // })
// // .catch((err) =>{
// //   console.log(err);
// // });

// // User.insertMany([
// //   {name:"tony", email:"gaurav.com" , age:67},
// //   {name:"asd", email:"gaurav.com" , age:27},
// //   {name:"toadny", email:"gaurav.com" , age:68},

// // ]).then((res)=>{
// //   console.log("res");
// // });

// // User.updateMany({age : { $gt :10 } }, {age: 20}) .then((res)=>{
// //   console.log(res);

// // }).catch((err)=>{
// //   console.log(err);
// // });

// User.findOneAndUpdate({name:"asd"}, {name:"gaurav"})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// });

const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose');

const path = require("path");
const Chat = require("./models/chat.js");
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));




main()

.then(()=>{
  console.log("succesfull");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');



// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get("/chats",async (req,res) =>{
  let chats = await Chat.find();
  console.log(chats);
  res.render("index" ,{chats});                  // this async is function tell 
});

app.get("/chats/new" ,(req,res)=>{
  res.render("new");
})

app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;

  let newChat = new Chat({
    from,
    to,
    msg,
    created_at: new Date(),
  });
//   app.get("/chats/:id/edit", async (req, res) => {
//     let { id } = req.params;
//     let chat = await Chat.findById(id);
//     res.render("edit.ejs", { chat });
// });


  newChat.save()
    .then(() => {
      console.log("Data was saved");
      res.redirect("/chats");
    })
    .catch((err) => {
      console.error("Validation error:", err);
      res.status(400).send("Validation failed: " + err.message);
    });
});



// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled



const express = require('express');

const router = express.Router();

let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },

];

// router.get("/email", (req, res) => {
//     const  email = req.query.email;
  
//     const foundUser = users.find((user) => user.email == email);
  
//     res.send(foundUser);
//   });

router.get("/:email",(req,res)=>{
    console.log(req.params);
    res.send("Hello "+req.params.email)
})  


router.get("/",(req,res)=>{
    res.send(users);
});


router.post("/new/",(req,res)=>{
    users.push({"firstName":req.query.firstName,"lastName":req.query.lastName,"email":req.query.email,"DOB":req.query.DOB});
    res.send(req.query.firstName + " Has been added!")
})


module.exports=router;
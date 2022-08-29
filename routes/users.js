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


router.get("/:email",(req,res)=>{

    const email = req.params.email;
  
    let filtered_users = users.filter((user) => user.email === email);
    res.send(filtered_users);
    
})  



router.get("/",(req,res)=>{
    res.send(users);
});


router.post("/new/",(req,res)=>{
    users.push({"firstName":req.query.firstName,"lastName":req.query.lastName,"email":req.query.email,"DOB":req.query.DOB});
    res.send("The user" + (' ')+ (req.query.firstName) + " Has been added!")
});


router.put("/:email", (req, res) => {
    const email = req.params.email;

    let filtered_users = users.filter((user) => user.email === email);

    if (filtered_users.length > 0) {
        let filtered_user = filtered_users[0];
        console.log(typeof req.params);
        console.log(req.params);
        let filtered_params = JSON.parse(req.params);
        
        // console.log(req.params.keys);
        Object.keys(filtered_params).forEach(param => {
            filtered_user(param)=req.params(param);
        });
    

        users = users.filter((user) => user.email != email);
        users.add(filtered_user);
  
        res.send(`User with the email  ${email} deleted.`);
    }

    else{
        res.send("Unable to find user!");
    }

  });


router.delete("/:email", (req, res) => {
    const email = req.params.email;
  
    users = users.filter((user) => user.email != email);
  
    res.send(`User with the email  ${email} deleted.`);
  });


module.exports=router;
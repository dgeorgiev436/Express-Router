const express = require("express");
const router = express.Router();


router.use((req,res,next) => {
	if(req.query.isAdmin){
		next();
	}else{
		res.send("YOU ARE NOT AN ADMIN")
	}
})


// app.use((req,res,next) => {
// 	if(req.query.isAdmin = true){
// 		next();
// 	}else{
// 		res.send("YOU ARE NOT AN ADMIN")
// 	}
// })

router.get("/topsecret", (req,res) => {
	res.send("THE SECRET");
})

router.get("/deleteeverything", (req,res) => {
	res.send("OKAY, DELETED IT ALL");
})

module.exports = router;
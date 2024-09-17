  
const express = require("express");
const router= express.Router();

const  studentController= require("../controllers/studentcontroller");

router.post("/datasave", studentController.dataSave);
router.get("/datadisplay", studentController.dataDisplay);



module.exports=router;





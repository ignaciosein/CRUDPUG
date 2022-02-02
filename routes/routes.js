const router = require("express").Router();
const pages = require("../controllers/pages.controllers")
const user = require("../controllers/user.controllers")
 

//Rutas de inicio
router.get("/",pages.home);
router.post("/registeruser",user.registerUser);
router.put("/updateuser",user.updateUser);
router.get("/deleteuser",user.deleteUser);

 

module.exports = router;
const userController = require("../controller/user");

module.exports =(app)=>{
    app.post("/employee",userController.addDetail);
    app.get("/employee/:id",userController.getDetail);
    app.delete("/employee/:id",userController.destroy);
    app.put("/employee/:id",userController.updateDetail)
}
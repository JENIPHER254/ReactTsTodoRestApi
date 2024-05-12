const { create } = require("./todo.servicesjs");

//main module for all controllers
module.exports={

    //create todoItem controller
    createTodoItem:(req,res)=>{

        //get request body
        const body = req.body;
        //call create service
        create(body,(err,request)=>{
            if(err){
                console.log(err);
                return res.status(500).json(
                    {
                        success:0,
                        message:"Database connection error ..."
                    }
                )
            }
            return res.status(200).json({
                success:1,
                data: request
            })
        })
    }
}
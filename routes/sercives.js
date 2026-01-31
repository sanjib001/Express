import express from "express"

const router = express.Router();

//Method for CRUD operation 
// GET (get all services), we don't need anything in route or body.
// GET (get service by id), we need id in route. 
// POST(create new service), we need data of service in body.
// PUT(update existing service), we need data of service in body, we need id in route. 
// DELETE (Delete existing service), we need id in route

router.get("/", (req, res) => {
    res.send("You will receive all the services from the Database")
})

router.get("/:id", (req, res) => {
    res.send(`You will recieve the services that matches the id: ${req.params.id}`)
})

router.post("/", (req, res) => {
    const body = req.body;
    onsole.log(body);
    console.log("body");

    //Call database to create a new resource

    res.json({
        "message": "Backend will create a new resources using the data sent",
        "data": body
    })
})

router.put("/:id", (req, res) => {
    const body = req.body;
    const id = req.params.id;

    //Get the service data from database using id and update that service
    // with the body passed in the request

    res.json({
        "messege": "Backend will update the existing resources using the data and id sent",
        "data": body,
        "id": id,
    })
})

router.delete("/:id", (req, res) => {
    //Connect with database & delete the resource
    res.send(`Backend will delete the resource with id: ${req.params.id}`)
})

export default router;
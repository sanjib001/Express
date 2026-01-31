import express from "express"

const router = express.Router();

//Method for CRUD operation 
// GET (get all about us), we don't need anything in route or body.
// GET (get about us by id), we need id in route. 
// POST(create new about us), we need data of about us in body.
// PUT(update existing about us), we need data of about us in body, we need id in route. 
// DELETE (Delete existing about us), we need id in route

router.get("/", (req, res) => {
    res.send("You will receive all the about us from the Database")
})

router.get("/:id", (req, res) => {
    res.send(`You will recieve the about us that matches the id: ${req.params.id}`)
})

router.post("/", (req, res) => {
    const body = req.body;
    console.log(body);

    //Call database to create a new resource

    res.json({
        "message": "Backend will create a new resources using the data sent",
        "data": body
    })
})

router.put("/:id", (req, res) => {
    const body = req.body;
    const id = req.params.id;

    //Get the about us data from database using id and update that about us
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
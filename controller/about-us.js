import Model from "../model/about-us.js"

export const getAboutUs = async (req, res) => {
    try {
        const response = await Model.find();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({
            "message": "Unable to Fetch the about us",
            "error": error
        })
    }
}

export const getAboutUsByID = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await Model.findById(id);
        if (response) {
            return res.status(200).json(response);
        }
        res.status(404).json({ "message": "Cannot Facth: The provided id is not a valid about us id" })
    } catch (error) {
        res.status(400).json({
            "message": `Unable to Fetch the about us from id ${id}`,
            "error": error
        })
    }
}

export const createAboutUs = async (req, res) => {
    const body = req.body;

    try {
        const response = await Model.create(body);
        res.status(201).json({
            "message": "Sucessfully created a new about-us",
            "data": response
        })
    } catch (error) {
        res.status(400).json({
            "message": "Unable to create a new about-us",
            "error": error
        })
    }
}

export const updateAboutUs = async (req, res) => {
    const body = req.body;
    const id = req.params.id;

    try {
        const isAboutusAvaliable = await Model.findById(id);
        if (!isAboutusAvaliable) {
            return res.status(404).json({ "message": "Cannot Update: The provided id is not a valid about-us id" });
        }
        const response = await Model.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        res.status(200).json({
            "message": "Sucessfully updated the about-us",
            "data": response
        })
    } catch (error) {
        res.status(400).json({
            "message": "Unable to update the about-us",
            "error": error
        })
    }
}

export const deleteAboutUs = async (req, res) => {
    const id = req.params.id;
    try {
        const isAboutusAvaliable = await Model.findById(id);
        if (!isAboutusAvaliable) {
            return res.status(404).json({ "message": "Cannot delete: The provided id is not a valid about-us id" });
        }
        await Model.findByIdAndDelete(id);
        res.status(200).json(`Sucessfully deleted the about-us of id : ${id}`)
    } catch (error) {
        res.status(400).json({
            "message": "Unable to Delete the about-us",
            "error": error
        })
    }
}
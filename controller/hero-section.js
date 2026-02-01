import Model from "../model/hero-section.js"

export const getHeroSection = async (req, res) => {
    try {
        const response = await Model.find();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({
            "message": "Unable to Fetch the hero-section",
            "error": error
        })
    }
}

export const getHeroSectionByID = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await Model.findById(id);
        if (response) {
            return res.status(200).json(response);
        }
        res.status(404).json({ "message": "Cannot Facth: The provided id is not a valid hero-section id" })
    } catch (error) {
        res.status(400).json({
            "message": `Unable to Fetch the hero-section from id ${id}`,
            "error": error
        })
    }
}

export const CreateHeroSection = async (req, res) => {
    const body = req.body;

    try {
        const response = await Model.create(body);
        res.status(201).json({
            "message": "Sucessfully created a new hero-section",
            "data": response
        })
    } catch (error) {
        res.status(400).json({
            "message": "Unable to create a new hero-section",
            "error": error
        })
    }
}

export const UpdategetHeroSection = async (req, res) => {
    const body = req.body;
    const id = req.params.id;

    try {
        const isAboutusAvaliable = await Model.findById(id);
        if (!isAboutusAvaliable) {
            return res.status(404).json({ "message": "Cannot Update: The provided id is not a valid hero-section id" });
        }
        const response = await Model.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        res.status(200).json({
            "message": "Sucessfully updated the hero-section",
            "data": response
        })
    } catch (error) {
        res.status(400).json({
            "message": "Unable to update the hero-section",
            "error": error
        })
    }
}

export const DeletegetHeroSection = async (req, res) => {
    const id = req.params.id;
    try {
        const isAboutusAvaliable = await Model.findById(id);
        if (!isAboutusAvaliable) {
            return res.status(404).json({ "message": "Cannot delete: The provided id is not a valid hero-section id" });
        }
        await Model.findByIdAndDelete(id);
        res.status(200).json(`Sucessfully deleted the hero-section of id : ${id}`)
    } catch (error) {
        res.status(400).json({
            "message": "Unable to Delete the hero-section",
            "error": error
        })
    }
}
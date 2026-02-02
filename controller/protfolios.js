import Model from "../model/protfolios.js";

export const getAllProtfolios = async (req, res) => {
    try {
        const response = await Model.find()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({
            "message": "Unable to fatch the protfolios.",
            "error": error
        })
    }
}

export const getProtfolioByID = async (req, res) => {
    const id = req.params.id;

    try {
        const response = await Model.findById(id)

        if (response) {
            return res.status(200).json(response)
        }
        res.status(404).json({ "message": "Cannot Fatech: The provided id is not a valid protfolio id" })

    } catch (error) {
        res.status(400).json({
            "message": "Unable to Fatch the protfolio.",
            "error": error
        })
    }
}

export const createProtfolio = async (req, res) => {
    const body = req.body;

    try {
        const response = await Model.create(body)
        res.status(201).json({
            "message": "Sucessfully created a new protfolio",
            "data": response
        })
    } catch (error) {
        res.status(400).json({
            "message": "Unable to create new protfolio",
            "error": error
        })
    }
}

export const updateProtfolio = async (req, res) => {
    const body = req.body;
    const id = req.params.id;

    try {
        const isServiceAvailable = await Model.findById(id);
        if (!isServiceAvailable) {
            return res.status(404).json({ "message": "Cannot Update: The provided id is not a valid protfolio id" })
        }

        await Model.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        const response = await Model.findById(id);
        res.status(200).json({
            "message": "Sucessfully updated the protfolio",
            "data": response
        })
    } catch (error) {
        res.status(400).json({
            "message": "Unable to update the protfolio",
            "error": error
        })
    }
}

export const deleteProtfolio = async (req, res) => {
    const id = req.params.id;
    try {
        const isServiceAvailable = await Model.findById(id);
        if (!isServiceAvailable) {
            return res.status(404).json({ "message": "Cannot Delete: The provided id is not a valid protfolio id" })
        }

        await Model.findByIdAndDelete(id);
        res.status(200).json({ "message": `Sucessfully deleted the protfolio of id: ${id}` })
    } catch (error) {
        res.status(400).json({
            "message": "Unable to delete the protfolio",
            "error": error
        })
    }
}
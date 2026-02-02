import Model from "../model/partner.js";

export const getAllPartner = async (req, res) => {
    try {
        const response = await Model.find();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({
            "message": "Unable to Fatch the partners",
            "error": error
        })
    }
}

export const getPartnerByID = async (req, res) => {
    const id = req.params.id;

    try {
        const response = await Model.findById(id);
        if (response) {
            res.status(200).json(response);
        }
        res.status(404).json({ "message": "Cannot Facth; The provided id is not a valid id" })
    } catch (error) {
        res.status(400).json({
            "message": "Unable to Fatch the partner",
            "error": error
        })
    }
}

export const createPartner = async (req, res) => {
    const body = req.body;
    try {
        const response = await Model.create(body);
        res.status(201).json({
            "message": "Sucessfully Created a new partner",
            "data": response
        })
    } catch (error) {
        res.status(400).json({
            "message": "Unable to create a new partner",
            "error": error
        })
    }

}

export const updatePartner = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const isPartnerAvailable = await Model.findById(id);
        if (isPartnerAvailable) {
            const response = await Model.findByIdAndUpdate(id, body, { new: true, runValidators: true });
            res.status(200).json({
                "message": "Sucessfully Updated the partner",
                "data": response
            })
        }
        res.status(404).json({ "message": "Cannot update; The provided id is not a valid id" })
    } catch (error) {
        res.status(400).json({
            "message": "Unable to update the partner",
            "error": error
        })
    }

}

export const deletePartner = async (req, res) => {
    const id = req.params.id;
    try {
        const isPartnerAvailable = await Model.findById(id);
        if (isPartnerAvailable) {
            await Model.findByIdAndDelete(id);
            res.status(200).json({ "message": `Sucessfully Deleted the partner with id: ${id}` })
        }
        res.status(404).json({ "message": "Cannot delete: The provided id is not a valid id" });
    } catch (error) {
        res.status(400).json({
            "message": "Unable to delete the partner",
            "error": error
        })
    }
}


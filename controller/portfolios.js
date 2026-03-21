import Model from "../model/portfolios.js";
import logger from "../utils/logger.js";

export const getAllPortfolios = async (req, res) => {
    try {
        const response = await Model.find()
        logger.info("Sucessfully provided portfolio")
        res.status(200).json(response)
    } catch (error) {
        logger.error("Ulable to provide profolio", error)
        res.status(400).json({
            "message": "Unable to fatch the portfolios.",
            "error": error
        })
    }
}

export const getPortfolioByID = async (req, res) => {
    const id = req.params.id;

    try {
        const response = await Model.findById(id)

        if (response) {
            logger.info(`Sucessfully provided portfolio of id: ${id}`)
            return res.status(200).json(response)
        }
        res.status(404).json({ "message": "Cannot Fatech: The provided id is not a valid portfolio id" })

    } catch (error) {
        logger.error(`Ulable to provide profolio with id; ${id}`, error)
        res.status(400).json({
            "message": "Unable to Fatch the portfolio.",
            "error": error
        })
    }
}

export const createPortfolio = async (req, res) => {
    const user = req.user;
    const body = req.body;
    const image = req.file ? req.file.filename : null;
    body.image = image;

    try {
        const response = await Model.create(body)
        res.status(201).json({
            "message": "Sucessfully created a new portfolio",
            "data": response
        })
    } catch (error) {
        res.status(400).json({
            "message": "Unable to create new portfolio",
            "error": error
        })
    }
}

export const updatePortfolio = async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const image = req.file ? req.file.filename : null;
    body.image = image;

    try {
        const isServiceAvailable = await Model.findById(id);
        if (!isServiceAvailable) {
            return res.status(404).json({ "message": "Cannot Update: The provided id is not a valid portfolio id" })
        }

        await Model.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        const response = await Model.findById(id);
        res.status(200).json({
            "message": "Sucessfully updated the portfolio",
            "data": response
        })
    } catch (error) {
        res.status(400).json({
            "message": "Unable to update the portfolio",
            "error": error
        })
    }
}

export const deletePortfolio = async (req, res) => {
    const id = req.params.id;
    try {
        const isServiceAvailable = await Model.findById(id);
        if (!isServiceAvailable) {
            return res.status(404).json({ "message": "Cannot Delete: The provided id is not a valid portfolio id" })
        }

        await Model.findByIdAndDelete(id);
        res.status(200).json({ "message": `Sucessfully deleted the portfolio of id: ${id}` })
    } catch (error) {
        res.status(400).json({
            "message": "Unable to delete the portfolio",
            "error": error
        })
    }
}
import { model } from 'mongoose'
import Model from '../model/services.js'

export const getAllServices = async (req, res) => {
    try {
        const response = await Model.find()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({
            "message": "Unable to fatch the services.",
            "error": error
        })
    }
}

export const getServicesByID = async (req, res) => {
    const id = req.params.id;

    try {
        const response = await Model.findById(id)

        if (response) {
            return res.status(200).json(response)
        }
        res.status(404).json({ "message": "The provided id is not a valid service id" })

    } catch (error) {
        res.status(400).json({
            "message": "Unable to Fatch the services.",
            "error": error
        })
    }
}

export const createServices = async (req, res) => {
    const body = req.body;
    // A layer of validation if required.

    try {
        const response = await Model.create(body)
        res.status(201).json({
            "message": "Sucessfully created a new service",
            "data": response
        })
    } catch (error) {
        res.status(400).json({
            "message": "Unable to create new service",
            "error": error
        })
    }

}

export const updateService = async (req, res) => {
    const body = req.body;
    const id = req.params.id;

    try {
        const isServiceAvailable = await Model.findById(id);
        if (!isServiceAvailable) {
            return res.status(404).json({ "message": "Cannot Update: The provided id is not a valid service id" })
        }

        await Model.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        const response = await Model.findById(id);
        res.status(200).json({
            "message": "Sucessfully updated the service",
            "data": response
        })
    } catch (error) {
        res.status(400).json({
            "message": "Unable to update the service",
            "error": error
        })
    }
}

export const deleteService = async (req, res) => {
    const id = req.params.id;
    try {
        const isServiceAvailable = await Model.findById(id);
        if (!isServiceAvailable) {
            return res.status(404).json({ "message": "Cannot Delete: The provided id is not a valid service id" })
        }

        await Model.findByIdAndDelete(id);
        res.status(200).json({ "message": `Sucessfully deleted the service of id: ${id}`})
    } catch (error) {
        res.status(400).json({
            "message": "Unable to delete the service",
            "error": error
        })
    }
}


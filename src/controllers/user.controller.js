const userService = require('../services/user.service');
const mongoose = require("mongoose");

const create = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body

    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).send({ message: "Submit all fields for registration" })

    }

    const user = await userService.createService(req.body);

    if (!user) {
        return res.status(400).send({ message: "Error creating user" })
    }

    res.status(201).json({
        user: {
            id: user._id,
            name,
            username,
            email,
            password,
            avatar,
            background
        },
        message: 'User created successfully'
    })
};

const findAll = async (req, res) => {
    const users = await userService.findAllService();

    if (users.length === 0) {
        return res.status(404).
            send({
                message: `No users found`
            });
    }

    res.send(users)
}

const findById = async (req, res) => {

    const user = await userService.findByIdService(id)

    res.send(user);
}

const updateById = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name && !username && !email && !password && !avatar && !background) {
        res.status(400).send({ message: "Submit at least one field for update" });
    }

    const id = req.params.id;

    const user = await userService.findByIdService(id);

    await userService.updateService(
        id,
        name,
        username,
        email,
        password,
        avatar,
        background
    );

    res.send({ message: "User succesfully updated" });

};


module.exports = { create, findAll, findById, updateById };
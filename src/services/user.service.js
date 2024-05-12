const User = require("../models/User")
const mongoose = require("mongoose");


const createService = (body) => User.create(body);

const findAllService = async () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
) => User.findOneAndUpdate({ _id: id }, { name, username, email, password, avatar, background })

module.exports = {
    createService,
    findAllService,
    findByIdService,
    updateService
};
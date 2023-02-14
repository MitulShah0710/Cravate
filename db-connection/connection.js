const mongoose = require("mongoose");
const URL = require("./connectionString");

const connection = function () {
    return new Promise((resolve, reject) => {
        mongoose.set('strictQuery', false);
        mongoose.connect(URL, (error, result) => {
            if(error) {
                return reject(error, "error")
            }
            console.log("DB connected successfully");
            return resolve('success');
        });
    });
}

module.exports = {
    connect: connection
}
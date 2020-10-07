const orm = require("../config/orm.js");

const burger = {

    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },

    create: (cols, vals, cb) => {
        orm.create("burgers", cols, vals, (res) => {
            cb(res)
        });
    },

    update: (objColVal, condition, cb) => {
        orm.update("burgers", objColVal, condition, (res) => {
            cb(res)
        });
    },

    delete: (condition, cb) => {
        orm.delete("burgers", condition, (res) => {
            cb(res)
        });
    }

};

module.exports = burger;
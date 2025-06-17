const { model } = require("mongoose");

const { PostionSchema } = require("../schemas/PositionSchema");

const PositionModel = new model("postion", PostionSchema);

module.exports = { PositionModel };

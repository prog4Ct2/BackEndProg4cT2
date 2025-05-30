"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../../config");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let validRoles = {
    values: config_1.ROLES,
    message: '{VALUE} is not a valid role'
};
const ZonaSchema = new Schema({
    zona: {
        type: String,
        required: [true, 'zona required']
    },
});
const Zona = mongoose.model("Zona", ZonaSchema);
exports.default = Zona;
//# sourceMappingURL=zona.model.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonaController = void 0;
const _ = require("lodash");
const zona_model_1 = require("../models/zona.model");
class ZonaController {
    constructor() {
        this.crearZona = (req, res) => {
            const nuevoZona = new zona_model_1.default({
                zona: req.body.zona,
            });
            nuevoZona.save()
                .then(zonaCreado => {
                res.status(201).json({
                    ok: true,
                    zona: zonaCreado,
                    message: 'Zona cread0'
                });
            })
                .catch(error => {
            });
        };
        this.obtenerZonas = (req, res) => {
            zona_model_1.default.find()
                .then(zonas => {
                res.status(201).json({
                    ok: true,
                    zonas: zonas
                });
            })
                .catch(error => {
                return res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: error.message
                });
            });
        };
        this.actualizarZona = (req, res) => {
            const zona = _.pick(req.body, 'zona');
            zona_model_1.default.findByIdAndUpdate(req.params.id, zona)
                .then((zonaActualizado) => __awaiter(this, void 0, void 0, function* () {
                res.status(200).json({
                    ok: true,
                    zona: zonaActualizado,
                    message: 'Zona Actualizado'
                });
            }))
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: error.message
                });
            });
        };
        this.eliminarZona = (req, res) => {
            zona_model_1.default.findByIdAndDelete(req.params.id)
                .then(zonaEliminado => {
                res.status(200).json({
                    ok: true,
                    message: 'Zona Eliminado'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: error.message
                });
            });
        };
    }
}
exports.ZonaController = ZonaController;
//# sourceMappingURL=zona.controller.js.map
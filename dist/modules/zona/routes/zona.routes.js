"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonaRoutes = void 0;
const zona_controller_1 = require("../controllers/zona.controller");
class ZonaRoutes {
    constructor() {
        this.zonaController = new zona_controller_1.ZonaController();
    }
    routes(app) {
        app.route('/zona')
            .get(this.zonaController.obtenerZonas)
            .post(this.zonaController.crearZona);
        app.route('/zona/:id')
            .put(this.zonaController.actualizarZona)
            .delete(this.zonaController.eliminarZona);
    }
}
exports.ZonaRoutes = ZonaRoutes;
//# sourceMappingURL=zona.routes.js.map
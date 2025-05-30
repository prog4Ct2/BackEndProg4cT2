"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const zona_routes_1 = require("./modules/zona/routes/zona.routes");
const usuario_routes_1 = require("./modules/usuario/routes/usuario.routes");
class Routes {
    constructor() {
        this.usuarioRoutes = new usuario_routes_1.UsuarioRoutes();
        this.zonaRouters = new zona_routes_1.ZonaRoutes();
    }
    routes(app) {
        this.usuarioRoutes.routes(app);
        this.zonaRouters.routes(app);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map
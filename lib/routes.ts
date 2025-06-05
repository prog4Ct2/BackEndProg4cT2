import { ZonaRoutes } from "./modules/zona/routes/zona.routes";
import { UsuarioRoutes } from "./modules/usuario/routes/usuario.routes";

export class Routes {

    private usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
    private zonaRouters: ZonaRoutes = new ZonaRoutes();

    public routes(app): void {
        this.usuarioRoutes.routes(app);
        this.zonaRouters.routes(app);
    }
}
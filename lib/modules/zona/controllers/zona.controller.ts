import { Request, Response } from 'express';
import * as _ from 'lodash';
import Zona from '../models/zona.model';

export class ZonaController {
    crearZona = (req: Request, res: Response) => {
        const nuevoZona = new Zona(
            {
                zona: req.body.zona,
                
            }
        );
        nuevoZona.save()
        .then(zonaCreado => {
            res.status(201).json(
                {
                    ok: true,
                    zona: zonaCreado,
                    message: 'Zona cread0'
                }
            );
        })
        .catch(error => {

        });
    }

    obtenerZonas = (req: Request, res: Response) => { 
        Zona.find()
        .then(zonas => {
            res.status(201).json(
                {
                    ok: true,
                    zonas: zonas
                }
            );
        })
        .catch(error => {
            return res.status(400).json({
                ok: false,
                error: error.name,
                message: error.message
            });
        });
    }

    actualizarZona = (req: Request, res: Response) => { 
        const zona = _.pick(req.body, 'zona');        
        Zona.findByIdAndUpdate(req.params.id, zona)
        .then(async zonaActualizado => {                                   
            res.status(200).json({
                ok: true,
                zona: zonaActualizado,                    
                message: 'Zona Actualizado'
            });
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error.name,
                message: error.message
            });
        });
    }

    eliminarZona = (req: Request, res: Response) => {
        Zona.findByIdAndDelete(req.params.id)
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
        })
    }
}

import { ROLES } from '../../../config';
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

let validRoles = {    
    values: ROLES,
    message: '{VALUE} is not a valid role'
};

export interface IZona extends mongoose.Document {  
    zona: string;
 }

 const ZonaSchema = new Schema(
    {
        zona: {
            type: String,
            required: [true, 'zona required']
        },
        
    }
    
 );

const Zona = mongoose.model<IZona>("Zona", ZonaSchema);
export default Zona;
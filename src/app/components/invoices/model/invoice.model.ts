import { User } from "../../users/model/user.model";

export interface Invoice{
  idFactura: number;
  fechaAlta: Date;
  total: number;
  descripcion: string;
  cliente: User;
  setProductos:any[]
}

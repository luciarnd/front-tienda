import { Cliente } from "./cliente";

export class Pedido {
    id: number;
    productoId: number;
    productoNombre: string;
    fecha: Date;
    cantidad: number;
    clienteId: number;
    clienteNombre: string;
    clienteApellido1: string;
}
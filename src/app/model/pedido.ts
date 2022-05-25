import { Cliente } from "./cliente";

export class Pedido {
    id: number;
    fecha: Date;
    clienteId: number;
    clienteNombre: string;
    clienteApellido1: string;
}
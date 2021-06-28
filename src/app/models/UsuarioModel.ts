export class UsuarioModel {
    public IDUsuario: number;
    public email: string;
    public NombreCompleto: string;
    public Rol: string;
    public Estatus: string;
    public contrasenia: string;
    public sesionValida: number;
    public usuario = [];
}
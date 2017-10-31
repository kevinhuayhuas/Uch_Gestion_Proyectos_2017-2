<?php
namespace App\Model;

use App\Lib\Response;
use App\Lib\Auth;

class AuthModel
{
    private $db;
    private $table = 'usuario';
    private $response;
    
    public function __CONSTRUCT($db)
    {
        $this->db = $db;
        $this->response = new Response();
    }
    
    public function autenticar($correo, $password)
    {
        $usuario = $this->db->from($this->table)
                             ->where('usu_email', $correo)
                             ->where('usu_password', $password)
                             ->fetch();
        
        if (is_object($usuario)) {
            
            $token = Auth::login([
                'id' => $usuario->id,
                'nombre' => $usuario->usu_nombre
            ]);
            
            $this->response->result = $token;
            
            return $this->response->SetResponse(true);
        } else {
            return $this->response->SetResponse(false, "Credenciales no válidas");
        }
    }


}

<?php
namespace App\Model;

use App\Lib\Response;

 // Usamos la clase Response

class EvtImageModel
{
    private $db;
    private $table='evento_imagen';
    private $response;
    public function __CONSTRUCT($db)
    {
        $this->db = $db;
        $this->response = new Response(); // llamamos a la clase Response
    }

    public function listar($l, $p)
    {
        $data = $this->db->from($this->table)
                        ->limit($l)//limites
                        ->offset($p)//iniciar desde
                        ->orderBy('id DESC')
                        ->fetchAll();
        
        $total = $this->db->from($this->table)
                          ->select('COUNT(*) Total')
                          ->fetch()
                          ->Total;
        return [
            'data'  => $data,
            'total' => $total
        ];
    }

    public function obtener($id)
    {
        return $this->db->from($this->table)
        ->where('evento_id  = ?', $id)
        ->fetchAll();
    }


    public function registrar($data)
    {
        $this->db->insertInto($this->table, $data)
                 ->execute();
        return $this->response->SetResponse(true);
    }

    public function actualizar($data, $id)
    {
       // $data=["blg_titulo"=>"kevin huayhuas"];
       // $id= 1;

        $this->db->update($this->table, $data, $id)
                 ->execute();
        
        return $this->response->SetResponse(true);
    }

    public function eliminar($id)
    {
        $this->db->deleteFrom($this->table, $id)
         ->execute();
        
        return $this->response->SetResponse(true);
    }
}

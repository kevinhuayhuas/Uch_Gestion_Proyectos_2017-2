<?php
use App\Lib\Response;//llamamos a la clase Response
use App\Middleware\AuthMiddleware;



//llamamos a la clase AuthMiddleware
    
$app->group('/postimg', function () {

    $this->get('/listar/{l}/{p}', function ($request, $response, $args) {
        return $response->withHeader('Content-type', 'application/json')
                   ->write(
                     json_encode($this->model->postimg->listar($args['l'], $args['p']))
                   );
    });
    
    $this->get('/obtener/{id}', function ($request, $response, $args) {
        return $response->withHeader('Content-type', 'application/json')
                   ->write(
                     json_encode($this->model->postimg->obtener($args['id']))
                   );
    });


    $this->post('/registrar', function ($request, $response, $args) {
        return $response->withHeader('Content-type', 'application/json')->withHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
                   ->write(
                     json_encode("kevin Huayhuas")
                   );
    });

    $this->put('/actualizar/{id}', function ($request, $response, $args) {
        return $response->withHeader('Content-type', 'application/json')
                   ->write(
                     json_encode($this->model->postimg->actualizar($request->getParsedBody(), $args['id']))
                   );
    });
    $this->delete('/eliminar/{id}', function ($request, $response, $args) {
         return $response->withHeader('Content-type', 'application/json')
                   ->write(
                     json_encode($this->model->postimg->eliminar($args['id']))
                   );
    });
});

<?php
use App\Lib\Response;//llamamos a la clase Response
use App\Middleware\AuthMiddleware;

//llamamos a la clase AuthMiddleware 
$app->group('/evento', function () {

    $this->get('/listar/{l}/{p}', function ($request, $response, $args) {
        return $response->withHeader('Content-type', 'application/json')
                   ->write(
                     json_encode($this->model->evento->listar($args['l'], $args['p']))
                   );
    });
    
    $this->get('/obtener/{id}', function ($request, $response, $args) {
        return $response->withHeader('Content-type', 'application/json')
                   ->write(
                     json_encode($this->model->evento->obtener($args['id']))
                   );
    });

    $this->post('/registrar', function ($request, $response, $args) {
        return $response->withHeader('Content-type', 'application/json')
                   ->write(
                     json_encode($this->model->evento->registrar($request->getParsedBody()))
                   );
    });

    $this->put('/actualizar/{id}', function ($request, $response, $args) {
        return $response->withHeader('Content-type', 'application/json')
                   ->write(
                     json_encode($this->model->evento->actualizar($request->getParsedBody(), $args['id']))
                   );
    });
    $this->delete('/eliminar/{id}', function ($request, $response, $args) {
         return $response->withHeader('Content-type', 'application/json')
                   ->write(
                     json_encode($this->model->evento->eliminar($args['id']))
                   );
    });
});
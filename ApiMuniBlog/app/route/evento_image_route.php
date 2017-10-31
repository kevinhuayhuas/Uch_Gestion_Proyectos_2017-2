<?php
use App\Lib\Response;//llamamos a la clase Response
use App\Middleware\AuthMiddleware;



//llamamos a la clase AuthMiddleware
    
$app->group('/evtimg', function () {

    $this->get('/listar/{l}/{p}', function ($request, $response, $args) {
        return $response->withHeader('Content-type', 'application/json')
                   ->write(
                     json_encode($this->model->evtimg->listar($args['l'], $args['p']))
                   );
    });
    
    $this->get('/obtener/{id}', function ($request, $response, $args) {
        return $response->withHeader('Content-type', 'application/json')
                   ->write(
                     json_encode($this->model->evtimg->obtener($args['id']))
                   );
    });

    $this->post('/registrar', function ($request, $response, $args) {
        return $response->withHeader('Content-type', 'application/json')
                   ->write(
                     json_encode($this->model->evtimg->registrar($request->getParsedBody()))
                   );
    });

    $this->put('/actualizar/{id}', function ($request, $response, $args) {
        return $response->withHeader('Content-type', 'application/json')
                   ->write(
                     json_encode($this->model->evtimg->actualizar($request->getParsedBody(), $args['id']))
                   );
    });
    $this->delete('/eliminar/{id}', function ($request, $response, $args) {
         return $response->withHeader('Content-type', 'application/json')
                   ->write(
                     json_encode($this->model->evtimg->eliminar($args['id']))
                   );
    });
});

<?php
use App\Lib\Auth;
use App\Lib\Response;
use App\Middleware\AuthMiddleware;





$app->group('/auth', function () {
    $this->post('/autenticar', function ($request, $response, $args) {
        $parametros = $request->getParsedBody();        
        
        return $response->withHeader('Content-type', 'application/json')
                   ->write(
                     json_encode($this->model->auth->autenticar($parametros['usu_email'], $parametros['usu_password']))
                   );
    });
});
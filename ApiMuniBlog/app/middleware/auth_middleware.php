<?php
namespace App\Middleware;

use Exception;
use App\Lib\Auth;
use App\Model\AuthModel;

class AuthMiddleware
{

    private $app = null;
    
    public function __construct($app)
    {
        $this->app = $app;
    }
    
    public function __invoke($request, $response, $next)
    {

        $c = $this->app->getContainer();
        //$app_token_name = $c->settings['Authorization'];
        $token = $request->getHeader('Authorization');//Leemos la cabecera de la peticion http
        try {
            //desemcriptando
            //
            if (isset($token[0])) {
                $token = $token[0];
                $key="huayhuas";
                $decrypted = rtrim(mcrypt_decrypt(MCRYPT_RIJNDAEL_256, md5($key), base64_decode($token), MCRYPT_MODE_CBC, md5(md5($key))), "\0"); 
                $this->$appp->model->auth->autenticar("noemi.huayhuas@gmail.com","hola2017");

            }else{
                return $response->withStatus(400)
                    ->write("No Autorizado");
            } 
        } catch (Exception $e) {
            return $response->withStatus(401)
                            ->write("No Autorizado".$app);
        }

        return $next($request, $response);
    }
}

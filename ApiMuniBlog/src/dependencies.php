<?php
// DIC configuration

$container = $app->getContainer();

// view renderer
$container['renderer'] = function ($c) {
    $settings = $c->get('settings')['renderer'];
    return new Slim\Views\PhpRenderer($settings['template_path']);
};

// monolog
$container['logger'] = function ($c) {
    $settings = $c->get('settings')['logger'];
    $logger = new Monolog\Logger($settings['name']);
    $logger->pushProcessor(new Monolog\Processor\UidProcessor());
    $logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], $settings['level']));
    return $logger;
};

// Database
$container['db'] = function ($c) {
    $connectionString = $c->get('settings')['connectionString'];
    
    $pdo = new PDO($connectionString['dns'], $connectionString['user'], $connectionString['pass']);

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

    return new FluentPDO($pdo);
    //composer require lichtner/fluentpdo
};

// Models
$container['model'] = function ($c) {
    return (object)[
        'blog' => new App\Model\BlogModel($c->db),
        'auth' => new App\Model\AuthModel($c->db),
        'post' => new App\Model\BlogPostModel($c->db),
        'user' => new App\Model\UsuarioModel($c->db),
        'state' => new App\Model\EstadoModel($c->db),
        'evento' => new App\Model\EventoModel($c->db),
        'evtimg' => new App\Model\EvtImageModel($c->db),
        'postimg' =>new App\Model\PostImageModel($c->db),
    ];
};

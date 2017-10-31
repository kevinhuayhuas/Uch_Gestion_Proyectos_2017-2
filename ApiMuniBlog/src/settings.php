<?php
return [
    'settings' => [
        'displayErrorDetails' => true, // set to false in production
        'addContentLengthHeader' => false, // Allow the web server to send the content-length header

        // Renderer settings
        'renderer' => [
            'template_path' => __DIR__ . '/../templates/',
        ],

        // Monolog settings
        'logger' => [
            'name' => 'slim-app',
            'path' => __DIR__ . '/../logs/app.log',
            'level' => \Monolog\Logger::DEBUG,
        ],
        // Configuración de mi APP
        'app_token_name' => 'APP-TOKEN',
        'connectionString' =>[
            'dns'  => 'mysql:host=localhost;dbname=sonovin_mdc;charset=utf8',
            'user' => 'sonovin',
            'pass' => 'hackvar4592'
        ]
    ],
];

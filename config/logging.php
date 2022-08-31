<?php

use Monolog\Handler\StreamHandler;
use Monolog\Handler\SyslogUdpHandler;

return [

    /*
    |--------------------------------------------------------------------------
    | Default Log Channel
    |--------------------------------------------------------------------------
    |
    | This option defines the default log channel that gets used when writing
    | messages to the logs. The name specified in this option should match
    | one of the channels defined in the "channels" configuration array.
    |
    */

    'default' => env('LOG_CHANNEL', 'stack'),

    /*
    |--------------------------------------------------------------------------
    | Log Channels
    |--------------------------------------------------------------------------
    |
    | Here you may configure the log channels for your application. Out of
    | the box, Laravel uses the Monolog PHP logging library. This gives
    | you a variety of powerful log handlers / formatters to utilize.
    |
    | Available Drivers: "single", "daily", "slack", "syslog",
    |                    "errorlog", "monolog",
    |                    "custom", "stack"
    |
    */

    'channels' => [
        'stack' => [
            'driver' => 'stack',
            'channels' => ['daily'],
            'ignore_exceptions' => false,
        ],
        'user_logins' => [
            'driver' => 'stack',
            'channels' => ['user_logins'],
            'ignore_exceptions' => false,
        ],
        'user_operations' => [
            'driver' => 'stack',
            'channels' => ['user_operations'],
            'ignore_exceptions' => false,
        ],
        'user_reports' => [
            'driver' => 'stack',
            'channels' => ['user_reports'],
            'ignore_exceptions' => false,
        ],
        'user_assistances' => [
            'driver' => 'stack',
            'channels' => ['user_assistances'],
            'ignore_exceptions' => false,
        ],
        'user_groups' => [
            'driver' => 'stack',
            'channels' => ['user_groups'],
            'ignore_exceptions' => false,
        ],
        'sms_logs' => [
            'driver' => 'stack',
            'channels' => ['sms_logs'],
            'ignore_exceptions' => false,
        ],
        'new_members' => [
            'driver' => 'stack',
            'channels' => ['new_members'],
            'ignore_exceptions' => false,
        ],

        'single' => [
            'driver' => 'single',
            'path' => storage_path('logs/laravel.log'),
            'level' => 'debug',
        ],
        'user_logins' => [
            'driver' => 'daily',
            'path' => storage_path('logs/user_logins.log'),
            'level' => 'debug',
            'days' => 30,
        ],
        'user_operations' => [
            'driver' => 'daily',
            'path' => storage_path('logs/user_operations.log'),
            'level' => 'debug',
            'days' => 30,
        ],
        'user_reports' => [
            'driver' => 'daily',
            'path' => storage_path('logs/user_reports.log'),
            'level' => 'debug',
            'days' => 30,
        ],
        'user_assistances' => [
            'driver' => 'daily',
            'path' => storage_path('logs/user_assistances.log'),
            'level' => 'debug',
            'days' => 30,
        ],
        'user_groups' => [
            'driver' => 'daily',
            'path' => storage_path('logs/user_groups.log'),
            'level' => 'debug',
            'days' => 30,
        ],
        'sms_logs' => [
            'driver' => 'daily',
            'path' => storage_path('logs/sms_logs.log'),
            'level' => 'debug',
            'days' => 30,
        ],
        'new_members' => [
            'driver' => 'daily',
            'path' => storage_path('logs/new_members.log'),
            'level' => 'debug',
            'days' => 30,
        ],

        'daily' => [
            'driver' => 'daily',
            'path' => storage_path('logs/laravel.log'),
            'level' => 'debug',
            'days' => 14,
        ],

        'slack' => [
            'driver' => 'slack',
            'url' => env('LOG_SLACK_WEBHOOK_URL'),
            'username' => 'Laravel Log',
            'emoji' => ':boom:',
            'level' => 'critical',
        ],

        'papertrail' => [
            'driver' => 'monolog',
            'level' => 'debug',
            'handler' => SyslogUdpHandler::class,
            'handler_with' => [
                'host' => env('PAPERTRAIL_URL'),
                'port' => env('PAPERTRAIL_PORT'),
            ],
        ],

        'stderr' => [
            'driver' => 'monolog',
            'handler' => StreamHandler::class,
            'formatter' => env('LOG_STDERR_FORMATTER'),
            'with' => [
                'stream' => 'php://stderr',
            ],
        ],

        'syslog' => [
            'driver' => 'syslog',
            'level' => 'debug',
        ],

        'errorlog' => [
            'driver' => 'errorlog',
            'level' => 'debug',
        ],
    ],

];

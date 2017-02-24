<?php
/**
 * Index file for frontend.
 * Created by PhpStorm.
 * User: max
 * Date: 1/3/17
 * Time: 11:57 AM
 */

// get application and environment
$sApplication = getenv('APPLICATION_ENV');
$sEnvironment = empty($sApplication) ? 'prod' : $sApplication;

// set YII constants
defined('YII_DEBUG') or ('dev' === $sEnvironment ? define('YII_DEBUG', true) : define('YII_DEBUG', false));
defined('YII_ENV') or define('YII_ENV', $sEnvironment);

require(__DIR__ . '/../../admin/vendor/autoload.php');
require(__DIR__ . '/../../admin/vendor/yiisoft/yii2/Yii.php');
require(__DIR__ . '/../../admin/common/config/bootstrap.php');
require(__DIR__ . '/../config/bootstrap.php');

$aConfig = yii\helpers\ArrayHelper::merge(
	require(__DIR__ . '/../../admin/common/config/main.php'),
	require(__DIR__ . '/../config/main.php'),
	is_file(__DIR__ . '/../../admin/common/config/main-local.php') ? require(__DIR__ . '/../../admin/common/config/main-local.php') : [],
	is_file(__DIR__ . '/../config/main-local.php') ? require(__DIR__ . '/../config/main-local.php') : []
);

$application = new yii\web\Application($aConfig);
$application->run();
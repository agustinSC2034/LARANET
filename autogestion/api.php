<?php
declare(strict_types=1);
// Environment paths take priority. Conventional sibling of public_html:
// <account>/mi-laranet-private/{config.php,runtime}.
$privateRoot=dirname(__DIR__,2).'/mi-laranet-private';
if (!getenv('MI_LARANET_CONFIG')) putenv('MI_LARANET_CONFIG='.$privateRoot.'/config.php');
if (!getenv('MI_LARANET_RUNTIME')) putenv('MI_LARANET_RUNTIME='.$privateRoot.'/runtime');
require __DIR__.'/server/router.php';

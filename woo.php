<?php


require __DIR__ . '/vendor/autoload.php';

use Automattic\WooCommerce\Client;

$woocommerce = new Client(
    'https://www.la-food-box.fr/wordpress/index.php', 
    'ck_74c62ac0591bcbcedf728c04007163ddb78f79d0', 
    'cs_de05d0a308d98f96ca8190ba5b6ae05f6eb16a79',
    [
        'version' => 'wc/v3',
    ]
);


$products = $woocommerce->get('products', ['per_page' => 100]);

$myProducts = json_encode($products);
echo $myProducts;


?>
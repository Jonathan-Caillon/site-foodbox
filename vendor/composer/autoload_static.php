<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit48d6fcf7091b1acdeb0d122dfe9b0ef3
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'Automattic\\WooCommerce\\' => 23,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Automattic\\WooCommerce\\' => 
        array (
            0 => __DIR__ . '/..' . '/automattic/woocommerce/src/WooCommerce',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit48d6fcf7091b1acdeb0d122dfe9b0ef3::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit48d6fcf7091b1acdeb0d122dfe9b0ef3::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit48d6fcf7091b1acdeb0d122dfe9b0ef3::$classMap;

        }, null, ClassLoader::class);
    }
}

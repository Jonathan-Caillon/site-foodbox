<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'u233458275_wordpress' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'u233458275_nora' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'Nora01500' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '6D} #!QsOb 5(O^ ok624I-7aaETr?F|iH1{-v*jVis(8?~8Zb?1I@X=QXcI>,?6' );
define( 'SECURE_AUTH_KEY',  'd;4ms~^6eoE!Y>eX^0t8l&^8o#be[2)h!Q#rCUp49?{n`?MpJ0|hes@zK]65PD`w' );
define( 'LOGGED_IN_KEY',    '-{@C*&qw,vPH~MsQ#F$Veh(%]OM& 4mZi!>w<BY62iTF=OZ.JuF]Lmd,JYdNolLY' );
define( 'NONCE_KEY',        '2Wiw?:AUMRK_gfWC/[86hv*xx^sM %.VIvD);_Ej J9H0SZ>qIw`tY8:?hB{NU3$' );
define( 'AUTH_SALT',        'Swn]  ^(-FyR N7wUK [J/}@D#G`)!#$mpq]R**Q/(Wk,GsZuW_K WNjdeDR(vY+' );
define( 'SECURE_AUTH_SALT', 'Fes)bj-|.~LJj~4lg-8zR-=.(HvNJ}v=r;~fL:A%dVkIbMjeq5`~ W;#^T9{(Kkw' );
define( 'LOGGED_IN_SALT',   'qeoT?6A(lNWNHk!#e8 ba^qjXr@Qv`}.+An1zqSh2 ,gcZ<85}$(vwN BITAT~#W' );
define( 'NONCE_SALT',       'Q4wJFO)r>RaiDTD VSCB <3j{Un/-%ToKd[k=&l#[hZ=eyNn:wi9qNwu+6hBk!n0' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'fb_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );

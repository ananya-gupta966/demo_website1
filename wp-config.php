<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'demo_website' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '9ai5g34MXgU=#b~Zq^rj5a))|h3-]jsGjM8q+a6w@)-j8}K3$4,^1$Rk`,[,YA/P' );
define( 'SECURE_AUTH_KEY',  ',aGUdZc3snByU5(y +,RT.zP7?l(>Q~J0?h6F7i8lo370Bp`$u<VchEo+,7lBWod' );
define( 'LOGGED_IN_KEY',    'l>4Kbk2xH1t(Ub!eg4/O-]3dqmbJ|,3)I0+B1Pd./Tk)t=-Yl1%nM/UX0=JBV8n<' );
define( 'NONCE_KEY',        'zsK3Ct/UHe<RJI%r%q*w0^Pfqq`<`~E87JD=:Ih`o9o;jW.N{jE<PKsprr^7,M)u' );
define( 'AUTH_SALT',        ';W?k,a7WeQ~tAVD>:*pU2Z<UaB^F:>WTkiwS18ovvGs_LT`]1A]*x73ne.:uoP`8' );
define( 'SECURE_AUTH_SALT', 'L#*mpZ{}2tJwJI<7M?.?lXzz0!g9-uRfm 0qw~0TFpiIx.U[BtVfvI=GfF(O3Q%8' );
define( 'LOGGED_IN_SALT',   '-<:2-k(`@id<x(T}MBPhLs)2qx&:{g]v?&jiD5q#q]f2K _i@#qB_ZqK?ak22D@m' );
define( 'NONCE_SALT',       'Q~-^V#;I{S3VkgPA9+|z~(;ky+}P[-C>J{9US%n]C)R#*YCwsp${:G1Z@r!pZF81' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

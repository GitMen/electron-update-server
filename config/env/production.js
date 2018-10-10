/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the production        *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  models: {
    connection: 'postgresql'
  },

  /***************************************************************************
   * Set the port in the production environment to 80                        *
   ***************************************************************************/

  port: 5014,

  /***************************************************************************
   * Set the log level in production environment to "silent"                 *
   ***************************************************************************/

  // log: {
  //   level: "silent"
  // }
  appUrl: 'http://192.168.255.56:1337',
  auth: {
    // Provide a set of credentials that can be used to access the admin interface.
    static: {
      username: 'icourt',
      password: 'icourt123456'
    }
  },
  jwt: {
    // Recommended: 63 random alpha-numeric characters for secret
    // Generate using: https://www.grc.com/passwords.htm
    token_secret: 'icourt_app_update_2018'
  },
  files: {
    // Folder must exist and user running the server must have adequate perms
    dirname: '/root/electron/app',
    // Maximum allowed file size in bytes
    // Defaults to 500MB
    // maxBytes: 524288000
  }
};

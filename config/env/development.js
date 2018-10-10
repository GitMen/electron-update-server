/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/
  appUrl: 'http://192.168.255.56:1337',
  models: {
    connection: 'postgresql'
  },
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

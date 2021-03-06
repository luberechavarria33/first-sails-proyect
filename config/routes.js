/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': "UserController.showHome",

  '/signUp': {
    view: 'pages/signUp'
  },

  '/loginUser':{
    view: 'pages/loginUser'
  },

  
  'POST /signUp': "UserController.createUser",
  'POST /login': "UserController.loginUser",

  // '/': {
  //   view: 'pages/signUp'
  // },


  //=====================> Auth ===============>
 '/userAdmin': "UserController.showUsersAdmin",

 'POST /userAdminDelete/:IdUser': "UserController.deleteUserAdmin",

 '/userAdminEdit/:IdUser': "UserController.showUserAdminEdit",

 'POST /userAdminEdit/:IdUser': "UserController.userAdminEdit",

  

  '/logout': "UserController.logOut",
 

  '/products': "ProductController.loadProducts",

  '/product/:productId/comments': "ProductController.showProductComment",

  'POST /product/:productId/comments': "ProductController.addUserComment",

  '/product/new': "ProductController.showNewProduct",

  'POST /product/new': "ProductController.addNewProduct",

  '/product/delete': "ProductController.showProductsToDelete",
   
  'POST /product/delete/:IdProduct': "ProductController.deleteProduct",

  '/product/:productId/comments/delete': "ProductController.ShowDeleteProductComments",

  'POST /product/comment/:IdComment/delete': "ProductController.deleteComment",

  'POST /product/:IdComment/comments/edit/:newComment': "ProductController.editComment",

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝



  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};

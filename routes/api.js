var express = require('express');
var router = express.Router(); 
var AdminController    =  require('../controllers/admin/AdminController');   
var UsersController    =  require('../controllers/admin/UsersController');   
var PostsController    =  require('../controllers/admin/PostsController'); 
var CommentsController    =  require('../controllers/admin/CommentsController'); 

/** Routes for admin  */     
//router.get('/login', AdminController.login);     
router.post('/admin/login', AdminController.login);     
router.get('/admin/login', AdminController.login);     
router.get('/admin/Dashboard', requiredAuthentication, AdminController.dashboard);  
router.get('/admin/logout', AdminController.logout);         
 
/** Routes for users module  */ 
 router.get('/admin/Users/list',requiredAuthentication,  UsersController.list);     
 router.get('/admin/Users/edit/:id', requiredAuthentication, UsersController.edit);     
 router.post('/admin/Users/edit/:id',requiredAuthentication,  UsersController.edit); 
 router.post('/admin/Users/add',requiredAuthentication, UsersController.add); 
 router.get('/admin/Users/add', requiredAuthentication, UsersController.add); 
 router.get('/admin/Users/delete/:id', requiredAuthentication, UsersController.deleteRecord);

/** Routes for posts module  */ 
router.get('/admin/Posts/list',requiredAuthentication,  PostsController.list);     
router.get('/admin/Posts/edit/:id', requiredAuthentication, PostsController.edit);     
router.post('/admin/Posts/edit/:id',requiredAuthentication,  PostsController.edit); 
router.post('/admin/Posts/add',requiredAuthentication, PostsController.add); 
router.get('/admin/Posts/add', requiredAuthentication, PostsController.add); 
router.get('/admin/Posts/delete/:id', requiredAuthentication, PostsController.deleteRecord);

/** Routes for comments module  */ 
router.get('/admin/Comments/list',requiredAuthentication,  CommentsController.list);     
router.get('/admin/Comments/edit/:id', requiredAuthentication, CommentsController.edit);     
router.post('/admin/Comments/edit/:id',requiredAuthentication,  CommentsController.edit); 
router.post('/admin/Comments/add',requiredAuthentication, CommentsController.add); 
router.get('/admin/Comments/add', requiredAuthentication, CommentsController.add); 
router.get('/admin/Comments/delete/:id', requiredAuthentication, CommentsController.deleteRecord);


module.exports = router;        
 

function requiredAuthentication(req, res, next) { 
    if(req.session){
        LoginUser = req.session.LoginUser; 
        if(LoginUser){    
            next();   
        }else{
            res.redirect(nodeAdminUrl+'/login');       
        } 
    }else{
        res.redirect(nodeAdminUrl+'/login');       
    }
}
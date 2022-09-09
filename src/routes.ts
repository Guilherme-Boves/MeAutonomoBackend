import { Router, Request, Response } from 'express'
import { DashboardClienteController } from './controllers/dashboard/DashboardClienteContoller';
import { DashboardProfissionalController } from './controllers/dashboard/DashboardProfissionalController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { CreateUserClienteController } from './controllers/user/CreateUserClienteController';
import { CreateUserProfissionalController } from './controllers/user/CreateUserProfissionalController';

import { isAuthenticated } from './middlewares/isAuthenticated';

import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCategoriaController } from './controllers/categoria/CreateCategoriaController';

import { isRoleAdmin } from './middlewares/userPermissions/adminPermission';
import { isRoleCliente } from './middlewares/userPermissions/clientePermission';
import { isRoleProfissional } from './middlewares/userPermissions/profissionalPermission';
import { isRoleClienteProfissional } from './middlewares/userPermissions/clienteProfissionalPermission';

const router = Router();

// -- ROTAS USERS --
// Cadastrando clientes
router.post('/users/cliente', new CreateUserClienteController().handle )
// Cadastrando Profissionais autonomos
router.post('/users/profissional', new CreateUserProfissionalController().handle)
//Login de usuários
router.post('/session', new AuthUserController().handle)
//Detalhes do Usuário
router.get('/userinfo', isAuthenticated, /*isRoleClienteProfissional,*/ new DetailUserController().handle);
//Menu Principal de cada Usuário
router.get('/dashboard/cliente', isAuthenticated, isRoleCliente, new DashboardClienteController().handle )
router.get('/dashboard/profissional', isAuthenticated, isRoleProfissional, new DashboardProfissionalController().handle )
//Cadastrando Categorias
router.post('/categoria', isAuthenticated, isRoleAdmin, new CreateCategoriaController().handle)
export { router };
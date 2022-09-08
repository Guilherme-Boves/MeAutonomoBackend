import { Router, Request, Response } from 'express'
import { DashboardClienteController } from './controllers/dashboard/DashboardClienteContoller';
import { DashboardProfissionalController } from './controllers/dashboard/DashboardProfissionalController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { CreateUserClienteController } from './controllers/user/CreateUserClienteController';
import { CreateUserProfissionalController } from './controllers/user/CreateUserProfissionalController';

import { isAuthenticated } from './middlewares/isAuthenticated';
import { isRoleUserAdmin } from './middlewares/userAdminPermission'

import { DetailUserController } from './controllers/user/DetailUserController';

const router = Router();

// -- ROTAS USERS --
// Cadastrando clientes
router.post('/users/cliente', new CreateUserClienteController().handle )
// Cadastrando Profissionais autonomos
router.post('/users/profissional', new CreateUserProfissionalController().handle)
//Login de usuários
router.post('/session', new AuthUserController().handle)
//Detalhes do Usuário
router.get('/userinfo', isAuthenticated, new DetailUserController().handle);
//Menu Principal de cada Usuário
router.get('/dashboard/cliente', isAuthenticated, isRoleUserAdmin(['cliente', 'admin']), new DashboardClienteController().handle )
router.get('/dashboard/profissional', isAuthenticated, isRoleUserAdmin(['profissional', 'admin']), new DashboardProfissionalController().handle )

export { router };
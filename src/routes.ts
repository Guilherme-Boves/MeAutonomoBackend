import { Router, Request, Response } from 'express'
import multer from 'multer';

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

import uploadConfig from './config/multer'
import { ListCategoriaController } from './controllers/categoria/ListCategoriaController';
import { CreateTipoServicoController } from './controllers/tiposervico/CreateTipoServicoController';
import { ListTipoServicoController } from './controllers/tiposervico/ListTipoServicoController';
import { CreateServicoPrestadosController } from './controllers/servicosprestados/CreateServicoPrestadosController'
import { CreateAgendaController } from './controllers/agenda/CreateAgendaController';
import { CreatePublicarServicoController } from './controllers/publicarservico/CreatePublicarServicoController';
import { CreateContratoController } from './controllers/contrato/CreateContratoController';
import { CreateAvaliacaoController } from './controllers/avaliacao/CreateAvaliacaoController';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"))

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

// -- ROTAS CATEGORIA --
// Listando todas categorias
router.get('/categoria', isAuthenticated, new ListCategoriaController().handle)
// Cadastrando categorias
router.post('/categoria', isAuthenticated, isRoleAdmin, upload.single('file'), new CreateCategoriaController().handle)

// -- ROTAS TIPO DE SERVIÇO --
// Cadastrando tipo de serviços
router.post('/tiposervico', isAuthenticated, isRoleAdmin, upload.single('file'), new CreateTipoServicoController().handle)
// Listando todos os tipos de serviços que pertencem a X categoria
router.get('/tiposervico', isAuthenticated, new ListTipoServicoController().handle)

// -- ROTAS SERVIÇOS PRESTADOS PELO PROFISSIONAL -- 
// Cadastrando serviços prestados pelo profissional
router.post('/servicosprestados', isAuthenticated, isRoleProfissional, new CreateServicoPrestadosController().handle)

// -- ROTAS AGENDA -- 
// Cadastrando uma nova agenda
router.post('/agenda', isAuthenticated, isRoleProfissional, new CreateAgendaController().handle)

// -- ROTAS PUBLICAR SERVIÇO --
// Publicando um novo serviço
router.post('/publicarservico', isAuthenticated, isRoleProfissional, new CreatePublicarServicoController().handle)

// -- ROTAS CONTRATOS -- 
// Realizando um novo contrato
router.post('/contrato', isAuthenticated, new CreateContratoController().handle)

// -- ROTAS AVALIAÇÕES
// Realizando uma avaliação de um contrato
router.post('/avaliacao', isAuthenticated, new CreateAvaliacaoController().handle)

export { router };
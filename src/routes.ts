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
import { ListPerfisController } from './controllers/perfis/ListPerfisController';
import { ListPerfilController } from './controllers/perfil/ListPerfilController';
import { AddItemController } from './controllers/publicarservico/AddItemController';
import { DeleteItemController } from './controllers/publicarservico/DeleteItemController';
import { DeletePublicarServicoController } from './controllers/publicarservico/DeletePublicarServicoController';
import { DeleteServicoPrestadoController } from './controllers/servicosprestados/DeleteServicoPrestadoController';
import { DeleteAgendaController } from './controllers/agenda/DeleteAgendaController';
import { UpdateItemController } from './controllers/publicarservico/UpdateItemController';
import { PublicarServicoController } from './controllers/publicarservico/PublicarServicoController';
import { GetPublicacoesController } from './controllers/publicarservico/GetPublicacoesController';
import { UploadingImagesController } from './controllers/user/UploadingImagesController';
import { UpdateUserInfoProfissionalController } from './controllers/user/UpdateUserInfoProfissionalController';
import { UpdateUserInfoClienteController } from './controllers/user/UpdateUserInfoClienteController';
import { AddServicoItemController } from './controllers/contrato/AddServicoItemController';
import { CreateItemContratoController } from './controllers/contrato/CreateItemContratoController';
import { AddAgendaItemController } from './controllers/contrato/AddAgendaItemController';
import { ListServicosPendentesController } from './controllers/servicos/ListServicosPendentesController';
import { ListServicosFinalizadosController } from './controllers/servicos/ListServicosFinalizadosController';
import { FinalizarServicoController } from './controllers/servicos/FinalizarServicoController';
import { DeleteContratoController } from './controllers/contrato/DeleteContratoController';
import { ListCategoriaByIdController } from './controllers/categoria/ListCategoriaByIdController';
import { EditCategoriaController } from './controllers/categoria/EditCategoriaController';
import { DeleteCategoriaController } from './controllers/categoria/DeleteCategoriaController';
import { DeleteTipoServicoController } from './controllers/tiposervico/DeleteTipoServicoController';
import { ListTipoServicoByIdController } from './controllers/tiposervico/ListTipoServicoByIdController';
import { EditTipoServicoController } from './controllers/tiposervico/EditTipoServicoController';
import { GetPublicacaoByIdController } from './controllers/publicarservico/GetPublicacaoByIdController';
import { DeletePublicacaoAtivaController } from './controllers/publicarservico/DeletePublicacaoAtivaController';
import { CancelarServicoController } from './controllers/servicos/CancelarServicoController';
import { RealizaAvaliacaoController } from './controllers/avaliacao/RealizaAvaliacaoController';
import { GetAvaliacoesController } from './controllers/avaliacao/GetAvaliacoesController';
import { DeleteAvaliacaoController } from './controllers/avaliacao/DeleteAvaliacaoController';
import { GetAvaliacoesByUserIdController } from './controllers/avaliacao/GetAvaliacoesByUserIdController';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"))

// -- ROTAS USERS --
// Cadastrando clientes
router.post('/users/cliente', new CreateUserClienteController().handle )
// Cadastrando Profissionais autonomos
router.post('/users/profissional', new CreateUserProfissionalController().handle)
//Login de usu??rios
router.post('/session', new AuthUserController().handle)
//Detalhes do Usu??rio
router.get('/userinfo', isAuthenticated, /*isRoleClienteProfissional,*/ new DetailUserController().handle);
//Menu Principal de cada Usu??rio
router.get('/dashboard/cliente', isAuthenticated, isRoleCliente, new DashboardClienteController().handle )
router.get('/dashboard/profissional', isAuthenticated, isRoleProfissional, new DashboardProfissionalController().handle)
//Atualizando foto der perfil do usu??rio
router.put('/user/upload/imagem', isAuthenticated, upload.single('file'), new UploadingImagesController().handle)
//Atualizando dados do cadastro do usu??rio (Nome de usu??rio, Telefone, Endere??o, Descri????o - Sobre Mim)
router.put('/userinfo/update/profissional', isAuthenticated, isRoleProfissional, new UpdateUserInfoProfissionalController().handle);
router.put('/userinfo/update/cliente', isAuthenticated, isRoleCliente, new UpdateUserInfoClienteController().handle);

// -- ROTAS CATEGORIA --
// Listando todas categorias
router.get('/categorias', isAuthenticated, new ListCategoriaController().handle)
// Listando a categoria pelo ID
router.get('/categoria/', isAuthenticated, isRoleAdmin, new ListCategoriaByIdController().handle)
// Cadastrando categorias
router.post('/categoria', isAuthenticated, isRoleAdmin, upload.single('file'), new CreateCategoriaController().handle)
// Editando categoria
router.post('/categoria/edit', isAuthenticated, isRoleAdmin, upload.single('file'), new EditCategoriaController().handle)
// Deletando uma categoria
router.delete('/categoria/delete', isAuthenticated, isRoleAdmin, new DeleteCategoriaController().handle)

// -- ROTAS TIPO DE SERVI??O --
// Cadastrando tipo de servi??os
router.post('/tiposervico', isAuthenticated, isRoleAdmin, upload.single('file'), new CreateTipoServicoController().handle)
// Listando todos os tipos de servi??os que pertencem a X categoria
router.get('/tiposervico', isAuthenticated, new ListTipoServicoController().handle)
// Deletando um tipo de servi??o
router.delete('/tiposervico/delete', isAuthenticated, isRoleAdmin, new DeleteTipoServicoController().handle)
// Listando o tipo de servi??o pelo ID
router.get('/tiposervico/id', isAuthenticated, isRoleAdmin, new ListTipoServicoByIdController().handle)
// Editando Tipo de Servico
router.post('/tiposervico/edit', isAuthenticated, isRoleAdmin, upload.single('file'), new EditTipoServicoController().handle)

// -- ROTAS SERVI??OS PRESTADOS PELO PROFISSIONAL -- 
// Cadastrando servi??os prestados pelo profissional
router.post('/servicosprestados', isAuthenticated, isRoleProfissional, new CreateServicoPrestadosController().handle)
// Excluindo um servi??o prestado cadastrado pelo profissional
router.delete('/servicosprestados/delete', isAuthenticated, isRoleProfissional, new DeleteServicoPrestadoController().handle)

// -- ROTAS AGENDA -- 
// Cadastrando uma nova agenda
router.post('/agenda', isAuthenticated, isRoleProfissional, new CreateAgendaController().handle)
// Excluindo uma agenda cadastrada pelo profissional
router.delete('/agenda/delete', isAuthenticated, isRoleProfissional, new DeleteAgendaController().handle)

// -- ROTAS PUBLICAR SERVI??O --
// Criando uma nova publica????o
router.post('/publicarservico', isAuthenticated, isRoleProfissional, new CreatePublicarServicoController().handle)
// Excluindo uma publica????o
router.delete('/publicarservico', isAuthenticated, isRoleProfissional, new DeletePublicarServicoController().handle)
// Cadastrando  descricao, publicacao_id e tipoDoServico_id para gerar o ID da tabela de Item
router.post('/publicarservico/add', isAuthenticated, isRoleProfissional, new AddItemController().handle)
// Atualizando  descricao, publicacao_id e tipoDoServico_id 
router.put('/publicarservico/update', isAuthenticated, isRoleProfissional, new UpdateItemController().handle)
// Deletando Item
router.delete('/publicarservico/delete', isAuthenticated, isRoleProfissional, new DeleteItemController().handle)
// Publicando novo Servi??o (Tirando ele de rascunho e colocando como Ativo)
router.put('/publicarservico', isAuthenticated, isRoleProfissional, new PublicarServicoController().handle)
//Listando todos as publica????es do profissional
router.get('/publicacoes', isAuthenticated, isRoleProfissional, new GetPublicacoesController().handle)
//Listando a publica????o pelo Id
router.get('/publicacao', isAuthenticated, isRoleProfissional, new GetPublicacaoByIdController().handle)
//Excluindo uma publica????o ativa (ativo = true, rascunho = false)
router.delete('/publicacao', isAuthenticated, isRoleProfissional, new DeletePublicacaoAtivaController().handle)


// -- ROTAS CONTRATOS -- 
// Realizando um novo contrato
router.post('/contrato', isAuthenticated, new CreateContratoController().handle)
// Gerando Id da tabela ItemContrato
router.post('/contrato/item', isAuthenticated, new CreateItemContratoController().handle)
// Adicionando o servi??o na tabela ItemContratoServico
router.post('/contrato/addservico', isAuthenticated, new AddServicoItemController().handle)
// Adicionando o servi??o na tabela ItemContratoAgenda
router.post('/contrato/addagenda', isAuthenticated, new AddAgendaItemController().handle)
// Excluindo o contrato
router.delete('/contrato', isAuthenticated, new DeleteContratoController().handle)

// -- ROTAS AVALIA????ES
// Criando uma nova avalia????o (Gerando ID da tabela "avalicao")
router.post('/avaliacao', isAuthenticated, new CreateAvaliacaoController().handle)
// Realizando uma avali????o (inserindo a descri????o, nota...)
router.post('/avaliacao/send', isAuthenticated, new RealizaAvaliacaoController().handle)
// Listando todas as avalia????es
router.get('/avaliacoes', isAuthenticated, new GetAvaliacoesController().handle)
// Listando todas as avalia????es do profissional
router.get('/avaliacoes/id', isAuthenticated, new GetAvaliacoesByUserIdController().handle)
// Excluindo uma avali????o
router.delete('/avaliacao', isAuthenticated, new DeleteAvaliacaoController().handle)

// -- ROTA PERFIS
// Listando todos os perfis de profissionais que prestam o servi??o desejado
router.get('/perfis', isAuthenticated, new ListPerfisController().handle)
//Listando o perfil do profissional desejado
router.get('/perfil', isAuthenticated, new ListPerfilController().handle)

// -- Servicos Pendentes e Finalizados, e Finalizar Servi??o
router.get('/servicos/pendentes', isAuthenticated, new ListServicosPendentesController().handle)
router.get('/servicos/finalizados', isAuthenticated, new ListServicosFinalizadosController().handle)
// Finalizar Servi??o
router.put('/servicos/finalizar', isAuthenticated, new FinalizarServicoController().handle)
// Cancelar Servi??o
router.delete('/servicos/delete', isAuthenticated, new CancelarServicoController().handle)

export { router };
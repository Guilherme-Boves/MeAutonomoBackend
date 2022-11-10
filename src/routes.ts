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
//Login de usuários
router.post('/session', new AuthUserController().handle)
//Detalhes do Usuário
router.get('/userinfo', isAuthenticated, /*isRoleClienteProfissional,*/ new DetailUserController().handle);
//Menu Principal de cada Usuário
router.get('/dashboard/cliente', isAuthenticated, isRoleCliente, new DashboardClienteController().handle )
router.get('/dashboard/profissional', isAuthenticated, isRoleProfissional, new DashboardProfissionalController().handle)
//Atualizando foto der perfil do usuário
router.put('/user/upload/imagem', isAuthenticated, upload.single('file'), new UploadingImagesController().handle)
//Atualizando dados do cadastro do usuário (Nome de usuário, Telefone, Endereço, Descrição - Sobre Mim)
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

// -- ROTAS TIPO DE SERVIÇO --
// Cadastrando tipo de serviços
router.post('/tiposervico', isAuthenticated, isRoleAdmin, upload.single('file'), new CreateTipoServicoController().handle)
// Listando todos os tipos de serviços que pertencem a X categoria
router.get('/tiposervico', isAuthenticated, new ListTipoServicoController().handle)
// Deletando um tipo de serviço
router.delete('/tiposervico/delete', isAuthenticated, isRoleAdmin, new DeleteTipoServicoController().handle)
// Listando o tipo de serviço pelo ID
router.get('/tiposervico/id', isAuthenticated, isRoleAdmin, new ListTipoServicoByIdController().handle)
// Editando Tipo de Servico
router.post('/tiposervico/edit', isAuthenticated, isRoleAdmin, upload.single('file'), new EditTipoServicoController().handle)

// -- ROTAS SERVIÇOS PRESTADOS PELO PROFISSIONAL -- 
// Cadastrando serviços prestados pelo profissional
router.post('/servicosprestados', isAuthenticated, isRoleProfissional, new CreateServicoPrestadosController().handle)
// Excluindo um serviço prestado cadastrado pelo profissional
router.delete('/servicosprestados/delete', isAuthenticated, isRoleProfissional, new DeleteServicoPrestadoController().handle)

// -- ROTAS AGENDA -- 
// Cadastrando uma nova agenda
router.post('/agenda', isAuthenticated, isRoleProfissional, new CreateAgendaController().handle)
// Excluindo uma agenda cadastrada pelo profissional
router.delete('/agenda/delete', isAuthenticated, isRoleProfissional, new DeleteAgendaController().handle)

// -- ROTAS PUBLICAR SERVIÇO --
// Criando uma nova publicação
router.post('/publicarservico', isAuthenticated, isRoleProfissional, new CreatePublicarServicoController().handle)
// Excluindo uma publicação
router.delete('/publicarservico', isAuthenticated, isRoleProfissional, new DeletePublicarServicoController().handle)
// Cadastrando  descricao, publicacao_id e tipoDoServico_id para gerar o ID da tabela de Item
router.post('/publicarservico/add', isAuthenticated, isRoleProfissional, new AddItemController().handle)
// Atualizando  descricao, publicacao_id e tipoDoServico_id 
router.put('/publicarservico/update', isAuthenticated, isRoleProfissional, new UpdateItemController().handle)
// Deletando Item
router.delete('/publicarservico/delete', isAuthenticated, isRoleProfissional, new DeleteItemController().handle)
// Publicando novo Serviço (Tirando ele de rascunho e colocando como Ativo)
router.put('/publicarservico', isAuthenticated, isRoleProfissional, new PublicarServicoController().handle)
//Listando todos as publicações do profissional
router.get('/publicacoes', isAuthenticated, isRoleProfissional, new GetPublicacoesController().handle)
//Listando a publicação pelo Id
router.get('/publicacao', isAuthenticated, isRoleProfissional, new GetPublicacaoByIdController().handle)
//Excluindo uma publicação ativa (ativo = true, rascunho = false)
router.delete('/publicacao', isAuthenticated, isRoleProfissional, new DeletePublicacaoAtivaController().handle)


// -- ROTAS CONTRATOS -- 
// Realizando um novo contrato
router.post('/contrato', isAuthenticated, new CreateContratoController().handle)
// Gerando Id da tabela ItemContrato
router.post('/contrato/item', isAuthenticated, new CreateItemContratoController().handle)
// Adicionando o serviço na tabela ItemContratoServico
router.post('/contrato/addservico', isAuthenticated, new AddServicoItemController().handle)
// Adicionando o serviço na tabela ItemContratoAgenda
router.post('/contrato/addagenda', isAuthenticated, new AddAgendaItemController().handle)
// Excluindo o contrato
router.delete('/contrato', isAuthenticated, new DeleteContratoController().handle)

// -- ROTAS AVALIAÇÕES
// Criando uma nova avaliação (Gerando ID da tabela "avalicao")
router.post('/avaliacao', isAuthenticated, new CreateAvaliacaoController().handle)
// Realizando uma avalição (inserindo a descrição, nota...)
router.post('/avaliacao/send', isAuthenticated, new RealizaAvaliacaoController().handle)
// Listando todas as avaliações
router.get('/avaliacoes', isAuthenticated, new GetAvaliacoesController().handle)
// Listando todas as avaliações do profissional
router.get('/avaliacoes/id', isAuthenticated, new GetAvaliacoesByUserIdController().handle)
// Excluindo uma avalição
router.delete('/avaliacao', isAuthenticated, new DeleteAvaliacaoController().handle)

// -- ROTA PERFIS
// Listando todos os perfis de profissionais que prestam o serviço desejado
router.get('/perfis', isAuthenticated, new ListPerfisController().handle)
//Listando o perfil do profissional desejado
router.get('/perfil', isAuthenticated, new ListPerfilController().handle)

// -- Servicos Pendentes e Finalizados, e Finalizar Serviço
router.get('/servicos/pendentes', isAuthenticated, new ListServicosPendentesController().handle)
router.get('/servicos/finalizados', isAuthenticated, new ListServicosFinalizadosController().handle)
// Finalizar Serviço
router.put('/servicos/finalizar', isAuthenticated, new FinalizarServicoController().handle)
// Cancelar Serviço
router.delete('/servicos/delete', isAuthenticated, new CancelarServicoController().handle)

export { router };
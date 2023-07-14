import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Cadastro} from '../models';
import {CadastroRepository} from '../repositories';

export class CadastroController {
  constructor(
    @repository(CadastroRepository)
    public cadastroRepository : CadastroRepository,
  ) {}

  @post('/cadastros')
  @response(200, {
    description: 'Cadastro model instance',
    content: {'application/json': {schema: getModelSchemaRef(Cadastro)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cadastro, {
            title: 'NewCadastro',
            exclude: ['id'],
          }),
        },
      },
    })
    cadastro: Omit<Cadastro, 'id'>,
  ): Promise<Cadastro> {
    cadastro.createdAt = new Date(); 
    return this.cadastroRepository.create(cadastro);
  }

  @get('/cadastros/count')
  @response(200, {
    description: 'Cadastro model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Cadastro) where?: Where<Cadastro>,
  ): Promise<Count> {
    return this.cadastroRepository.count(where);
  }

  @get('/cadastros')
  @response(200, {
    description: 'Array of Cadastro model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cadastro, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Cadastro) filter?: Filter<Cadastro>,
  ): Promise<Cadastro[]> {
    return this.cadastroRepository.find(filter);
  }

  @patch('/cadastros')
  @response(200, {
    description: 'Cadastro PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cadastro, {partial: true}),
        },
      },
    })
    cadastro: Cadastro,
    @param.where(Cadastro) where?: Where<Cadastro>,
  ): Promise<Count> {
    return this.cadastroRepository.updateAll(cadastro, where);
  }

  @get('/cadastros/{id}')
  @response(200, {
    description: 'Cadastro model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cadastro, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Cadastro, {exclude: 'where'}) filter?: FilterExcludingWhere<Cadastro>
  ): Promise<Cadastro> {
    return this.cadastroRepository.findById(id, filter);
  }

  @patch('/cadastros/{id}')
  @response(204, {
    description: 'Cadastro PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cadastro, {partial: true}),
        },
      },
    })
    cadastro: Cadastro,
  ): Promise<void> {
    await this.cadastroRepository.updateById(id, cadastro);
  }

  @put('/cadastros/{id}')
  @response(204, {
    description: 'Cadastro PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cadastro: Cadastro,
  ): Promise<void> {
    await this.cadastroRepository.replaceById(id, cadastro);
  }

  @del('/cadastros/{id}')
  @response(204, {
    description: 'Cadastro DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cadastroRepository.deleteById(id);
  }
}

import {Entity, model, property} from '@loopback/repository';

@model()
export class Cadastro extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  cpf: string;

  @property({
    type: 'string',
    required: true,
  })
  endereco: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'string',
    required: true,
  })
  cidade: string;

  @property({
    type: 'string',
    required: true,
  })
  cep: string;

  @property({
    type: 'string',
    required: true,
  })
  nome_cartao: string;

  @property({
    type: 'string',
    required: true,
  })
  data_expiracao: string;

  @property({
    type: 'string',
    required: true,
  })
  ano: number;

  @property({
    type: 'string',
    required: true,
  })
  numero_cartao: number;

  @property({
    type: 'string',
    required: true,
  })
  codigo_seguranca: number;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  createdAt?: Date;

  constructor(data?: Partial<Cadastro>) {
    super(data);
  }
}

export interface CadastroRelations {
  // describe navigational properties here
}

export type CadastroWithRelations = Cadastro & CadastroRelations;

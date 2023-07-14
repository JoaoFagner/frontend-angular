import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Cadastro, CadastroRelations} from '../models';

export class CadastroRepository extends DefaultCrudRepository<
  Cadastro,
  typeof Cadastro.prototype.id,
  CadastroRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Cadastro, dataSource);
  }
}

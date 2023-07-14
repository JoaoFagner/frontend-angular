import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
})
export class EditarComponent implements OnInit {
  edicaoForm: FormGroup;
  cadastroId: number;
  estados: string[] = [];
  cidades: string[] = [];

  cidadesPorEstado: { [key: string]: string[] } = {
    AC: ['Acrelândia', 'Assis Brasil']
    // Adicione os demais estados e cidades aqui
  };

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private cadastroService: CadastroService
  ) {
    this.edicaoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      cpf: ['', Validators.required],
      endereco: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      cep: ['', Validators.required],
      'nome-cartao': ['', Validators.required],
      'data-expiracao': ['', Validators.required],
      ano: ['', Validators.required],
      'numero-cartao': ['', Validators.required],
      'codigo-seguranca': ['', Validators.required],
      'forma-pagamento': ['cartao-credito', Validators.required],
    });
    this.cadastroId = 0;
  }

  ngOnInit(): void {
    const cadastroId = this.route.snapshot.paramMap.get('id');
    if (cadastroId !== null) {
      this.cadastroId = +cadastroId;
      this.loadCadastro();
    }
    
    this.estados = Object.keys(this.cidadesPorEstado);
  }

  onChangeEstado(): void {
    const estadoSelecionado = this.edicaoForm.get('estado')?.value;
    this.cidades = this.getCidadesByEstado(estadoSelecionado);
    this.edicaoForm.get('cidade')?.setValue(''); // Limpa a seleção da cidade ao alterar o estado
  }

  private loadCadastro(): void {
    this.cadastroService.getCadastroById(this.cadastroId).subscribe(
      (cadastro: any) => {
        console.log('Dados do cadastro:', cadastro);
        this.edicaoForm.get('nome')?.setValue(cadastro.nome);
        this.edicaoForm.get('email')?.setValue(cadastro.email);
        this.edicaoForm.get('cpf')?.setValue(cadastro.cpf);
        this.edicaoForm.get('endereco')?.setValue(cadastro.endereco);
        this.edicaoForm.get('estado')?.setValue(cadastro.estado);
        this.edicaoForm.get('cep')?.setValue(cadastro.cep);
  
        const estadoSelecionado = cadastro.estado;
        const cidadeSelecionada = cadastro.cidade;
        this.cidades = this.getCidadesByEstado(estadoSelecionado);
        if (this.cidades.includes(cidadeSelecionada)) {
          this.edicaoForm.get('cidade')?.setValue(cidadeSelecionada);
        }
  
        const formaPagamento = cadastro['forma-pagamento'] || 'cartao-credito';
        if (this.edicaoForm.get('forma-pagamento')?.value === formaPagamento) {
          this.edicaoForm.get('forma-pagamento')?.setValue(formaPagamento);
        }

        this.edicaoForm.get('nome-cartao')?.setValue(cadastro.nome_cartao || '');
        this.edicaoForm.get('data-expiracao')?.setValue(cadastro.data_expiracao || '');
        this.edicaoForm.get('ano')?.setValue(cadastro.ano || '');
         this.edicaoForm.get('numero-cartao')?.setValue(cadastro.numero_cartao || '');
        this.edicaoForm.get('codigo-seguranca')?.setValue(cadastro.codigo_seguranca || '');
      },
      (error: any) => {
        console.log('Erro ao carregar o cadastro', error);
      }
    );
  }
  
  getCidadesByEstado(estado: string): string[] {
    return this.cidadesPorEstado[estado] || [];
  }

  submit(): void {
    if (this.edicaoForm.valid) {
      // Implemente a lógica para salvar as alterações do formulário
    }
  }

  // Outros métodos do componente, se necessário
}

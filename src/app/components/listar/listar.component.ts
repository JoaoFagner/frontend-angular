import { Component, OnInit } from "@angular/core";
import { CadastroService } from "../services/cadastro.service";


@Component({
  selector: 'listar',
  templateUrl: './listar.component.html',
})
export class ListarComponent implements OnInit {
  cadastros: any[] = [];
  nomeCliente: string = '';

  constructor(private cadastroService: CadastroService) {}

  ngOnInit(): void {
    this.getCadastros();
  }

  deleteCadastro(cadastroId: number) {
    console.log(cadastroId);
    this.cadastroService.delete(cadastroId).subscribe({
      next: () => {
        this.getCadastros(); // Atualiza a lista após a exclusão
      },
      error: (error: any) => {
        console.log('Erro ao excluir o registro', error);
      }
    });
  }

  getCadastros(): void {
    this.cadastroService.getCadastros().subscribe(
      (data: any[]) => {
        this.cadastros = data;
        console.log(this.cadastros);
      },
      (error: any) => {
        console.log('Erro ao obter os cadastros', error);
      }
    );
  }
}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastraNotaComponent } from "./nota/cadastra-nota/cadastra-nota.component";
import { ListaNotaComponent } from "./nota/lista-nota/lista-nota.component";
import { CadastraUsuarioComponent } from "./usuario/cadastra-usuario/cadastra-usuario.component";
import { ListaUsuarioComponent } from "./usuario/lista-usuario/lista-usuario.component";
import { Usuario } from "./usuario/usuario";

export const routes: Routes = [
    {
      path: "",
      component: ListaUsuarioComponent
    }, 

    {
      path: "cadastra-usuario",
      component: CadastraUsuarioComponent
    }, 

    {
      path: "cadastra-nota", 
      component: CadastraNotaComponent
    },

    {
      path: "lista-nota",
      component: ListaNotaComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
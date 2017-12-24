import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MyAppPermissaoModule } from './permissao/permissao.module';
import { MyAppUsuarioModule } from './usuario/usuario.module';
import { MyAppAlunoModule } from './aluno/aluno.module';
import { MyAppProfessorModule } from './professor/professor.module';
import { MyAppFaltaModule } from './falta/falta.module';
import { MyAppNotaModule } from './nota/nota.module';
import { MyAppTurmaModule } from './turma/turma.module';
import { MyAppDisciplinaModule } from './disciplina/disciplina.module';
import { MyAppAulaModule } from './aula/aula.module';
import { MyAppAtividadeModule } from './atividade/atividade.module';
import { MyAppPeriodoLetivoModule } from './periodo-letivo/periodo-letivo.module';
import { MyAppEntregaModule } from './entrega/entrega.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        MyAppPermissaoModule,
        MyAppUsuarioModule,
        MyAppAlunoModule,
        MyAppProfessorModule,
        MyAppFaltaModule,
        MyAppNotaModule,
        MyAppTurmaModule,
        MyAppDisciplinaModule,
        MyAppAulaModule,
        MyAppAtividadeModule,
        MyAppPeriodoLetivoModule,
        MyAppEntregaModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyAppEntityModule {}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MyAppSharedModule } from '../../shared';
import {
    AlunoService,
    AlunoPopupService,
    AlunoComponent,
    AlunoDetailComponent,
    AlunoDialogComponent,
    AlunoPopupComponent,
    AlunoDeletePopupComponent,
    AlunoDeleteDialogComponent,
    alunoRoute,
    alunoPopupRoute,
} from './';

const ENTITY_STATES = [
    ...alunoRoute,
    ...alunoPopupRoute,
];

@NgModule({
    imports: [
        MyAppSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        AlunoComponent,
        AlunoDetailComponent,
        AlunoDialogComponent,
        AlunoDeleteDialogComponent,
        AlunoPopupComponent,
        AlunoDeletePopupComponent,
    ],
    entryComponents: [
        AlunoComponent,
        AlunoDialogComponent,
        AlunoPopupComponent,
        AlunoDeleteDialogComponent,
        AlunoDeletePopupComponent,
    ],
    providers: [
        AlunoService,
        AlunoPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyAppAlunoModule {}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MyAppSharedModule } from '../../shared';
import {
    TurmaService,
    TurmaPopupService,
    TurmaComponent,
    TurmaDetailComponent,
    TurmaDialogComponent,
    TurmaPopupComponent,
    TurmaDeletePopupComponent,
    TurmaDeleteDialogComponent,
    turmaRoute,
    turmaPopupRoute,
} from './';

const ENTITY_STATES = [
    ...turmaRoute,
    ...turmaPopupRoute,
];

@NgModule({
    imports: [
        MyAppSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        TurmaComponent,
        TurmaDetailComponent,
        TurmaDialogComponent,
        TurmaDeleteDialogComponent,
        TurmaPopupComponent,
        TurmaDeletePopupComponent,
    ],
    entryComponents: [
        TurmaComponent,
        TurmaDialogComponent,
        TurmaPopupComponent,
        TurmaDeleteDialogComponent,
        TurmaDeletePopupComponent,
    ],
    providers: [
        TurmaService,
        TurmaPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyAppTurmaModule {}

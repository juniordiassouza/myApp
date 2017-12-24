/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { MyAppTestModule } from '../../../test.module';
import { TurmaComponent } from '../../../../../../main/webapp/app/entities/turma/turma.component';
import { TurmaService } from '../../../../../../main/webapp/app/entities/turma/turma.service';
import { Turma } from '../../../../../../main/webapp/app/entities/turma/turma.model';

describe('Component Tests', () => {

    describe('Turma Management Component', () => {
        let comp: TurmaComponent;
        let fixture: ComponentFixture<TurmaComponent>;
        let service: TurmaService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [MyAppTestModule],
                declarations: [TurmaComponent],
                providers: [
                    TurmaService
                ]
            })
            .overrideTemplate(TurmaComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TurmaComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TurmaService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new Turma(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.turmas[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});

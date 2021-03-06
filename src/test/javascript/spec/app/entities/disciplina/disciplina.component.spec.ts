/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { MyAppTestModule } from '../../../test.module';
import { DisciplinaComponent } from '../../../../../../main/webapp/app/entities/disciplina/disciplina.component';
import { DisciplinaService } from '../../../../../../main/webapp/app/entities/disciplina/disciplina.service';
import { Disciplina } from '../../../../../../main/webapp/app/entities/disciplina/disciplina.model';

describe('Component Tests', () => {

    describe('Disciplina Management Component', () => {
        let comp: DisciplinaComponent;
        let fixture: ComponentFixture<DisciplinaComponent>;
        let service: DisciplinaService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [MyAppTestModule],
                declarations: [DisciplinaComponent],
                providers: [
                    DisciplinaService
                ]
            })
            .overrideTemplate(DisciplinaComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DisciplinaComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DisciplinaService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new Disciplina(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.disciplinas[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});

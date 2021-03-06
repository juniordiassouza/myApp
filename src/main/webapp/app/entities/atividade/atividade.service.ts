import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { Atividade } from './atividade.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class AtividadeService {

    private resourceUrl = SERVER_API_URL + 'api/atividades';

    constructor(private http: Http) { }

    create(atividade: Atividade): Observable<Atividade> {
        const copy = this.convert(atividade);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(atividade: Atividade): Observable<Atividade> {
        const copy = this.convert(atividade);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<Atividade> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new ResponseWrapper(res.headers, result, res.status);
    }

    /**
     * Convert a returned JSON object to Atividade.
     */
    private convertItemFromServer(json: any): Atividade {
        const entity: Atividade = Object.assign(new Atividade(), json);
        return entity;
    }

    /**
     * Convert a Atividade to a JSON which can be sent to the server.
     */
    private convert(atividade: Atividade): Atividade {
        const copy: Atividade = Object.assign({}, atividade);
        return copy;
    }
}

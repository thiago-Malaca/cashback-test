/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE industriaBaseService PLEASE EDIT ../industria.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Industria } from '../../domain/cashback_db/industria';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Industria.service.ts
 */

/*
 * SCHEMA DB Industria
 *
	{
		cnpj: {
			type: 'String',
			required : true
		},
		codigoInterno: {
			type: 'String',
			required : true
		},
		nomeFantasia: {
			type: 'String',
			required : true
		},
		senhaBIopcional: {
			type: 'String'
		},
		urlFotoIndustriaopcional: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		Industria: {
			type: Schema.ObjectId,
			ref : "Produto"
		},
	}
 *
 */
@Injectable()
export class IndustriaBaseService {

    contextUrl: string = environment.endpoint + '/industrias';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * IndustriaService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Industria): Observable<Industria> {
        return this.http
            .post<Industria>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * IndustriaService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * IndustriaService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Industria> {
        return this.http
            .get<Industria>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * IndustriaService.list
    *   @description CRUD ACTION list
    *   @returns ARRAY OF Industria
    *
    */
    list(): Observable<Industria[]> {
        return this.http
            .get<Industria[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * IndustriaService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Industria): Observable<Industria> {
        return this.http
            .post<Industria>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}

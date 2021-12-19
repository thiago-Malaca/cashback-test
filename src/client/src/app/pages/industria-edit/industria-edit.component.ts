// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { IndustriaService } from '../../services/industria.service';
import { ProdutoService } from '../../services/produto.service';
// Import Models
import { Industria } from '../../domain/cashback_db/industria';
import { Produto } from '../../domain/cashback_db/produto';

// START - USED SERVICES
/**
* IndustriaService.create
*	@description CRUD ACTION create
*
* IndustriaService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* IndustriaService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* ProdutoService.findByIndustria
*	@description CRUD ACTION findByIndustria
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Industria
 */
@Component({
    selector: 'app-industria-edit',
    templateUrl: 'industria-edit.component.html',
    styleUrls: ['industria-edit.component.css']
})
export class IndustriaEditComponent implements OnInit {
    item: Industria;
    externalProduto_Industria: Produto[];
    model: Industria;
    formValid: Boolean;

    constructor(
    private industriaService: IndustriaService,
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Industria();
        this.externalProduto_Industria = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.industriaService.get(id).subscribe(item => this.item = item);
                this.produtoService.findByIndustria(id).subscribe(list => this.externalProduto_Industria = list);
            }
            // Get relations
        });
    }


    /**
     * Save Industria
     *
     * @param {boolean} formValid Form validity check
     * @param Industria item Industria to save
     */
    save(formValid: boolean, item: Industria): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.industriaService.update(item).subscribe(data => this.goBack());
            } else {
                this.industriaService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}




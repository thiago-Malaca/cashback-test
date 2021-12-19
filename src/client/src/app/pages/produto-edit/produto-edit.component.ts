// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ProdutoService } from '../../services/produto.service';
import { IndustriaService } from '../../services/industria.service';
// Import Models
import { Produto } from '../../domain/cashback_db/produto';
import { Industria } from '../../domain/cashback_db/industria';

// START - USED SERVICES
/**
* ProdutoService.create
*	@description CRUD ACTION create
*
* ProdutoService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* ProdutoService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* IndustriaService.list
*	@description CRUD ACTION list
*	@returns ARRAY OF Industria
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Produto
 */
@Component({
    selector: 'app-produto-edit',
    templateUrl: 'produto-edit.component.html',
    styleUrls: ['produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {
    item: Produto;
    listIndustria: Industria[];
    model: Produto;
    formValid: Boolean;

    constructor(
    private produtoService: ProdutoService,
    private industriaService: IndustriaService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Produto();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.produtoService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.industriaService.list().subscribe(list => this.listIndustria = list);
        });
    }


    /**
     * Save Produto
     *
     * @param {boolean} formValid Form validity check
     * @param Produto item Produto to save
     */
    save(formValid: boolean, item: Produto): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.produtoService.update(item).subscribe(data => this.goBack());
            } else {
                this.produtoService.create(item).subscribe(data => this.goBack());
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




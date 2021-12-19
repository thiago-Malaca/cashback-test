import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ProdutoService } from '../../services/produto.service';
// Import Models
import { Produto } from '../../domain/cashback_db/produto';

// START - USED SERVICES
/**
* ProdutoService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* ProdutoService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Produto
 * @class ProdutoListComponent
 */
@Component({
    selector: 'app-produto-list',
    templateUrl: './produto-list.component.html',
    styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
    list: Produto[];
    search: any = {};
    idSelected: string;
    constructor(
        private produtoService: ProdutoService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.produtoService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Produto to remove
     *
     * @param {string} id Id of the Produto to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Produto
     */
    deleteItem() {
        this.produtoService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}

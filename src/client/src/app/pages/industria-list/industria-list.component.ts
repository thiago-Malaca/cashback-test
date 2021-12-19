import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { IndustriaService } from '../../services/industria.service';
// Import Models
import { Industria } from '../../domain/cashback_db/industria';

// START - USED SERVICES
/**
* IndustriaService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* IndustriaService.list
*	@description CRUD ACTION list
*	@returns ARRAY OF Industria
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Industria
 * @class IndustriaListComponent
 */
@Component({
    selector: 'app-industria-list',
    templateUrl: './industria-list.component.html',
    styleUrls: ['./industria-list.component.css']
})
export class IndustriaListComponent implements OnInit {
    list: Industria[];
    search: any = {};
    idSelected: string;
    constructor(
        private industriaService: IndustriaService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.industriaService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Industria to remove
     *
     * @param {string} id Id of the Industria to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Industria
     */
    deleteItem() {
        this.industriaService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}

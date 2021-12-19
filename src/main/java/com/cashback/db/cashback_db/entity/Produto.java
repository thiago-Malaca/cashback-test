package com.cashback.db.cashback_db.entity;

import javax.persistence.Entity;
import com.cashback.db.cashback_db.entity.base.ProdutoBase;

@Entity
public class Produto extends ProdutoBase {

    public Produto() {}

    public Produto(String id) {
        this.set_id(Long.valueOf(id));
    }

	//OVERRIDE HERE YOUR CUSTOM MAPPER
	
	
}

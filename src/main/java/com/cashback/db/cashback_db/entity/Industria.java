package com.cashback.db.cashback_db.entity;

import javax.persistence.Entity;
import com.cashback.db.cashback_db.entity.base.IndustriaBase;

@Entity
public class Industria extends IndustriaBase {

    public Industria() {}

    public Industria(String id) {
        this.set_id(Long.valueOf(id));
    }

	//OVERRIDE HERE YOUR CUSTOM MAPPER
	
	
}

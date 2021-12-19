package com.cashback.db.cashback_db.service.base;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;


import com.cashback.db.cashback_db.entity.Industria;

import com.cashback.db.cashback_db.repositories.IndustriaRepository;

@Service
@Transactional
public class IndustriaBaseService {

	
	@Autowired
	IndustriaRepository industriaRepository;


    // CRUD METHODS
    
    // CRUD - CREATE
    
	public Industria insert(Industria industria) {
		return industriaRepository.save(industria);
	}
	
	// CRUD - REMOVE
    
	public void delete(Long id) {
		industriaRepository.delete(id);
	}

	// CRUD - GET ONE
    	
	public Industria getOne(Long id) {
		return industriaRepository.findOne(id);
	}

    	
    // CRUD - GET LIST
    	
	public List<Industria> getAll() {
		List<Industria> list = new ArrayList<>();
		industriaRepository.findAll().forEach(list::add);
		return list;
	}
	

}

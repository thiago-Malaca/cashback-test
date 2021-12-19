package com.cashback.db.cashback_db.service.base;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;


import com.cashback.db.cashback_db.entity.Produto;

import com.cashback.db.cashback_db.entity.Industria;

import com.cashback.db.cashback_db.repositories.ProdutoRepository;

@Service
@Transactional
public class ProdutoBaseService {

	
	@Autowired
	ProdutoRepository produtoRepository;


    // CRUD METHODS
    
    // CRUD - CREATE
    
	public Produto insert(Produto produto) {
		return produtoRepository.save(produto);
	}
	
	// CRUD - REMOVE
    
	public void delete(Long id) {
		produtoRepository.delete(id);
	}

    
    // CRUD - FIND BY Industria

    public List<Produto> findByIndustria(Industria industria) {
		return produtoRepository.findByIndustria(industria);
	}
    
	// CRUD - GET ONE
    	
	public Produto getOne(Long id) {
		return produtoRepository.findOne(id);
	}

    	
    // CRUD - GET LIST
    	
	public List<Produto> getAll() {
		List<Produto> list = new ArrayList<>();
		produtoRepository.findAll().forEach(list::add);
		return list;
	}
	

}

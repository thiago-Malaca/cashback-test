package com.cashback.controller.base;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.http.ResponseEntity;
import org.modelmapper.ModelMapper;
import java.util.stream.Collectors;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import org.springframework.security.access.annotation.Secured;
import org.springframework.beans.factory.annotation.Autowired;
import com.cashback.db.cashback_db.service.ProdutoService;
import com.cashback.db.cashback_db.entity.Produto;
import com.cashback.db.cashback_db.dtos.ProdutoDto;

import com.cashback.db.cashback_db.entity.Industria;

//IMPORT RELATIONS

import com.cashback.db.cashback_db.service.IndustriaService;


public class ProdutoBaseController {
    
    @Autowired
	ProdutoService produtoService;

	
	@Autowired
	IndustriaService industriaService;
	

	@Autowired
	private ModelMapper modelMapper;



//CRUD METHODS


    //CRUD - CREATE
    @Secured({ "ROLE_PRIVATE_USER" })
	@PostMapping("/produtos")
	public ResponseEntity<ProdutoDto> insert(@RequestBody Produto obj) {
				
		//external relation Industria
		if (obj.getIndustria() != null) {
			if (obj.getIndustria().get_id() == null)
				industriaService.insert(obj.getIndustria());
			else
				industriaService.insert(industriaService.getOne(obj.getIndustria().get_id()));
		}
				
		
		return ResponseEntity.ok().body(convertToDto(produtoService.insert(obj)));
	}

	
    //CRUD - REMOVE
    @Secured({ "ROLE_PRIVATE_USER" })
	@DeleteMapping("/produtos/{id}")
	public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
		Produto produtoSelected = produtoService.getOne(id);
		
		
		produtoService.delete(id);
		return ResponseEntity.ok().build();
	}
	
    //CRUD - FIND BY Industria
    
	@GetMapping("/produtos/findByIndustria/{key}")
	public ResponseEntity<List<ProdutoDto>> findByIndustria(@PathVariable("key") Long id) {
		
		Industria industria = industriaService.getOne(id);
		List<Produto> produtos = produtoService.findByIndustria(industria);
		List<ProdutoDto> produtosDto = produtos.stream()
				.map(produto -> convertToDto(produto))
				.collect(Collectors.toList());
		
		

		return ResponseEntity.ok().body(produtosDto);
	}
	
    //CRUD - GET ONE
    @Secured({ "ROLE_PRIVATE_USER" })
	@GetMapping("/produtos/{id}")
	public ResponseEntity<ProdutoDto> get(@PathVariable("id") Long id) {
		Produto produtoSelected = produtoService.getOne(id);
		return ResponseEntity.ok().body(convertToDto(produtoSelected));
	}
	
	
    //CRUD - GET LIST
    @Secured({ "ROLE_PRIVATE_USER" })
	@GetMapping("/produtos")
	public ResponseEntity<List<ProdutoDto>> getList() {
		List<Produto> list = produtoService.getAll();
		List<ProdutoDto> listDto = list.stream()
				.map(produto -> convertToDto(produto))
				.collect(Collectors.toList());
		return ResponseEntity.ok().body(listDto);
	}


    //CRUD - EDIT
    @Secured({ "ROLE_PRIVATE_USER" })
	@PostMapping("/produtos/{id}")
	public ResponseEntity<ProdutoDto> update(@RequestBody Produto obj, @PathVariable("id") Long id) {
	    
		//external relation Industria
		if (obj.getIndustria() != null) {
			if (obj.getIndustria().get_id() == null)
				industriaService.insert(obj.getIndustria());
			else
				industriaService.insert(industriaService.getOne(obj.getIndustria().get_id()));
		}
				
		
		return ResponseEntity.ok().body(convertToDto(produtoService.insert(obj)));
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	private ProdutoDto convertToDto(Produto produto) {
		ProdutoDto produtoDto = modelMapper.map(produto, ProdutoDto.class);
		return produtoDto;
	}
}

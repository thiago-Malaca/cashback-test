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
import com.cashback.db.cashback_db.service.IndustriaService;
import com.cashback.db.cashback_db.entity.Industria;
import com.cashback.db.cashback_db.dtos.IndustriaDto;

//IMPORT RELATIONS

import com.cashback.db.cashback_db.service.ProdutoService;


public class IndustriaBaseController {
    
    @Autowired
	IndustriaService industriaService;

	
	@Autowired
	ProdutoService produtoService;
	

	@Autowired
	private ModelMapper modelMapper;



//CRUD METHODS


    //CRUD - CREATE
    @Secured({ "ROLE_PRIVATE_USER" })
	@PostMapping("/industrias")
	public ResponseEntity<IndustriaDto> insert(@RequestBody Industria obj) {
				
		//external relation Produto
		if (obj.getProduto() != null && !obj.getProduto().isEmpty())
			obj.getProduto().forEach(produto -> produtoService.insert(produto));
		
		
		return ResponseEntity.ok().body(convertToDto(industriaService.insert(obj)));
	}

	
    //CRUD - REMOVE
    @Secured({ "ROLE_PRIVATE_USER" })
	@DeleteMapping("/industrias/{id}")
	public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
		Industria industriaSelected = industriaService.getOne(id);
		
		//external relation Produto
		if (industriaSelected.getProduto() != null && !industriaSelected.getProduto().isEmpty()) {
			industriaSelected.getProduto().forEach(produto -> produtoService.delete(produto.get_id()));
		}
		
		industriaService.delete(id);
		return ResponseEntity.ok().build();
	}
	
	
    //CRUD - GET ONE
    @Secured({ "ROLE_PRIVATE_USER" })
	@GetMapping("/industrias/{id}")
	public ResponseEntity<IndustriaDto> get(@PathVariable("id") Long id) {
		Industria industriaSelected = industriaService.getOne(id);
		return ResponseEntity.ok().body(convertToDto(industriaSelected));
	}
	
	
    //CRUD - GET LIST
    @Secured({ "ROLE_PRIVATE_USER" })
	@GetMapping("/industrias")
	public ResponseEntity<List<IndustriaDto>> getList() {
		List<Industria> list = industriaService.getAll();
		List<IndustriaDto> listDto = list.stream()
				.map(industria -> convertToDto(industria))
				.collect(Collectors.toList());
		return ResponseEntity.ok().body(listDto);
	}


    //CRUD - EDIT
    @Secured({ "ROLE_PRIVATE_USER" })
	@PostMapping("/industrias/{id}")
	public ResponseEntity<IndustriaDto> update(@RequestBody Industria obj, @PathVariable("id") Long id) {
	    
		//external relation Produto
		if (obj.getProduto() != null)
			obj.getProduto().forEach(produto -> produtoService.insert(produto));
		
		
		return ResponseEntity.ok().body(convertToDto(industriaService.insert(obj)));
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	private IndustriaDto convertToDto(Industria industria) {
		IndustriaDto industriaDto = modelMapper.map(industria, IndustriaDto.class);
		return industriaDto;
	}
}

package com.cashback.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.context.annotation.PropertySource;

import com.cashback.controller.base.ProdutoBaseController;

@RestController
@PropertySource("classpath:${configfile.path}/Cashback.properties")
@RequestMapping(value="${endpoint.api}", headers = "Accept=application/json")
public class ProdutoController extends ProdutoBaseController {

	//OVERRIDE HERE YOUR CUSTOM CONTROLLER

}

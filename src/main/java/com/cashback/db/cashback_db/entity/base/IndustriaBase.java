package com.cashback.db.cashback_db.entity.base;

/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
                                                                                   
 * DO NOT EDIT THIS FILE!! 
 *
 *  FOR CUSTOMIZE IndustriaBase PLEASE EDIT ../Industria.java
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER CODE GENERATION --
 * 
 */
 

/**
 * This is the model of Industria object
 * 
 */

import javax.persistence.GeneratedValue;
import javax.persistence.MappedSuperclass;
import javax.persistence.Id;
import javax.persistence.Column;
import java.util.Date;
import javax.persistence.ManyToOne;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.FetchType;
import java.util.stream.Collectors;

import com.cashback.db.cashback_db.entity.Industria;
// Import relations
import com.cashback.db.cashback_db.entity.Produto;




@MappedSuperclass
public class IndustriaBase {
	
	@Id
	@GeneratedValue
	private Long _id;
	
	// Attributes
	@Column(nullable=false)
    private String cnpj;
	@Column(nullable=false)
    private String codigoInterno;
	@Column(nullable=false)
    private String nomeFantasia;
	@Column()
    private String senhaBIopcional;
	@Column()
    private String urlFotoIndustriaopcional;
	
	// Relations Produto
	@OneToMany(mappedBy="Industria")
	private List<Produto> Industria_Produto = new ArrayList<>();
	
	
	
	public Long get_id() {
		return _id;
	}

	public void set_id(Long id) {
		this._id = id;
	}
	
	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
	public String getCodigoInterno() {
		return codigoInterno;
	}

	public void setCodigoInterno(String codigoInterno) {
		this.codigoInterno = codigoInterno;
	}
	public String getNomeFantasia() {
		return nomeFantasia;
	}

	public void setNomeFantasia(String nomeFantasia) {
		this.nomeFantasia = nomeFantasia;
	}
	public String getSenhaBIopcional() {
		return senhaBIopcional;
	}

	public void setSenhaBIopcional(String senhaBIopcional) {
		this.senhaBIopcional = senhaBIopcional;
	}
	public String getUrlFotoIndustriaopcional() {
		return urlFotoIndustriaopcional;
	}

	public void setUrlFotoIndustriaopcional(String urlFotoIndustriaopcional) {
		this.urlFotoIndustriaopcional = urlFotoIndustriaopcional;
	}
    
	// Relations Produto
	
	public List<Produto> getProduto() {
		return this.Industria_Produto;
	}

	public void addProduto(Produto Produto) {
		this.Industria_Produto.add(Produto);
	}

	public void removeProduto(Produto Produto) {
		this.Industria_Produto.remove(Produto);
	}
	

    
}
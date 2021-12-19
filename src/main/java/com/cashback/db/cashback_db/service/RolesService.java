package com.cashback.db.cashback_db.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cashback.db.cashback_db.entity.Roles;
import com.cashback.db.cashback_db.entity.User;
import com.cashback.db.cashback_db.repositories.RolesRepository;

@Service
public class RolesService{
	
	@Autowired
    RolesRepository rolesRepository;



	public List<Roles> getRoles(Long id_user) {
		return null;
	}


    public Roles insert(Roles role) {
        return rolesRepository.save(role);
    }

    public Roles findByRoleAndUser(String role, User user) {
    	return rolesRepository.findByRoleAndUser(role, user);
    }

    public void delete(Long role) {
    	rolesRepository.delete(role);
    }

    public List<Roles> findByUser(User user) {
		return rolesRepository.findByUser(user);
	}
}
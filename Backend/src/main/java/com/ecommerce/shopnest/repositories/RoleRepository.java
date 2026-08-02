package com.ecommerce.shopnest.repositories;

import com.ecommerce.shopnest.model.AppRole;
import com.ecommerce.shopnest.model.Role;
import io.jsonwebtoken.security.Jwks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.Optional;


@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {

    Optional<Role> findByRoleName(AppRole appRole);
}

package com.ecommerce.shopnest.repositories;

import com.ecommerce.shopnest.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {

}

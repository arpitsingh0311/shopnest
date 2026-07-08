package com.ecommerce.shopnest.repositories;

import com.ecommerce.shopnest.model.Category;
import com.ecommerce.shopnest.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Long> {
    List<Product> findByCategoryOrderByPriceAsc(Category category);
}

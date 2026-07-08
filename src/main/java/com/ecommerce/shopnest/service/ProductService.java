package com.ecommerce.shopnest.service;

import com.ecommerce.shopnest.model.Product;
import com.ecommerce.shopnest.payload.ProductDTO;
import com.ecommerce.shopnest.payload.ProductResponse;

public interface ProductService {
    ProductDTO addProduct(Long categoryId, Product product);

    ProductResponse getAllProducts();

    ProductResponse searchByCategory(Long categoryId);

    ProductResponse searchByKeyword(String keyword);
}

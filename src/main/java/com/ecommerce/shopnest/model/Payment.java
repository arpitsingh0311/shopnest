package com.ecommerce.shopnest.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="payments")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paymentId;

    @OneToOne(mappedBy = "payment", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private Order order;

    @NotBlank
    @Size(min = 4, message = "Payment method must contain at least 4 characters")
    private String paymentMethod;

    private String pgPaymentId;
    private String pqStatus;
    private String pgResponseMessage;
    private String pgName;

    public Payment(String paymentMethod, String pgPaymentId, String pqStatus, String pgResponseMessage, String pgName) {
        this.paymentMethod = paymentMethod;
        this.pgPaymentId = pgPaymentId;
        this.pqStatus = pqStatus;
        this.pgResponseMessage = pgResponseMessage;
        this.pgName = pgName;
    }
    
}

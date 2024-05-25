//package com.secondLife.entity;
//
//import java.util.Date;
//import java.util.List;
//
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.ManyToOne;
//import jakarta.persistence.OneToMany;
//import jakarta.persistence.Table;
//
//@Entity
//@Table(name = "orders")
//public class Order {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Long id;
//
//    @ManyToOne
//    @JoinColumn(name = "user_id", nullable = false)
//    private User user;
//
////    @OneToMany(mappedBy = "order")
////    private List<OrderItem> orderItems;
//
//    @Column(nullable = false)
//    private double totalPrice;
//
////    @Temporal(TemporalType.TIMESTAMP)
//    @Column(nullable = false, updatable = false)
//    private Date createdAt;
//
////    @Enumerated(EnumType.STRING)
////    @Column(nullable = false)
//    private  String orderStatus;
//
////    @Column
//    private String orderPrice;
//
//    // Constructors, getters, setters
//}

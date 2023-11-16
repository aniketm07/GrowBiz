package com.growbiz.backend.Payment.controller;

import com.growbiz.backend.Payment.model.Payment;
import com.growbiz.backend.Payment.model.PaymentRequest;
import com.growbiz.backend.Payment.model.PaymentResponse;
import com.growbiz.backend.Payment.service.IPaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/payment")
public class PaymentController {

    @Autowired
    IPaymentService paymentService;

    @PostMapping(path = "/init")
    public ResponseEntity<PaymentResponse> createPaymentIntent(@RequestBody PaymentRequest paymentRequest) {
        return paymentService.createPaymentIntent(paymentRequest);
    }

    @PostMapping(path = "/webhook")
    public ResponseEntity<String> handleWebhook(@RequestBody String requestBody) {
        return paymentService.handleWebhook(requestBody);
    }

    @GetMapping(path = "/")
    public ResponseEntity<Payment> getPayment(@RequestParam Long paymentId) {
        return ResponseEntity.ok(paymentService.findPaymentById(paymentId));
    }

    @GetMapping(path = "/status")
    public ResponseEntity<Payment> getAllPayments(@RequestParam String paymentStatus) {
        //return ResponseEntity.ok(paymentService.findPaymentById(paymentId));
        return null;
    }
}

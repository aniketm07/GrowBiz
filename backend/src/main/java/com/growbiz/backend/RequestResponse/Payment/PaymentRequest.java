package com.growbiz.backend.RequestResponse.Payment;

import com.growbiz.backend.RequestResponse.Basic.BasicRequest;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.LocalTime;

@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class PaymentRequest extends BasicRequest {
    private Long serviceId;

    private String date;

    private LocalTime startTime;

    private LocalTime endTime;

    private String note;
}

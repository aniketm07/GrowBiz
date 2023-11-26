package com.growbiz.backend.BusinessHour.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.LocalTime;

@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class BusinessHour {

    @Id
    private Long businessId;
    private LocalTime monday_start;
    private LocalTime monday_end;
    private LocalTime tuesday_start;
    private LocalTime tuesday_end;
    private LocalTime wednesday_start;
    private LocalTime wednesday_end;
    private LocalTime thursday_start;
    private LocalTime thursday_end;
    private LocalTime friday_start;
    private LocalTime friday_end;
    private LocalTime saturday_start;
    private LocalTime saturday_end;
    private LocalTime sunday_start;
    private LocalTime sunday_end;
}

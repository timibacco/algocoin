package com.algocoin.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.math.BigDecimal;

@NoArgsConstructor
@Data
@Entity
public class Stock {
    @Id
    private String symbol;
    private String companyName;
    private BigDecimal currentPrice;
    private BigDecimal previousClose;
    private BigDecimal dailyHigh;
    private BigDecimal dailyLow;
    private Long volume;



    public Stock(String symbol, String companyName, BigDecimal currentPrice) {
        this.symbol = symbol;
        this.companyName = companyName;
        this.currentPrice = currentPrice;
    }
}

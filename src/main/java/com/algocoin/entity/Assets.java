package com.algocoin.entity;


import com.algocoin.AssetType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@Entity
public class Assets {
    @Id
    private String symbol;
    private String name;
    private AssetType assetType;
    private String market;
    private String currency = "USD";




    public Assets(String symbol, String name, String currency) {
        this.symbol = symbol;
        this.name = name;
        this.currency = currency;
    }
}

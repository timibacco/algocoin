package com.algocoin.controller;

import com.algocoin.entity.Stock;
import com.algocoin.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/")
public class StockController {
    @Autowired
    private StockService stockService;

    @GetMapping
    public String getIndexPage(Model model) {
        List<Stock> stocks = stockService.getAllStocks();
        model.addAttribute("stocks", stocks);
        return "index";
    }
}
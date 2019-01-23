package com.realdolmen.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;

@RequestMapping(path = "/order")
@RestController
public class OrderController implements Serializable {
}

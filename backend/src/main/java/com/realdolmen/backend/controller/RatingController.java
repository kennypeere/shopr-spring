package com.realdolmen.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;

@RequestMapping(path = "/rating")
@RestController
public class RatingController implements Serializable {
}

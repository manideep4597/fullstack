package com.socgen.employeeportal.controller;

import com.socgen.employeeportal.EmployeeException;
import com.socgen.employeeportal.model.Employee;
import com.socgen.employeeportal.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RestController
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }
    @PostMapping("/employee")
    public ResponseEntity<?> saveEmployee(@Valid @RequestBody Employee employee)
    {

        ResponseEntity responseEntity;
        try {
            Employee savedEmployee = employeeService.saveEmployee(employee);
            responseEntity = new ResponseEntity<Employee>(savedEmployee, HttpStatus.CREATED);
        }catch(EmployeeException e){
            responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.CONFLICT);
            e.printStackTrace();
        }
        return responseEntity;
    }
    @GetMapping("/allemployees")
    public ResponseEntity<?> getAllEmployees()
    {
        ResponseEntity responseEntity;
        List<Employee> employeeList;
        employeeList= employeeService.getAllEmployees();
        responseEntity= new ResponseEntity<List<Employee>>(employeeList,HttpStatus.OK);
        return responseEntity;

    }
}

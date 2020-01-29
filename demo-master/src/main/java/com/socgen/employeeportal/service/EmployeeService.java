package com.socgen.employeeportal.service;

import com.socgen.employeeportal.EmployeeException;
import com.socgen.employeeportal.model.Employee;

import java.util.List;

public interface EmployeeService {
    public Employee saveEmployee(Employee employee) throws EmployeeException;
    public List<Employee> getAllEmployees();
}

package com.socgen.employeeportal.service;

import com.socgen.employeeportal.EmployeeException;
import com.socgen.employeeportal.model.Employee;
import com.socgen.employeeportal.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepo employeeRepo;

    public EmployeeServiceImpl() {
    }


    @Override
    public Employee saveEmployee(Employee employee) throws EmployeeException {

        if(employeeRepo.existsById(employee.getId())) {
            throw new EmployeeException("Employee Already Exist");
        }
        Employee savedEmployee= employeeRepo.save(employee);
        if(savedEmployee== null)
        {
            throw new EmployeeException("Insufficient Details");
        }
        return savedEmployee;
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<Employee> employeeList = (List<Employee>) employeeRepo.findAll(new Sort(Sort.Direction.DESC,"firstName"));
        return employeeList;
    }


}

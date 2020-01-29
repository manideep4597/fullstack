package com.socgen.employeeportal;


import com.socgen.employeeportal.model.Employee;
import com.socgen.employeeportal.repository.EmployeeRepo;
import com.socgen.employeeportal.service.EmployeeServiceImpl;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

public class EmployeeServiceTest {
    Employee employee;
    @Mock
    EmployeeRepo employeeRepo;
    @InjectMocks
    EmployeeServiceImpl employeeService;
    List<Employee> employeeList=null;
    @Before
    public void setUp(){
        //Initialising the mock object
        MockitoAnnotations.initMocks(this);

        employee=new Employee();
        employee.setId(1L);
        employee.setFirstName("Shreelekhya");
        employee.setLastName("Gampa");
        employee.setGender("Female");
        employee.setDepartment("CMU");
        employee.setDob("23rd feb 1996");

        employeeList = new ArrayList<>();
        employeeList.add(employee);
    }
    @After
    public void tearDown() throws Exception{
        employeeRepo.deleteAll();
    }

    @Test
    public void saveEmployeeTestSuccess() throws EmployeeException {

        when(employeeRepo.save((Employee)any())).thenReturn(employee);
        Employee savedEmployee = employeeService.saveEmployee(employee);
        Assert.assertEquals(employee,savedEmployee);

        //verify here verifies that userRepository save method is only called once
        verify(employeeRepo,times(1)).save(employee);

    }
    @Test(expected = EmployeeException.class)
    public void saveEmployeeTestFailure() throws EmployeeException {
        Employee savedEmployee = employeeService.saveEmployee(employee);
        System.out.println("savedEmployee" + savedEmployee);
        doThrow(new EmployeeException()).when(employeeRepo).findById(eq(1L));
    }
    @Test(expected = EmployeeException.class)
    public void saveEmployeeTestNullFailure() throws EmployeeException {
        when(employeeRepo.save(any())).thenReturn(null);
        Employee savedEmployee = employeeService.saveEmployee(employee);
        System.out.println("savedEmployee" + savedEmployee);
        Assert.assertEquals(employee,savedEmployee);
        verify(employeeRepo).save(employee);
    }


}

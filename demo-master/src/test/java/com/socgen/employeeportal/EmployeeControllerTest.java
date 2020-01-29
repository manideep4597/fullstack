package com.socgen.employeeportal;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.socgen.employeeportal.controller.EmployeeController;
import com.socgen.employeeportal.model.Employee;
import com.socgen.employeeportal.service.EmployeeServiceImpl;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@WebMvcTest
public class EmployeeControllerTest {
    @Autowired
    MockMvc mockMvc;
    Employee employee;
    @Mock
    EmployeeServiceImpl employeeService;

    @InjectMocks
    EmployeeController employeeController;
    List<Employee> employeeList=null;
    @Before
    public void setUp(){
        //Initialising the mock object
        MockitoAnnotations.initMocks(this);
        mockMvc= MockMvcBuilders.standaloneSetup(employeeController).build();
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

    @Test
    public void testSaveEmployee() throws Exception {
        when(employeeService.saveEmployee((any()))).thenReturn(employee);
        mockMvc.perform(MockMvcRequestBuilders.post("/employee")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(employee)))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andDo(MockMvcResultHandlers.print());
    }
    @Test
    public void testSaveEmployeeFailure() throws Exception {
        when(employeeService.saveEmployee(any())).thenThrow(EmployeeException.class);
        mockMvc.perform(MockMvcRequestBuilders.post("/employee")
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(employee)))
                .andExpect(MockMvcResultMatchers.status().isConflict())
                .andDo(MockMvcResultHandlers.print());
    }
    @Test
    public void saveEmployeeTestNullFailure() throws EmployeeException {
        when(employeeService.saveEmployee(any())).thenReturn(employee);
        ResponseEntity<?> savedEmployee = employeeController.saveEmployee(employee);
        ResponseEntity<?> res=new ResponseEntity<>(employee, HttpStatus.CREATED);
        Assert.assertEquals(res,savedEmployee);
        verify(employeeService,times(1)).saveEmployee(employee);
    }

    private static String asJsonString(final Object obj)
    {
        try{
            return new ObjectMapper().writeValueAsString(obj);

        }catch(Exception e){
            throw new RuntimeException(e);
        }
    }
}

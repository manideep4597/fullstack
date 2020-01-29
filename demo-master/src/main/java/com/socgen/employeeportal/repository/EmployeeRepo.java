package com.socgen.employeeportal.repository;

import com.socgen.employeeportal.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long> {

}

package com.employee.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.demo.domain.Employee;
import com.employee.demo.service.EmployeeService;


@RequestMapping("/employee")
@RestController
public class EmployeeRestController {
	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping("/get")
	public ResponseEntity<List<Employee>> getAll() {
		return ResponseEntity.ok(employeeService.findAll());
	}
	
	@GetMapping("/get/{id}")
	public ResponseEntity<Employee> findById(@PathVariable Long id) {
		return ResponseEntity.ok(employeeService.findById(id).orElse(null));
	}
	
	@PostMapping("/add")
	public ResponseEntity<Employee> add(@RequestBody Employee employee) {
		return ResponseEntity.ok(employeeService.save(employee));
	}
	
	@PutMapping("/update")
	public ResponseEntity<Employee> update(@RequestBody Employee employee) {
		return ResponseEntity.ok(employeeService.save(employee));
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Employee> delete(@PathVariable Long id) {
		employeeService.findById(id).ifPresent(employeeService::delete);
		return ResponseEntity.ok().build();
	}
}

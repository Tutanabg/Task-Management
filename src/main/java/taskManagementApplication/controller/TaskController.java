package taskManagementApplication.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
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

import taskManagementApplication.entity.Task;
import taskManagementApplication.services.TaskServices;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "http://localhost:4300")
public class TaskController {

	TaskServices taskService;

	public TaskController(TaskServices taskService) {
		super();
		this.taskService = taskService;
	}

	@GetMapping
	public List<Task> getAllTasks() {
		
		return taskService.getallTasks();
	}

	@GetMapping("/{id}")
	public Task getTaskById(@PathVariable int id) {

		return taskService.getTaskById(id);

	}

	@PostMapping("/create")
	public void createTask(@RequestBody Task task) {
		
		taskService.createTask(task);

	}

	@PutMapping("/update/{id}")
	public Task updateTask(@PathVariable int id, @RequestBody Task task) {

		return taskService.updateTask(id, task);

	}

	@DeleteMapping("/delete/{id}")
	public String deleteTask(@PathVariable int id) {

		taskService.deleteTaskById(id);

		return "Task with id: " + id + " deleted successfully";
	}

}

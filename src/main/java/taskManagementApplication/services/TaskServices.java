package taskManagementApplication.services;

import java.util.List;

import org.springframework.stereotype.Service;

import taskManagementApplication.entity.Task;
import taskManagementApplication.repository.TaskRepository;

@Service
public class TaskServices {
	
	TaskRepository taskRepository;

	public TaskServices(TaskRepository taskRepository) {
		super();
		this.taskRepository = taskRepository;
	}
	
	public void createTask(Task task) {
		taskRepository.save(task);
	}
	
	public List<Task> getallTasks(){
		return taskRepository.findAll();
	}
	
	public Task getTaskById(int id) {
		return taskRepository.findById(id).orElseThrow();
	}
	
	public Task updateTask(int id, Task task) {
		Task getTask = getTaskById(id);
		getTask.setCost(task.getCost());
		getTask.setDate(task.getDate());
		getTask.setDurationInDays(task.getDurationInDays());
		getTask.setName(task.getName());
		getTask.setPerformedBy(task.getPerformedBy());
		taskRepository.save(getTask);
		return getTask;
	}
	
	public void deleteTaskById(int id) {
		taskRepository.deleteById(id);
	}

}

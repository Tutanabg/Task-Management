package taskManagementApplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import taskManagementApplication.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Integer> {

}

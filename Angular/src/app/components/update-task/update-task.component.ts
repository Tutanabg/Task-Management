import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { catchError, EMPTY, of, switchMap } from 'rxjs';
import { Task } from '../../models/task';
import { __param } from 'tslib';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent implements OnInit {
 
  taskForm: FormGroup;
  errorMessage = '';
  taskId: number = 0;

  constructor(
    private taskService: TasksService,
    private fb: FormBuilder,
    private router: Router, 
    private route: ActivatedRoute
  ) {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      date: ['', [Validators.required]],
      performedBy: ['', [Validators.required]],
      durationInDays:['', [Validators.required, Validators.minLength(1)]],
      cost: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id'); 
        if (!id) {
          this.errorMessage = 'Task ID not found in URL';
          return of(null);
        }
        this.taskId = Number(id);
        return this.taskService.getTaskById(Number(id)); 
      }),
      catchError(error => {
        this.errorMessage = 'Error fetching task data';
        console.error('Error fetching task data:', error);
        return of(null);
      })
    ).subscribe(taskData => {
      if (taskData) {
        this.patchForm(taskData);
      }
    });
  }

  patchForm(task: Task): void {
    this.taskForm.patchValue({
      id: task.id,
      name: task.name,
      date:task.date,
      performedBy: task.performedBy,
      durationInDays: task.durationInDays,
      cost: task.cost
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const editTask: Task = this.taskForm.value;
      console.log('Updating Task:', editTask); 
      this.taskService.updateTask(this.taskId, editTask).pipe(
        catchError(error => {
          this.taskForm.markAllAsTouched(); 
          this.errorMessage = 'Error updating task';
          console.error('Error updating task:', error);
          return EMPTY; 
        })
      ).subscribe(() => {
        console.log('Task updated successfully');
        this.router.navigate(['/tasks']);
      });
    } else {
      this.taskForm.markAllAsTouched();
      this.errorMessage = 'Please fill out the form correctly';
    }
  }
}

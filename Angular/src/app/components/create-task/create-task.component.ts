import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task';
import { catchError, EMPTY } from 'rxjs';


@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  taskForm: FormGroup;
  errorMessage = '';

  constructor(
    private taskService: TasksService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      date: ['', [Validators.required]],
      performedBy: ['', [Validators.required]],
      durationInDays:['', [Validators.required, Validators.minLength(1)]],
      cost: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const newTask: Task = this.taskForm.value;
      console.log('Creating new Task:', newTask); 
      this.taskService.createTask(newTask).pipe(
        catchError(error => {
          this.taskForm.markAllAsTouched(); 
          this.errorMessage = 'Error creating task';
          console.error('Error creating task:', error);
          return EMPTY; 
        })
      ).subscribe(() => {
        console.log('Task created successfully');
        this.router.navigate(['/tasks']);
      });
    } else {
      this.taskForm.markAllAsTouched();
      this.errorMessage = 'Please fill out the form correctly';
    }
  }

}

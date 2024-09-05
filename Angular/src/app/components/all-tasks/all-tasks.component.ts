import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TasksService } from '../../services/tasks.service';
import { Router, RouterModule } from '@angular/router';
import { catchError, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.css'
})
export class AllTasksComponent implements OnInit{
  tasks: Task[]= [];
  errorMessage: string = "";  

  constructor(private taskService: TasksService, private router: Router){

  }

  ngOnInit(): void{
    this.taskService.getAllTasks().pipe(
      catchError(error => {
        this.errorMessage = 'Error fetching tasks';
        console.error('Error fetching tasks:', error);
        return of([]); 
      })
    ).subscribe(data => {
      this.tasks = data;
    });

  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        console.log('Account deleted successfully');
        this.router.navigate(['/tasks']);
      },
      error: (error: any) => {
        console.error('Error deleting account:', error);
      }
    });
  
}
}

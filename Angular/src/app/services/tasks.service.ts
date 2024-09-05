import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private url = 'http://localhost:8100/tasks';

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.url}`);
  }

  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.url}/${id}`);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.url}/create`, task);
  }

  updateTask(id: number, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.url}/update/${id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${id}`);
  }

}

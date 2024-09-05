import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'tasks', component: AllTasksComponent },
  { path: 'tasks/create', component: CreateTaskComponent },
  { path: 'tasks/update/:id', component: UpdateTaskComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }, // Redirect to default route
  { path: '**', redirectTo: '/tasks' } // Wildcard route for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

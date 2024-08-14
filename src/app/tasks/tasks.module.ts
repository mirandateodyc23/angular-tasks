import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { NewTaskModule } from './new-task/new-task.module';
import { TaskModule } from './task/task.module';

@NgModule({
  declarations: [TasksComponent],
  imports: [
    NewTaskModule, TaskModule
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }

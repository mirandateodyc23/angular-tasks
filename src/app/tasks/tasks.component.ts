import { Component, Input } from '@angular/core';
import { type NewTaskData, type Task } from './task/task.model';
import { TasksService } from './tasks.service';
import { Tasks2Service } from './tasks2.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required:true }) userId!: string;
  @Input({ required:true }) name?: string;

  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  
  onCloseAddTask() {
    this.isAddingTask = false;
  }
  
}

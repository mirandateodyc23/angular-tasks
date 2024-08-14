import { Component, EventEmitter, inject, Input} from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  // standalone: true,
  // imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task;

  private tasksService = inject(TasksService);

  onCompleteTask() {

    this.tasksService.removeTask(this.task.id);
    
  }
  
}

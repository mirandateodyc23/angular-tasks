import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input() newtask!: Task;
  @Output() addtask = new EventEmitter();
  @Input() selectedId!: string;

  @Input() lastUserTaskId!: number;


  onAddTask() {
    this.newtask = 
    {
      id: 't' + this.lastUserTaskId,
      userId: this.selectedId,
      title: 't' + this.lastUserTaskId + "New Added Task" + "for User " + this.selectedId,
      summary: 't' + this.lastUserTaskId + "New Added Task" + "for User " + this.selectedId,
      dueDate: "2024-08-31"
    }
    this.addtask.emit(this.newtask);
  }

}

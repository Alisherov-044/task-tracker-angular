import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskScheme } from 'src/app/interface/scheme.interface';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
})
export class TaskCardComponent {
  @Input() task!: TaskScheme;
  @Output() update: EventEmitter<TaskScheme> = new EventEmitter();
  @Output() delete: EventEmitter<number> = new EventEmitter();

  onUpdate(): void {
    this.update.emit(this.task);
  }

  onDelete(): void {
    this.delete.emit(this.task.id);
  }
}

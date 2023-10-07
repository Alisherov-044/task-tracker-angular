import { Component, NgModule, OnInit } from '@angular/core';
import { TaskScheme } from 'src/app/interface/scheme.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tasks: TaskScheme[] = [];
  text!: string;
  day!: string;
  reminder: boolean = false;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  addTask(): void {
    if (!this.text) {
      return alert('Please enter the text');
    }

    const newTask: Omit<TaskScheme, 'id'> = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    this.taskService
      .addTask(newTask)
      .subscribe((task) => this.tasks.push(task));

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

  updateTask(task: TaskScheme): void {
    this.taskService
      .updateTask(task)
      .subscribe(
        (task) =>
          (this.tasks = this.tasks.map((item) =>
            item.id === task.id ? task : item
          ))
      );
  }

  deleteTask(id: number): void {
    this.taskService
      .deleteTask(id)
      .subscribe(
        () => (this.tasks = this.tasks.filter((item) => item.id !== id))
      );
  }
}

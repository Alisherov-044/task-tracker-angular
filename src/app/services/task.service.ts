import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskScheme } from '../interface/scheme.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl: string = 'http://localhost:8000/tasks';
  httpOptions = {
    headers: { 'Content-Type': 'application/json' },
  };

  constructor(private http: HttpClient) {}

  getTasks(): Observable<TaskScheme[]> {
    return this.http.get<TaskScheme[]>(this.apiUrl);
  }

  addTask(task: Omit<TaskScheme, 'id'>): Observable<TaskScheme> {
    return this.http.post<TaskScheme>(this.apiUrl, task, this.httpOptions);
  }

  updateTask(task: TaskScheme): Observable<TaskScheme> {
    return this.http.put<TaskScheme>(
      `${this.apiUrl}/${task.id}`,
      {
        ...task,
        reminder: !task.reminder,
      },
      this.httpOptions
    );
  }

  deleteTask(id: number): Observable<TaskScheme> {
    return this.http.delete<TaskScheme>(`${this.apiUrl}/${id}`);
  }
}

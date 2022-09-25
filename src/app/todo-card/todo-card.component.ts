import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

interface Task {
  done: boolean,
  title: string
}

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit, OnDestroy {

  title = 'Mis Tareas';

  tasks: Array<Task> = [];

  inputTask = 'Nueva tarea';

  constructor() {
  }

  ngOnInit(): void {
    this.tasks.push({ title: 'Test 1', done: false});
    this.tasks.push({ title: 'Test 2', done: false});
    this.tasks.push({ title: 'Test 3', done: true});

  }

  ngOnDestroy() {
    this.title = this.inputTask
  }

  addTask() {
    this.tasks.push({ title: this.inputTask, done: false});
  }

  deleteTask(task: Task) {
    // TODO(HACER EL ELIMINAR)}
    const index = this.tasks.indexOf(task , 0);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
    console.log(`Eliiminando ${task}`)
  }
}
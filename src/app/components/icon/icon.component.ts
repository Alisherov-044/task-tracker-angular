import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent {
  @Input() icon!: string | 'delete';
  @Output() click = new EventEmitter();

  onClick(): void {
    this.click.emit();
  }
}

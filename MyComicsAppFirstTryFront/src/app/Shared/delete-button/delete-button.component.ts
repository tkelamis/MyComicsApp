import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.css'
})
export class DeleteButtonComponent {
  @Input() comic: any;
  @Output() delete = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  showConfirm: boolean = false;

  toggleConfirm() {
    this.showConfirm = !this.showConfirm;
  }

  confirmDelete() {
    this.delete.emit(this.comic);
    this.showConfirm = false;
  }

  cancelDelete() {
    this.cancel.emit();
    this.showConfirm = false;
  }
}

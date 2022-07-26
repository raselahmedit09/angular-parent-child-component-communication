import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.css']
})
export class AddElementComponent implements OnInit {
  @Output() addNewElementEvent = new EventEmitter<{ elementName: string, elementContent: string }>();
  @Output() addNewBlueprintEvent = new EventEmitter<{ elementName: string, elementContent: string }>();

  name: string = '';
  content: string = '';

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onAddElement() {
    if (!this.isValid()) {
      return;
    }

    this.addNewElementEvent.emit({
      elementName: this.name,
      elementContent: this.content
    });

    this.afterSaveEvent();
  };

  onAddBlueprint() {

    if (!this.isValid()) {
      return;
    }

    this.addNewBlueprintEvent.emit({
      elementName: this.name,
      elementContent: this.content
    });

    this.afterSaveEvent();
  };

  isValid() {
    if (!this.name || !this.content) {
      this.toastr.warning("Please enter name and content!", "This is Warning")
      return false;
    }
    return true;
  };

  afterSaveEvent() {
    this.name = '';
    this.content = '';
    this.toastr.success("Data shown successfully!", "Save succeeded!")
  };
}



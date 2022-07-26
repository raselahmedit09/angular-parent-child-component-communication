import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parent Child Communication';
  elementList = [{ type: 'element', name: 'Testserver', content: 'Just a test!' }];

  onElementAdded(entity: {elementName: string, elementContent: string}) {
    this.elementList.push({
      type: 'element',
      name: entity.elementName, 
      content: entity.elementContent,
    });
  };

  onAddBluprit(entitiy:{elementName: string, elementContent: string}) {
    this.elementList.push({
      type: 'blueprint',
      name: entitiy.elementName, 
      content: entitiy.elementContent,
    });
  };

};

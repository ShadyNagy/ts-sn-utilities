import { Component } from '@angular/core';
import { ApiResponse } from './models/response';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-debouncer-example';
  inputCode = '';
  list = [];

  constructor(private dataService: DataService) {}

  search(event: any): void {
    this.dataService.getFilteredByCode(event)
      .subscribe((response: ApiResponse) => {
        if (response != null) {
          this.list = response.results;
        }
      });
  }
}

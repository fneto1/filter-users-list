import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  filterOption: IFilterOptions = {
    name: '',
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };
  statusList = [
    { description: '', value: undefined },
    { description: 'Ativo', value: true },
    { description: 'Inativo', value: false },
  ];

  @Output() onFilterEmit = new EventEmitter<IFilterOptions>();
  onFilter() {
    this.onFilterEmit.emit(this.filterOption);
  }
}

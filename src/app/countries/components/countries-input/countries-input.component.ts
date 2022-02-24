import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-countries-input',
  templateUrl: './countries-input.component.html',
  styles: [],
})
export class CountriesInputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  term: string = '';

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe({ next: (term) => this.onDebounce.emit(term) });
  }
  search() {
    this.onEnter.emit(this.term);
  }
  keyPressed() {
    this.debouncer.next(this.term);
  }
}

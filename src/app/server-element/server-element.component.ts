import { Component, 
        OnInit, 
        Input, 
        OnChanges,
        SimpleChanges,
        DoCheck,
        AfterContentInit, 
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy
       } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content:string}
  @Input() name: string

  constructor() {
    console.log('constructor called')
   }

   ngOnChanges(changes: SimpleChanges) {
    console.log('ngChanges called!')  
    console.log(changes)
   }

  ngOnInit() {
    console.log('ngOnInit called')
  }

  ngDoCheck() {
    console.log('ngDoCheck called')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called')
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit is called')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked is called')
  }

  ngOnDestroy() {
    console.log('DESTROYY!!!')
  }

}

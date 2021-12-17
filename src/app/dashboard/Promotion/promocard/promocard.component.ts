import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-promocard',
  templateUrl: './promocard.component.html',
  styleUrls: ['./promocard.component.css']
})
export class PromocardComponent implements OnInit {
  @Input() name!:number;
  @Input() numbers!:number;
  constructor(private route: ActivatedRoute) { }

  

  ngOnInit(): void {
  }

}
 
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.scss']
})
export class SetupPageComponent implements OnInit {

  quantity;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.quantity = this.usersService.quant;
  }

  onChange() {
    this.usersService.setQuantity(+this.quantity);
    console.log(this.quantity);
  }

}

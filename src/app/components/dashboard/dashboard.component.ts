import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allOrders:any[]=[];

  constructor(public authService: AuthService,
    public router: Router) { }

  ngOnInit(): void {
    this.authService.getAllOrders().subscribe((res:any)=>{
      this.allOrders=res
      console.log(this.allOrders,'Allorders');
      //this.router.navigate(['user/']);
    })
  }

}

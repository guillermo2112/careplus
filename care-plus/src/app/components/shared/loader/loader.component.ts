import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
 
  ngOnInit(): void {
    //redirect_home();
  }
  
}

function redirect_home() {
  setTimeout(function() {
      window.location.href = "https://github.com/";
  }, 3000); // 5000 milisegundos = 5 segundos
}

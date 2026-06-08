import { Component } from '@angular/core';
import { Router,RouterModule,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}

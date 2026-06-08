import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences = [
    '4+ years of Java Backend Development',
    'Spring Boot REST API Development',
    'Microservices Architecture',
    'Spring Security and JWT Authentication'
  ];
}

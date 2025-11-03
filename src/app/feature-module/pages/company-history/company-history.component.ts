import { Component } from '@angular/core';

@Component({
  selector: 'app-company-history',
  templateUrl: './company-history.component.html',
  styleUrl: './company-history.component.css'
})
export class CompanyHistoryComponent {
timelineData = [
    {
      year: '2015',
      title: 'Entered the medical device and aesthetic beauty industry',
      description: 'Began accumulating clinical experience.',
      position: 'left'
    },
    {
      year: '2017',
      title: 'Initiated Product Development',
      description: 'Based on 10 years of clinical data in plastic surgery and beauty.',
      position: 'right'
    },
    {
      year: '2019',
      title: 'Expanded Global Reach',
      description: 'Entered Middle East and Africa; began building international networks.',
      position: 'left'
    },
    {
      year: '2021',
      title: 'Strengthened Indian Partnerships',
      description: 'Collaborated in India’s medical sector and conducted local research.',
      position: 'right'
    },
    {
      year: '2026',
      title: 'Advanced Manufacturing',
      description: 'Completed cleanroom facility in India; began K-Medical product production.',
      position: 'left'
    },
    {
      year: '2026',
      title: 'Launched Education Services',
      description: 'Introduced K-Bio training programs and expanded R&D center operations.',
      position: 'right'
    },
    {
      year: '2027',
      title: 'Vision 2030 Announced',
      description: 'Actively expanding exports across Asia and Africa under Vision 2030 initiative.',
      position: 'left'
    }
  ];
}

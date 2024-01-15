import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css'],
  animations: [
    trigger('slide', [
      transition('* => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('400ms ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class CardCarouselComponent implements OnInit {
  cards = [
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      image: '/assets/images/map.png',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
      image: '/assets/images/bg.png',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
      image: '/assets/images/logo1.png',
    },
  ];

  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    }, 3000); // Change card every 3 seconds
  }
}

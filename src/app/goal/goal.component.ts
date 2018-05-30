import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals = [
    new Goal(1, 'watch finding nemo', 'finding nemo is an awesome movie involving fishes'),
    new Goal(2, 'Buy cookies', 'cookies is a type of food created from flour'),
    new Goal(3, 'watch donkey kong', 'donkey kong is a great movie involving donkeys'),
    new Goal(4, 'play far cry 3', 'far cry 3 is a game that is played in first person'),
    new Goal(5, 'play monkey games', 'monkey games involves climbing trees'),

  ]

  constructor() { }

  ngOnInit() {
  }

}

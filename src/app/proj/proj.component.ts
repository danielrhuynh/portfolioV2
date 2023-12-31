import { Component } from '@angular/core';
import { ProjCardComponent } from '../proj-card/proj-card.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjCardComponent],
  templateUrl: './proj.component.html',
  styleUrl: './proj.component.scss'
})
export class ProjectsComponent {
  constructor(public dialogRef: MatDialogRef<ProjectsComponent>) { }
  selfParking = {
    title: 'Self-Parking Robot',
    description: `This was my capstone project for MTE-121 (Digital Computation). We designed, constructed, and
    programmed an integrated EV3 Mindstorm Robot with <span class="colouredText">RobotC</span> that uses a few
    different sensors to actively search for a suitable parking spot in its line of sight, and perform a parallel park.`,
    roles: ['Project Manager', 'Developer'],
    imageUrl: '../../assets/thumbnails/mte121Thumbnail.png'
  };

  liftBro = {
    title: 'LiftBro',
    description: `LiftBro is an electron application that allows you to teach a ML model what several excerises look
    like by demonstration, and then have LiftBro track your workout and log time spent on different
    movements! This was the biggest project I've developed and a great chance to learn to
    about ML and CV using <span class="colouredText">TensorFlow</span> and <span class="colouredText">PoseNet</span>.`,
    roles: ['Project Manager', 'Developer'],
    imageUrl: '../../assets/thumbnails/liftbroThumbnail.png'
  };

  ros = {
    title: 'ROS Motor Controller Driver',
    description: `A <span class="colouredText">ROS</span> driver that publishes and subscribes to a motors status
    (temperature, voltage), speed, and max-speed.
    I built the driver with <span class="colouredText">C++</span> and wrapped it in <span
    class="colouredText">ROS: Noetic</span>.
    I got super comfortable working in <span class="colouredText">Docker</span> and <span
    class="colouredText">Linux</span> environments
    during this project.`,
    roles: ['Project Manager', 'Developer'],
    imageUrl: '../../assets/thumbnails/rosDriverThumbnail.png'
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

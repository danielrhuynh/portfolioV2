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
  mlpModule = {
    title: 'MLP NBA Points Predictor',
    description: `This project aims to apply a Multilayer Perceptron (MLP) for sports betting, specifically focusing on NBA games. 
    <span class="colouredText">Pandas</span> was used for data manipulation, <span class="colouredText">NumPy</span> for numerical operations, 
    and <span class="colouredText">scikit-learn</span> for implementing the MLP model. To improve model performance, the feature space was expanded by importing cleaned NBA game data.
    The MLP was constructed using scikit-learn's <span class="colouredText">MLPRegressor</span>. The model was trained to predict the total points scored in NBA games, a key factor in sports betting. 
    The project involved splitting the data into training and validation sets, training the MLP model, 
    and evaluating its performance using metrics like mean absolute error and R² score. 
    The results were then analyzed and visualized to assess the model's accuracy and reliability in predicting game outcomes. I also wrote a paper about the calculus behind the MLP model, and
    how it can be applied to sports betting.`,
    roles: ['Project Manager', 'Developer'],
    imageUrl: '../../assets/thumbnails/mlpThumbnail.png',
    learnMoreUrl: `https://drive.google.com/file/d/10Ox9kfGaGSPsDhkgY5H1KwC_MI0ZZxbC/view?usp=sharing`
  };

  liftBro = {
    title: 'LiftBro',
    description: `LiftBro is an <span class="colouredText">Electron</span> application that empowers users to train a machine learning model with their own exercise demonstrations. 
    This application utilizes the trained model to track and log workout activities, focusing on movements like jumping jacks, pushups, and squats.
    The project is built using a combination of <span class="colouredText">Node.js and React.js</span>, with React Router DOM for navigation. 
    The core functionality of LiftBro hinges on <span class="colouredText">TensorFlow and PoseNet</span>, 
    which are used for the machine learning and pose estimation aspects of the application. This combination of technologies allowed me to create a seamless 
    and interactive workout tracking tool. By leveraging Electron, I was able to create a cross-platform desktop application, ensuring accessibility and ease of use. 
    The integration of TensorFlow and PoseNet demonstrates my skills in implementing machine learning models and handling real-time data processing and pose estimation.`,
    roles: ['Project Manager', 'Developer'],
    imageUrl: '../../assets/thumbnails/liftbroThumbnail.png',
    learnMoreUrl: `https://github.com/Danryanh7/liftbro`
  };

  watoRos = {
    title: 'Autonomous Goal-Oriented Controller',
    description: `I developed and implemented a robotic control node using <span class="colouredText">ROS2</span>, 
    integrated with the <span class="colouredText">Foxglove</span> visualization tool. The primary objective was to enable a robot to autonomously navigate towards a user-defined goal position. 
    Utilizing Foxglove's 3D panel, To ensure the robot's movement was relative to its own coordinate frame, 
    I employed ROS2's TF2 (Transform Library) for converting global coordinates into the robot's frame. 
    The core of the robotic control relied on a simple proportional controller, fine-tuned by implementing separate linear and angular components for movement and rotation control. 
    The control commands, calculated based on the positional error and predefined constants, were sent as geometry_msgs::msg::Twist messages to the robot through the "/cmd_vel" topic. 
    This project not only solidified my understanding of ROS2 and its transformative capabilities but also demonstrated my ability to integrate different technologies for effective 
    robotic control.`,
    roles: ['Developer'],
    imageUrl: '../../assets/thumbnails/watoThumbnail.png',
    learnMoreUrl: `https://github.com/WATonomous/wato_asd_training`
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

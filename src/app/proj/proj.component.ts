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
    <span class="colouredTextProj">Pandas</span> was used for data manipulation, <span class="colouredTextProj">NumPy</span> for numerical operations, 
    and <span class="colouredTextProj">scikit-learn</span> for implementing the MLP model. To improve model performance, the feature space was expanded by importing cleaned NBA game data.
    The MLP was constructed using scikit-learn's <span class="colouredTextProj">MLPRegressor</span>. The model was trained to predict the total points scored in NBA games, a key factor in sports betting. 
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
    description: `LiftBro is an <span class="colouredTextProj">Electron</span> application that empowers users to train a machine learning model with their own exercise demonstrations. 
    This application utilizes the trained model to track and log workout activities, focusing on movements like jumping jacks, pushups, and squats.
    The project is built using a combination of <span class="colouredTextProj">Node.js and React.js</span>, with React Router DOM for navigation. 
    The core functionality of LiftBro hinges on <span class="colouredTextProj">TensorFlow and PoseNet</span>, 
    which are used for the machine learning and pose estimation aspects of the application. This combination of technologies allowed me to create a seamless 
    and interactive workout tracking tool. By leveraging Electron, I was able to create a cross-platform desktop application, ensuring accessibility and ease of use. 
    The integration of TensorFlow and PoseNet demonstrates my skills in implementing machine learning models and handling real-time data processing and pose estimation.`,
    roles: ['Project Manager', 'Developer'],
    imageUrl: '../../assets/thumbnails/liftbroThumbnail.png',
    learnMoreUrl: `https://github.com/danielrhuynh/liftbro`
  };

  watoRos = {
    title: 'LiDar Object Detection Node',
    description: `This was a really, really cool one. We wanted to replace our TAO-PointPillars LiDar object detection model with something that 
    more closely mirror the specifications and performance of our production LiDAR systems. To do so, I encapsulated <span class="colouredTextProj">OpenPCDet</span>
    in a <span class="colouredTextProj">ROS2-humble</span> node to handle point cloud rosbag feeds, enabling real-time bounding box predictions 
    broadcast via the <span class="colouredTextProj">Foxglove</span> WebSocket protocol for instant visualization.
    I also created a utility to convert <span class="colouredTextProj">PyTorch</span> tensors into PointCloud2 messages, integrating LiDar data with bounding-box predictions through dual 
    transformation matrices and adapted <span class="colouredTextProj">OpenPCDet's</span> visualization tools to support 
    <span class="colouredTextProj">VoxelNeXt</span> prediction rendering without a native <span class="colouredTextProj">X-11</span> server, using <span class="colouredTextProj">XVFB</span>. 
    This project was a testament to the power of collaboration and I'm looking forward to continuing our journey towards transforming the future of transportation :)`,
    roles: ['Developer'],
    imageUrl: '../../assets/thumbnails/watoLidarThumbnail.png',
    learnMoreUrl: `https://github.com/WATonomous/wato_monorepo`
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

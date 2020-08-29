import React, {Fragment} from 'react';
import './Steepers.css';
import {Helmet} from "react-helmet";

import Layout from '../../../../Components/Layout/Layout';

function App() {
  return (
    <Fragment>
        <Helmet>
          <title>Steppers - iOS Swift | TheCodeClass</title>
        </Helmet>

    <Layout mainTitle = "Home"
            longText = "How to create a Steppers?"
            keyText = "Steppers - iOS Swift"
            youtubesrc = "https://www.youtube.com/embed/B0NtAFf4bvU">
      <img src = "https://github.com/Sweekwang/TheCodeClass---img-storage/blob/master/iOS%20Reference/Components/Steppers/steppers.png?raw=true"
           alt = "Steppers"
           style = {{width: '130px'}}></img>
      <p>
      Stepper is a two-ways button that allowed users to click on to increase the value or 
      or decrease the value in a fixed amount. It displays plus signs and a mins signs. These signs can be
      changed. Stepper allows user to input numbers quickly by increasing or decreasing it.
      </p>
      <p>For stepper, you state the <b>maximum and minimum values.</b> For example, 1 to 10. 
      Moreover, you have to state the whether is it a <b>wraps or not.</b> If wraps are true, it means 
      that if a user increase the value beyond the maximum values for example 11, it will set to the
      minimum value, (1 in this example) and vice versa. </p>
      <h3> How to create a Stepper?</h3>
      <p><b className = "step">Step 1: </b> In Main.storyboard file, click on the + icon to open the Object Library window and drag and drop a stepper on the view.</p>
      <img src = "https://github.com/Sweekwang/TheCodeClass---img-storage/blob/master/iOS%20Reference/Components/Steppers/Search%20Stepper.png?raw=true"
           alt = "Steppers on Object Library window. Search steppers"
           className = "landscapeImage"></img>

      <br/> <br/> <br/>
      <p><b className = "step">Step 2:</b> Click on the Attributes Inspector icon or go to Choose View ➤ Inspectors ➤ Show Attributes Inspector.
      You will be able to see <b>attributes available for a stepper.</b></p>

      <table>
        <thead>
          <tr>
            <th className = "thSpacing1">Attributes</th>
            <th className = "thSpacing">Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className = "thSpacing1">Value</th>
            <th className = "thSpacing">is the current value to start off with. In default it is 0.</th>
          </tr>
          <tr>
            <th className = "thSpacing1">Minimum</th>
            <th className = "thSpacing">is minimum value or the lowest value it can go. In default it is 0.</th>
          </tr>
          <tr>
            <th className = "thSpacing1">Maximum</th>
            <th className = "thSpacing">is Maximum value or the highest value it can go. In default it is 100.</th>
          </tr>
          <tr>
            <th className = "thSpacing1">Step</th>
            <th className = "thSpacing">is the increment or decrement value. In default it is 1.</th>
          </tr>
          <tr>
            <th className = "thSpacing1">Autorepeat</th>
            <th className = "thSpacing">is the increment or decrement value. In default it is 1.</th>
          </tr>
          <tr>
            <th className = "thSpacing1">Continuous</th>
            <th className = "thSpacing">is clicked means that users are allowed to hold the value down to increase.</th>
          </tr>
          <tr>
            <th className = "thSpacing1">Wrap</th>
            <th className = "thSpacing">is not checked means that if the value go beyond the minimum or maximum value. It 
         will stop increasing or decreasing while checked means that if the if the value is beyond the minimum
         value (0), it will convert it to the maximum (100) and vice versa.</th>
          </tr>

        </tbody>
      </table>
        <img src = "https://github.com/Sweekwang/TheCodeClass---img-storage/blob/master/iOS%20Reference/Components/Steppers/Stepper%20Inspector%20panel.png?raw=true"
             alt = ""
             className = "nearSquareImage"
        />

    </Layout>
    </Fragment>
  );
}

export default React.memo(App);

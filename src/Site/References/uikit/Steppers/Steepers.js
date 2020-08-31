import React, {Fragment} from 'react';
import './Steepers.css';
import {Helmet} from "react-helmet";

import Layout from '../../../../Components/Layout/Layout';
import SwiftCodeBlock from '../../../../Components/SwiftCodeBlock/SwiftCodeBlock';

function App() {
  return (
    <Fragment>
        <Helmet>
          <title>Steppers - iOS Swift | TheCodeClass</title>
        </Helmet>

    <Layout mainTitle = "iOS References"
            longText = "How to create a Steppers?"
            keyText = "Steppers - iOS Swift"
            youtubesrc = ""
            downloadHref = "222."
            referenceHref = "https://developer.apple.com/documentation/uikit/uistepper">

      <br/>
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

      <br/> <br/>
      <p id = "attributes"><b className = "step">Step 2:</b> Click on the Attributes Inspector icon or go to Choose View ➤ Inspectors ➤ Show Attributes Inspector.
      You will be able to see <b>attributes available for a stepper.</b> Change accordingly to the properties you want.</p>

      <table>
        <thead>
          <tr>
            <th className = "column1">Attributes</th>
            <th className = "thSpacing">Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className = "column1">Value</th>
            <th className = "column2">is the current value to start off with. In default it is 0.</th>
          </tr>
          <tr>
            <th className = "column1">Minimum</th>
            <th className = "column2">is minimum value or the lowest value it can go. In default it is 0.</th>
          </tr>
          <tr>
            <th className = "column1">Maximum</th>
            <th className = "column2">is Maximum value or the highest value it can go. In default it is 100.</th>
          </tr>
          <tr>
            <th className = "column1">Step</th>
            <th className = "column2">is the increment or decrement value. In default it is 1.</th>
          </tr>
          <tr>
            <th className = "column1">Autorepeat</th>
            <th className = "column2">is the increment or decrement value. In default it is 1.</th>
          </tr>
          <tr>
            <th className = "column1">Continuous</th>
            <th className = "column2">is clicked means that users are allowed to hold the value down to increase.</th>
          </tr>
          <tr>
            <th className = "column1">Wrap</th>
            <th className = "column2">is not checked means that if the value go beyond the minimum or maximum value. It 
         will stop increasing or decreasing while checked means that if the if the value is beyond the minimum
         value (0), it will convert it to the maximum (100) and vice versa.</th>
          </tr>
        </tbody>
      </table>
        <img src = "https://github.com/Sweekwang/TheCodeClass---img-storage/blob/master/iOS%20Reference/Components/Steppers/Stepper%20Inspector%20panel.png?raw=true"
             alt = ""
             className = "nearSquareImage"
             
        />
        <span id = "attributescode"/>

      <p><b className = "step">Step 3:</b> Connect your stepper to ViewController.swift file. (Click on the stepper, hold down the Control key, 
      and drag from the stepper to the ViewController.swift file relase and a popup window appears.)</p>
      <p>Choose the following parameters: connection equals <b>IBOutlet</b>, type equals <b> UISteppers</b> and give a name to it. </p>
      <SwiftCodeBlock>
      <span className = "purple">@IBOutlet weak var </span><span className ="blue">stepperName:</span> <span className = "purpleLight">UIStepper!</span>
      </SwiftCodeBlock>

      <p>Changing the properties with code: <a href = "/references/ios/uikit/stepper-creation#attributes">click here</a> to see the meaning of the properties</p>
      <SwiftCodeBlock>
      <span className = "blue">stepperName</span>.<span className ="purpleLight">minimumValue</span> = <span className = "darkblue">6</span> <br/>
      <span className = "blue">stepperName</span>.<span className ="purpleLight">maximumValue</span> = <span className = "darkblue">20</span> <br/>
      <span className = "blue">stepperName</span>.<span className ="purpleLight">stepValue</span> = <span className = "darkblue">2</span> <br/>
      <span className = "blue">stepperName</span>.<span className ="purpleLight">isContinuous</span> = <span className = "purple">true</span> <br/>
      <span className = "blue">stepperName</span>.<span className ="purpleLight">autorepeat</span> = <span className = "purple">true</span> <br/>
      <span className = "blue">stepperName</span>.<span className ="purpleLight">wraps</span> = <span className = "purple">false</span> <br/>
      </SwiftCodeBlock>

      <p><b className = "step" id = "IBAction">Step 3.1:</b> Accessing the stepper's value:</p>
      <p>You can get the current value of the steppers by using: </p>
      <SwiftCodeBlock>
        <span className ="purpleLight">print</span>( <span className = "blue">stepperName</span>.<span className ="purpleLight">value</span> )
      </SwiftCodeBlock>
      <p><b className = "step">Step 4:</b> IBAction: Detecting a user click on the stepper.(Click on the stepper, hold down the Control key, 
      and drag from the stepper to the ViewController.swift file release and a popup window appears.)</p>
      <p>Choose the following parameters: connection equals <b>Action</b>, type equals <b> UISteppers</b> and give a name to it. <br/>
      The example below change the UILabel to the text accordingly to current stepper value.</p>
      <SwiftCodeBlock>
      <span className = "purple">@IBAction func </span><span className ="blue">stepperChanged(</span> <span className = "purpleLight">_</span> sender: <span className = "purple">UIStepper</span>)&#123;<br/>
      <span className ="blue tab">textLabel</span>.<span className = "purpleLight">text</span> = <span className = "red">"</span>( <span className ="purpleLight">stepperName</span>.<span className = "purpleLight">value</span> )<span className = "red">"</span>
      <br/> &#125;
      </SwiftCodeBlock>
    </Layout>
    </Fragment>
  );
}

export default React.memo(App);

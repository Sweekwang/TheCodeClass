import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";

import LayoutWO from '../Components/Layout wo video/LayoutWOVideo';
import './Home.css'

function App() {
  return (
    <Fragment>
        <Helmet>
          <title>TheCodeClass</title>
        </Helmet>

    <LayoutWO mainTitle = "Home"
            longText = "Coding Lesson for free"
            keyText = "TheCodeClass"
            downloadHref = ""
            referenceHref = "">
    <p>TheCodeclass teach you programming language from the very basic. You will be learning Coding
    in the most easy ways.</p>

    <p>In TheCodeClass, you are able to learn Swift for iOS Development, Java or Kolin for Android
      Development and Python for Data Science.</p>

    <p>If you do not know what language to start, which the video above.</p>
    <br/>
    <br/>
    <div className = "content">
      <h2>Mobile App Development</h2>
      <p>TheCodeClass create easy to read step by step API references and mobile development courses
      focus on native programming language for iOS and Android.</p>

      <p>All the Lesson created are well structured.</p>
        <a href = "/">Learn iOS Development</a>
        <a href = "/">Learn Android Development</a>
        <a href = "/">Android Reference</a>
        <a href = "/">iOS Reference</a>
        <a href = "/">Get Certification</a>
    </div> 
    <br/>
    <div className = "content">
      <h2>Data Science courses</h2>
      <p>Data science is an field focused on getting knowledge from data sets. The field encompasses analysis, preparing data for analysis, 
      and presenting findings. Important Data Science skills are statistical programming language, like R or Python but 
      over here, we only teach you Python. </p>
      <p>Lastly, you will also be learning Data Wrangling, Data Visualization, and Machine Learning.</p>
        <a href = "/">Learn Basic Python</a>
        <a href = "/">Learn NumPy and Pandas</a>
        <a href = "/">Learn Data Visualization</a>
        <a href = "/">Learn Machine Learning</a>
        <a href = "/">Get Certification</a>
    </div>

    </LayoutWO>
    </Fragment>
  );
}

export default React.memo(App);

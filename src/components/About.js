import React from 'react';

const iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/x3IPaasspg8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }

const About = () => {
    return(
      <div>
      <div class ="container text-center">
        <h2 class="mb-3 text-dark">STEM Camp Spring 2019</h2>
      </div>
      <div className ="container-frame">
        <Iframe iframe={iframe} />
      </div>
      <div className ="container">
          <div className ="row">
              <div className ="col-2">

              </div>
              <div classname ="col-8">
                  <p className ='mt-3 mb-0 card-text text-secondary'>On May 2nd, 2019, we hosted “STEM Camp Spring” for 77 youth from 12th Avenue Elementary School. In addition to the activites done during STEM Camp Winter, they learned about and played with a competition robot made by Byrne Creek Community School’s FIRST Robotics Team. They also experimented with new chemical reactions.</p>
              </div>
              <div className ="col-2">
            
              </div>
          </div>
      </div>
  </div>
    )
}

export default About
{/*
<div class="card-body">
  
  </div>
*/}

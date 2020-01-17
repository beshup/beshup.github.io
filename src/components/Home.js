import React from 'react';

const iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/1oZC4Q2BpDs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
  }

const Home = () => {
    return(
    <div>
        <div class ="container text-center">
            <h3 class="mb-3 text-dark">STEM Camp Winter 2018</h3>
      </div>
        <div className ="container-frame">
          <Iframe iframe={iframe} />
        </div>
        <div className ="container">
            <div className ="row">
                <div className ="col-2">

                </div>
                <div classname ="col-8">
                    <p className ='mt-3 mb-0 card-text text-secondary'>We hosted a STEM Camp for 73 youth from Stride Avenue Community School. Programming robots, building catapaults, and playing with fire were all part of the day. The end of the day was highlighted by the kids piping up and telling us that they never considered that "doing math could be so fun". Although they wouldn't realize it, those little comments made our day, highlighting the exact goal we were trying to achieve.</p>
                </div>
                <div className ="col-2">
              
                </div>
            </div>
        </div>
    </div>

    )
}

export default Home
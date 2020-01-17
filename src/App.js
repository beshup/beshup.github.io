import React from 'react';
import './App.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SimpleImageSlider from 'react-simple-image-slider'
import {Slider} from 'react-simple-image-carousel'
import ImageSlider from 'ac-react-simple-image-slider'
import img1 from './images/one.JPG'
import img2 from './images/2.JPG'
import img3 from './images/3.JPG'
import img4 from './images/4.JPG'
import img5 from './images/5.JPG'
import img6 from './images/6.JPG'
import img7 from './images/7.JPG'
import img8 from './images/8.JPG'
import img9 from './images/9.JPG'
import img10 from './images/10.JPG'
import img11 from './images/11.JPG'
import img12 from './images/12.JPG'
import img13 from './images/13.JPG'
import img14 from './images/14.JPG'
import img16 from './images/16.JPG'
import img17 from './images/17.JPG'
import img18 from './images/18.JPG'
import img19 from './images/19.JPG'
import img20 from './images/20.JPG'
import img21 from './images/21.JPG'
import img22 from './images/22.JPG'
import img23 from './images/23.JPG'
import appimg from './images/app.png'
import stemcampimg from './images/stemcamp.png'
import extraimg from './images/extra.png'
import logo from './images/logo.jpg'
import ishan from './images/ishan.jpg'
import andy from './images/andy.png'
import gio from './images/gio.jpg'
import liam from './images/liam.jpg'
import nathan from './images/nathan.jpg'
import sajida from './images/sajida.jpg'
import justin from './images/justin.jpg'
import danyaal from './images/danyaal.jpg'
import jay from './images/jay.jpg'
import talha from './images/talha.jpg'
import wayne from './images/wayne.jpg'
import jun from './images/jun.jpg'
import Navbar from './components/navbar'
import {HashRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'


function App() {

  const images = [
    { src: img1},
    { src: img2},
    { src: img3},
    { src: img4},
    { src: img5},
    { src: img6},
    { src: img7},
    { src: img8},
    { src: img9},
    { src: img10},
    { src: img11},
    { src: img12},
    { src: img13},
    { src: img14},
    { src: img16},
    { src: img17},
    { src: img18},
    { src: img19},
    { src: img20},
    { src: img21},
    { src: img22},
    { src: img23}
  ];


  /*
 const images = [
  {url: "https://www.chewy.com/petcentral/wp-content/uploads/2018/05/lucky-corgi-butts-x-596-444x.jpg"},
  {url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225919/Pembroke-Welsh-Corgi-On-White-01.jpg"},
  {url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Welchcorgipembroke.JPG/1200px-Welchcorgipembroke.JPG"}
 ]*/

  return (
    <HashRouter basename ="/">
    <div className="App">
       
  <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top py-3" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">EDMONDS ENGINEERED</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto my-2 my-lg-0">
        <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#goals">Our Goals</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#stemcamps">STEM Camps</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#upcomingprojects">Upcoming Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#aboutus">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#team">Team</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <header class="masthead">
    <div class="container h-100">
      <div class="row h-100 align-items-center justify-content-center text-center">
        <div class="col-lg-10 align-self-end">
          <h1 class="text-uppercase text-white font-weight-bold">EDMONDS ENGINEERED</h1>
        </div>
        <div class="col-lg-8 align-self-baseline">
          <p class="text-white-75 font-weight-light mb-5">Fostering STEM in the Edmonds Community</p>
          <a class="btn btn-primary btn-xl js-scroll-trigger pt-2 pb-3" href="#aboutus">Where is Edmonds?</a>
        </div>
      </div>
    </div>
  </header>

  {/*
  <section class="page-section bg-primary" id="about">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 class="text-white mt-0">We've got what you need!</h2>
          <hr class="divider light my-4"/>
          <p class="text-white-50 mb-4">Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!</p>
          <a class="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
        </div>
      </div>
    </div>
  </section>
  */}

  <section class="page-section" id="goals">
    <div class="container">
      <h2 class="text-center mt-0">Our Goals</h2>
      <div class="row">
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <i class="fa fa-4x fa-space-shuttle text-primary mb-4"></i>
            <h3 class="h4 mb-2">Promote Interest in STEM</h3>
            <p class="text-muted mb-0">We believe strongly in a culture that rewards interest in STEM. We strive to increase enthusiasm and curiosity around the STEM fields, especially in youth.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <i class="fa fa-4x fa-book fa-laptop-code text-primary mb-4"></i>
            <h3 class="h4 mb-2">Improve Academic Success</h3>
            <p class="text-muted mb-0">We believe that a large part of disinterest in STEM subjects is due to a lack of academic success in it. Whether it be attributed to inadequate resources, or outdated educational measures, we want to improve the scholastic success in our community – notably by implementing modern methods of teaching.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <i class="fa fa-4x fa-globe text-primary mb-4"></i>
            <h3 class="h4 mb-2">Implement Forward Thinking Initiatives</h3>
            <p class="text-muted mb-0">In a rapidly digitized and automated world, communities that lack the resources to keep updated, suffer the most consequences. Before every project, we ask ourselves, "Can we use this initiative to expose the youth in our community to some sort of forward-thinking technology or practice?" It is why we love to create in the mobile realm - where we're given a platform that can reach everybody.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5">
            <i class="fa fa-4x fa-heart text-primary mb-4"></i>
            <h3 class="h4 mb-2">Include Everyone</h3>
            <p class="text-muted mb-0">Lastly, our ultimate goal is to not only reach as many people as we can, but to create a cycle of growth. We want to see the youth that experience our STEM Camps, and our other projects, to eventually join the organization three, four, five years from now.</p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="page-section bg-dark text-white" id="stemcamps">
    <div class ="container text-center">

    <div class="container text-center" align="center">
      <h2 class="mb-4">STEM Camps</h2>
    </div>
    <div class ='row'>
    <div class="card text-center shadow p-3 mb-5 bg-white rounded pl-2">
    <Navbar />
    <div class ="card-body">
    <Route exact path ="/" component={Home}/>
    <Route path ="/about" component={About}/>
  </div>
  </div>
</div>
      {/*
      <div class = 'col-md-6'>
      <p class ="display-5">STEM Camp Spring 2019</p>
        <div class ='container-frame'>
          <iframe width="470" height="264" src="https://www.youtube.com/embed/x3IPaasspg8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>       
      </div>
      */}
    </div>

  <div class ="container mt-5 mb-0">
    <div class ="row mt-5">
      <div class ="col-2">

      </div>
      <div class ="col-8 shadow p-3 mb-5 bg-white rounded pl-2">
      <ImageSlider duration='5' showArrows='false' data={images} />
      </div>
      <div class ="col-2">
        
      </div>
    </div>
  </div>

  </section>
  

<div class="container" id="upcomingprojects">


  <h1 class="my-5 display-4">Upcoming Projects
  </h1>

  <div class="row">
    <div class="col-lg-4 col-sm-6 mb-4">
      <div class="card shadow p-3 mb-5 bg-white rounded pl-2 h-100">
        <img class="card-img-top" src={appimg} alt=""/>
        <div class="card-body">
          <h4 class="card-title">
            <p>BC Science Notes</p>
          </h4>
          <p class="card-text">BC Science Notes is a mobile application designed to supplement the BC high school Grade 11/Grade 12 science curriculum. It is a study tool, consisting of 6 courses, summarizing Physics, Biology, and Chemistry into notes to be studied wherever – at home, on the go, or before a test. </p>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-sm-6 mb-4">
      <div class="card shadow p-3 mb-5 bg-white rounded pl-2 h-100">
        <img class="card-img-top" src={stemcampimg} alt=""/>
        <div class="card-body">
          <h4 class="card-title">
            <p>STEM Camp Winter/Spring 2020</p>
          </h4>
          <p class="card-text">Our STEM Camps are coming back, this time bigger, better and for more students!</p>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-sm-6 mb-4">
      <div class="card shadow p-3 mb-5 bg-white rounded pl-2 h-100">
        <img class="card-img-top" src={extraimg} alt=""/>
        <div class="card-body">
          <h4 class="card-title">
            <p>Extra</p>
          </h4>
          <p class="card-text">Extra is a tutoring service provided by Edmonds Engineered. </p>
        </div>
      </div>
    </div>
  </div>

</div>

<section class="page-section bg-light text-black" id="aboutus">
  <div class ="row">
  <div class ="col-md-6">
    <div class ="container">
      <img src={logo} class="shadow p-3 mb-5 bg-white rounded" alt="Logo" height="100%" width="100%"/>
    </div>
  </div>
  <div class ="col-md-6">
    <div class ="container">
    <div class="card">
      <div class ="card-header">
        <p class="display-4">ABOUT US</p>
      </div>
      <div class="card-body text-secondary">
      <p>Edmonds Engineered is an organization dedicated to improving the state of STEM in the Edmonds locality, located in South Burnaby.</p> 
      <p>Edmonds Engineered recognizes the vast opportunities available in (Science – Technology – Engineering – Mathematics) fields, and is designed to help introduce the community to these opportunities. The organization is dedicated towards preparing youth for the future, by hosting camps, integrating technology into education, providing a tutoring service, and more. </p>
      <p>We launched in 2018, consisting of Byrne Creek Community School students, and we are currently looking for third-year members. Contact us at edmondsengineered@gmail.com to apply.</p>
      <p>Get to know the Edmonds neighborhood:</p>
      <div class="m-2"><a class="btn btn-success p-2" href="https://www.google.com/search?ei=8uYhXq-KBZartQaW6Y6gDg&q=edmonds+community+centre&oq=edmonds+community+centre&gs_l=psy-ab.3..0l10.2598.6601..6658...1.2..0.86.776.10......0....1..gws-wiz.......0i71j0i22i30j33i21j33i160j0i22i10i30.aZdunEHMk1o&ved=0ahUKEwivy83xjIvnAhWWVc0KHZa0A-QQ4dUDCAs&uact=5">Edmonds Community Centre</a></div>
      <div class="m-2"><a class="btn btn-success p-2" href="https://www.google.com/search?q=byrne+creek&oq=byrne+creek&aqs=chrome..69i57j0l7.2247j0j9&sourceid=chrome&ie=UTF-8">Byrne Creek Community School</a></div>   
      </div>
      </div> 
    </div>
  </div>
  </div>
</section>

<section class ="bg-white" id="team">
  <div class ="container mt-5">
      <h1>TEAM</h1>
  </div>
  <div class ="container mt-5 mb-0">
      <h4>Second Year Members</h4>
  </div>

<div class="container mt-4">
  <div class="row">
    <div class="col-xl-2 col-md-3 col-s-4 mb-4">
      <div class="card border-0 shadow">
        <img src={gio} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Giovanni Ferraresso</h5>
          <div class="card-text text-black-50">Co-President</div>
        </div>
      </div>
    </div>
    <div class="col-xl-2 col-md-3 col-s-4 mb-4">
      <div class="card border-0 shadow">
        <img src={jay} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Jay Park</h5>
          <div class="card-text text-black-50">Co-President</div>
        </div>
      </div>
    </div>
    <div class="col-xl-2 col-md-3 col-s-4 mb-4">
      <div class="card border-0 shadow">
        <img src={justin} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Justin Viacrusis</h5>
          <div class="card-text text-black-50">Technology Director | Lead Developer</div>
        </div>
      </div>
    </div>
    <div class="col-xl-2 col-md-3 col-s-4 mb-4">
      <div class="card border-0 shadow">
        <img src={talha} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Mehmet Talha Orenli</h5>
          <div class="card-text text-black-50">Chemistry Director | Developer</div>
        </div>
      </div>
    </div>
    <div class="col-xl-2 col-md-3 col-s-4 mb-4">
      <div class="card border-0 shadow">
        <img src={jun} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Jun Choi</h5>
          <div class="card-text text-black-50">Engineering Director</div>
        </div>
      </div>
    </div>
    <div class ="container mt-5 mb-2">
      <h4>First Year Members</h4>
  </div>
    <div class="col-xl-2 col-md-3 col-s-4 mb-4">
      <div class="card border-0 shadow">
        <img src={ishan} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Ishan Ghimire</h5>
          <div class="card-text text-black-50">Founder | CEO | Lead Developer</div>
        </div>
      </div>
    </div>
    <div class="col-xl-2 col-md-3 col-s-4 mb-4">
      <div class="card border-0 shadow">
        <img src={nathan} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Nathan Cerone</h5>
          <div class="card-text text-black-50">Chemistry Co-Director | Developer</div>
        </div>
      </div>
    </div>
    <div class="col-xl-2 col-md-3 col-s-4 mb-4">
      <div class="card border-0 shadow">
        <img src={andy} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Andy Wu</h5>
          <div class="card-text text-black-50">Technology Co-Director | Developer</div>
        </div>
      </div>
    </div>
    <div class="col-xl-2 col-md-3 col-s-4 mb-4">
      <div class="card border-0 shadow">
        <img src={liam} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Liam Waldie</h5>
          <div class="card-text text-black-50">Chemistry Co-Director | Developer</div>
        </div>
      </div>
    </div>
    <div class="col-xl-2 col-md-3 col-s-4 mb-4">
      <div class="card border-0 shadow">
        <img src={wayne} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Wayne Ma</h5>
          <div class="card-text text-black-50">Technology Co-Director | Developer</div>
        </div>
      </div>
    </div>
    <div class="col-xl-2 col-md-3 col-s-4 mb-4">
      <div class="card border-0 shadow">
        <img src={sajida} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Sajida Chowdhury</h5>
          <div class="card-text text-black-50">Engineering Co-Director</div>
        </div>
      </div>
    </div>
    <div class="col-xl-2 col-md-3 col-s-4 mb-4">
      <div class="card border-0 shadow">
        <img src={danyaal} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
          <h5 class="card-title mb-0">Danyaal Patel</h5>
          <div class="card-text text-black-50">Engineering Co-Director</div>
        </div>
      </div>
    </div>
  </div>

      
</div>
</section>


  {/* 
  <section class="page-section" id="contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 class="mt-0">Let's Get In Touch!</h2>
          <hr class="divider my-4"/>
          <p class="text-muted mb-5">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
          <i class="fa fa-phone fa-3x mb-3 text-muted"></i>
          <div>+1 (202) 555-0149</div>
        </div>
        <div class="col-lg-4 mr-auto text-center">
          <i class="fa fa-envelope fa-3x mb-3 text-muted"></i>
          <a class="d-block" href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a>
        </div>
      </div>
    </div>
  </section>
  */}
  
  <footer class="bg-light py-5">
    <div class="container">
      <div class="small text-center text-muted">Copyright &copy; 2020 Edmonds Engineered</div>
    </div>
  </footer>
    </div>
    </HashRouter>
  );
}

export default App;

import React from 'react'
import Image from 'next/image'
import Navbar1 from './mahilex/Navbar'
import Footer from "./mahilex/Footer"
import { Carousel ,img,} from 'react-bootstrap'
import  mahilex from "./mahilex.jpg"

const Home = () => {
  return (
    <>
    <Navbar1/>
     <div className="container">
     <div style={{marginTop:"10px"}} className="row">
     <Carousel>
  <Carousel.Item interval={1000}>
    <img style={{height:"500px", width:"1400px", objectFit:"cover"}}
      className="d-block w-80"
      src=" https://source.unsplash.com/user/c_v_r" alt="Free unsplash image"
      
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img style={{height:"500px", width:"1400px", objectFit:"cover"}}
      className="d-block w-80"
      src= "https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg"
      alt="Second slide" height="100px"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:"500px", width:"1400px", objectFit:"cover"}}
      className="d-block w-100"
      src=" https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg?w=1575"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     </div>
     </div>
    <Footer/>

    </>
  )
}

export default Home
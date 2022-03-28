import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    marginTop:"100px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

export default function Footer() {
  return (

    <div style={phantom}>
    <div style={style}> 
    <MDBFooter bgColor='dark' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{color:'whitesmoke', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light' href='https://affectionate-boyd-5e4604.netlify.app/'>
          Mahilex.in
        </a>
      </div>
    </MDBFooter>
    </div>
    </div>
  );
}
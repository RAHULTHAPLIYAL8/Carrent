import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout';
import { Link } from 'react-router-dom';
import './Home.css';
import { data } from './dataimage.js';
import House from './House.jsx';
import veg from './veg.png';
import nonveg from './nonveg.png';
import { Typography, colors, Card, CardActionArea, CardContent, Box } from '@mui/material';
import Scroll from "../Components/Scroll.js";
import Service from './Service.js';
import { images } from "../Components/data2.js";


const Home = () => {
  const [image, setImage] = useState(data[0]);

  useEffect(() => {
    let i = 0;

    const iterate = () => {
      i = (i + 1) % data.length;
      setImage(data[i]);
    };

    const intervalId = setInterval(iterate, 4000); 
    return () => clearInterval(intervalId); 
  }, []); 

  return (
    <Layout>
      <div className="Home" style={{ backgroundImage: `url(${image})` }}>
        <div className="headercontainer">
          <h1>Fitfood</h1>
          <p style={{ filter: 'brightness(300%)' }}>Stay Healthy Eat Healthy :)</p>
          <Link to="/menu">
            <button>Order now</button>
          </Link>
        </div>
      </div>
      <House/>
      <Box style={{marginTop:{sm:"5vh",xs:"5vh"} }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{color:colors.green[800],display:{sm:"none",xs:"none",lg:"block"}}} textAlign={'center'}>
        SERVICES
       </Typography>
      <Service/>
      </Box>
      <Typography variant="h2" component="h1" gutterBottom sx={{color:"green",margin:"5vh"}} textAlign={'center'}>
           POPULAR ITEMS
          </Typography>
      <Scroll images={images} speed={100000} />
      <div className="card-box">
      
        <Card 
          sx={{ 
            width: 500,
            height: "300px",
            m: 3, 
            backgroundColor: colors.green[50],
            backgroundImage: `url(${veg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',  
            opacity: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white"
          }}
        >
          {/* Card Action Area and Content */}
          <CardActionArea sx={{ zIndex: 1 }}>
            <CardContent>
              <Typography variant="h1" gutterBottom component="div" textAlign={"center"}>
                Veg
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* Non-Veg Card */}
        <Card 
          sx={{ 
            width: 500,
            height: "300px",
            m: 3, 
            backgroundColor: colors.green[50],
            backgroundImage: `url(${nonveg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative', 
            opacity: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white"
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography variant="h1" gutterBottom component="div" textAlign={"center"}>
                Non-Veg
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      
    </Layout>
  );
};

export default Home;

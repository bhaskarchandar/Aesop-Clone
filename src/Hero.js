import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Hero.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Search from "@material-ui/icons/Search"
import DragHandleIcon from "@material-ui/icons/DragHandle";

const Hero = () => {
  return (
    <div className="region">
      <div className="hero" >
        <div className={`nav`} style={{backgroundColor:"#333"}}>
          <div className="nav-left">
            <p>Skin Care</p>
            <p>Body and Hand</p>
            <p>Hair</p>
            <p>Fragrance</p>
            <p>Home</p>
            <p>Kits and Travel</p>
            <p>Gifts</p>
            <p>Read</p>
            <p>Stores</p>
            <Search style={{color:"white"}} />
          </div>
          <div className="nav-right">
            <p>Login</p>
            <p>Cart</p>
          </div>
        </div>
        <div className={`mob-nav`}>
          <div className="nav-left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Aesop_logo_2013.svg"
              alt=""
            />
          </div>
          <div className="nav-right">
            <Search />
            <p>Cart</p>
            <DragHandleIcon />
          </div>
        </div>
        <div className="logo" style={{marginTop:"30px"}}>
          <img
            src="https://images.ctfassets.net/u1nb1km7t5q7/6J9KwYBNF1FPiSMJn1dPYw/fa6aa7396274ec183ba59cd947328e83/Aesop_OpenGraph_Default_1200x630px.jpg"
            alt=""
            style={{height:"84px"}}
          />
        </div>
        <section className="section1">
          <div className="hero-text">
            <h1>In Boldness, a bond</h1>
            <p>
            Celebrating the power of self-expression this Lunar New Year through gestures replete with character.
            </p>
            <Button variant="outlined">
              <span className="btn-hero">Browse all gifts</span>
              <ArrowForwardIcon style={{color:"white"}}/>
            </Button>
          </div>

      

        </section>
      </div>
      
    </div>
  );
};

export default Hero;

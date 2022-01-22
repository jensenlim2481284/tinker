import React from "react";
import styled from "styled-components";
import Gear from "../../assets/img/picture/gear.png";

export default function Pricing() {
  return (

      <div id='roadmap' className='container'>
            <h1> Our Roadmap</h1>
            <img src={Gear} id='gear1' />
            <img src={Gear} id='gear2' />
            <div className="timeline">
                <div className="column">
                    <div className="title">
                        <h1> NOV 2021 </h1>
                        <h2> Launch Tinker Union </h2>
                    </div>
                    <div className="description">
                        <p> Launch 3,333 tinker inspired apes to the community. SOLD OUT IN 2 MINUTES. </p>
                    </div>
                </div>
                <div className="column">
                    <div className="title">
                        <h1> DEC 2021 </h1>
                        <h2> Launch Tinker Union </h2>
                    </div>
                    <div className="description">
                        <p> Launch 3,333 tinker inspired apes to the community. SOLD OUT IN 2 MINUTES. </p>
                    </div>
                </div>
                <div className="column">
                    <div className="title">
                        <h1> JAN 2022 </h1>
                        <h2> Launch Tinker Union </h2>
                    </div>
                    <div className="description">
                        <p> Launch 3,333 tinker inspired apes to the community. SOLD OUT IN 2 MINUTES. </p>
                    </div>
                </div>
            </div>
      </div>
    
  );
}


import {
    Project3DLuxuryPageWrapper

  } from "../../styles/Project3DLuxuryStyles";
  import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
  import { useRouter } from "next/router";
  import { useStateContext } from "../../lib/context";
  import {AiFillHeart, AiOutlineHeart}  from 'react-icons/ai';
  import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
  import Tooltip from 'react-bootstrap/Tooltip';
  import {RiFolderDownloadFill,RiShareBoxFill}  from 'react-icons/ri';

  
  import { useEffect, useState } from "react";
  import Image from "next/image";
  import toast, { Toaster } from 'react-hot-toast';
  import ReactPlayer from 'react-player/lazy'

  export default function ProjectName() {



  
    return (
      <Project3DLuxuryPageWrapper>


            <div className="projectInfoArea">

            <h2>3D LUXURY : GARDEN</h2>

            <h3>PROJECTS: <span>PERSONAL</span></h3>
            <h3>SERVICES: <span>3D, MOTION DESIGN, ART DIRECTION</span></h3>
            <p>3D Luxury gardens is a project made of multiple scenes <br/>
            for luxury brands like Louis Vuitton, Chanel & Dior.</p>

            </div>

            <div className="video-container">
                <ReactPlayer
                    url="https://vimeo.com/740952649 " // Replace with your video URL
                    className="react-player"
                    width="100%" // Set width to 100%
                    height="100%" // Set height to 100%
                   //controls // Show video controls
                    playing={true} loop={true}
                />
            </div>



            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/3d/luxury/lv/fullwidthLVimg.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="twoImgFullWidth">

            <img
                        src="../../assets/img/portfolio/3d/luxury/lv/2_Halfwith_Louisvuitton.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />

            <img
                                    src="../../assets/img/portfolio/3d/luxury/lv/3_Halfwith_Louisvuitton.png" // Replace with your image URL
                                    alt="Example Image"
                                    className="responsive-image"
                                />

            </div>

            <div className="twoImgFullWidth">

            <img
                        src="../../assets/img/portfolio/3d/luxury/dior/1_3_Halfwith_dior.jpg" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />

            <img
                                    src="../../assets/img/portfolio/3d/luxury/dior/2_3_Halfwith_dior.jpg" // Replace with your image URL
                                    alt="Example Image"
                                    className="responsive-image"
                                />

            </div>

            <div className="twoImgFullWidth">

            <img
                        src="../../assets/img/portfolio/3d/luxury/chanel/1_Halfwith_Chanel.jpg" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />

            <img
                                    src="../../assets/img/portfolio/3d/luxury/chanel/2_Halfwith_Chanel.jpg" // Replace with your image URL
                                    alt="Example Image"
                                    className="responsive-image"
                                />

            </div>

            <div className="bottomProjectPage">

                <div className="buttons">

                    <button>LAST PROJECT</button>
                    <button>NEXT PROJECT</button>

                </div>

                <div className="socialmedia">
                    <p>icon</p>
                    <p>icon</p>
                    <p>icon</p>
                    <p>icon</p>
                </div>

                <div className="contactArea">
                    <a href="#">contactseiyafx@gmail.com</a>
                </div>

            </div>

     

           
   

      
        </Project3DLuxuryPageWrapper>
      
 
    );
  }

  
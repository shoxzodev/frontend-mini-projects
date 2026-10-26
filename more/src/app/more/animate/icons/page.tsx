"use client";

import { useEffect, useState } from 'react';

// battery icons:
import Battery0BarIcon from '@mui/icons-material/Battery0Bar';
import Battery2BarIcon from '@mui/icons-material/Battery2Bar';
import Battery4BarIcon from '@mui/icons-material/Battery4Bar';
import Battery5BarIcon from '@mui/icons-material/Battery5Bar';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';

// star icons:
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import GradeIcon from '@mui/icons-material/Grade';

// folder icons:
import { FolderOpenOutlined, FolderOutlined } from '@ant-design/icons';

// emojis icons:
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

type emotions = "smile" | "upset";

export default function AnimateIcons() {
    const [percent , setPercent] = useState<number>(0); // 0 , 25 , 50 , 75 , 100
    const [star , setStar] = useState<number>(0); // 0, 50 , 100
    const [folder , setFolder] = useState<boolean>(false);
    const [emotion , setEmotion] = useState<emotions>("smile");

    useEffect(() => {
          const stopBattery = setInterval(() => {
            
            // battery:
            switch(percent) {
                case 0: 
                    setPercent(25)
                break;

                case 25: 
                    setPercent(50)
                break;

                case 50: 
                    setPercent(75)
                break;

                case 75: 
                    setPercent(100)
                break;

                case 100: 
                    setPercent(0)
            }

            // star:
            switch(star) {
                case 0: 
                    setStar(50)
                break;

                case 50: 
                    setStar(100)
                break;

                default: 
                    setStar(0)
            }

            // emotions:
            setEmotion(current => current == "smile" ? "upset" : "smile");
            setFolder(current => current ? false : true);

            clearInterval(stopBattery)

        } , 1000)
    } , [percent] );
    
    return (
        <div className="p-5">
            <span>
                battery: <br />
                { percent == 0 ? <Battery0BarIcon sx={{rotate:"90deg" , fontSize:"2rem"}} /> : 
                  percent == 25 ? <Battery2BarIcon sx={{rotate:"90deg" , fontSize:"2rem"}} /> :
                  percent == 50 ? <Battery4BarIcon sx={{rotate:"90deg" , fontSize:"2rem"}} /> :
                  percent == 75 ? <Battery5BarIcon sx={{rotate:"90deg" , fontSize:"2rem"}} /> : 
                  <BatteryFullIcon sx={{rotate:"90deg" , fontSize:"2rem"}} /> 
                }
            </span>

            <div>
                <span>star:</span>
                <div>
                    { star == 0 ? <StarBorderIcon /> :
                      star == 50 ? <StarHalfIcon /> :
                      <GradeIcon />
                    }
                </div>
            </div>
            <div>
                <span>folder:</span>
                <div>
                    {
                        folder ? <FolderOutlined /> : <FolderOpenOutlined />
                    }
                </div>
            </div>
             <div>
                <span>emojis:</span>
                <div>
                    {
                        emotion == "smile" ? <SentimentSatisfiedAltIcon  /> : <SentimentVeryDissatisfiedIcon />
                    }
                </div>
            </div>
        </div>
    )
}
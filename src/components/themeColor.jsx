//this is the theme color componenet, will add 6 colors with 20% each gradient animatioin.
//inspired by June Pride month!

import styled, { css } from "styled-components";

const ThemeackgroundColor = styled.div`
  height: 1000vh;
  width: 100%;
  color: white;
  max-width: 100%;

  /* Chrome, Safari, Opera */
-webkit-animation-name:myfirst;
-webkit-animation-duration:20s;
-webkit-animation-timing-function:linear;
-webkit-animation-delay:0s;
-webkit-animation-iteration-count:infinite;
-webkit-animation-direction:alternate;
-webkit-animation-play-state:running;
/* Standard syntax */
animation-name:LGBTFlagColors;
animation-duration:20s;
animation-timing-function:linear;
animation-delay:0s;
animation-iteration-count:infinite;
animation-direction:alternate;
animation-play-state:running;
}


/* Animation keyframe */
/* Chrome, Safari, Opera */
@-webkit-keyframes LGBTFlagColors
{
0%   {background: #FF0018; left:0px; top:0px;}
20%  {background: #FFA52C; left:0px; top:0px;}
40%  {background: #FFFF41; left:0px; top:0px;}
60%  {background: #008018; left:0px; top:0px;}
80%  {background: #0000F9; left:0px; top:0px;}
100% {background: #86007D; left:0px; top:0px;}
}

/* Standard syntax */
@keyframes LGBTFlagColors
{
0%   {background: #FF0018; left:0px; top:0px;}
20%  {background: #FFA52C; left:0px; top:0px;}
40%  {background: #FFFF41; left:0px; top:0px;}
60%  {background: #008018; left:0px; top:0px;}
80%  {background: #0000F9; left:0px; top:0px;}
100% {background: #86007D; left:0px; top:0px;}
}
`;

const ThemebuttonColor = styled.button`
  display: inline-flex;
  height: 40px;
  width: fit-content;
  border: 2px solid #fff;
  margin: 20px;
  padding: 5px 20px;
  color: #333;
  background: #fff;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.8em;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    animation: LGBT-Flag-animation 2.5s ease-in-out infinite;
    background: linear-gradient(
      70deg,
      #ff0018,
      #ffa52c,
      #ffff41,
      #008018,
      #0000f9,
      #86007d
    );
    color: white;
    font-weight: bold;
    border-color: white;
  }
  /* Hover Animation (rainbow) */
  @keyframes LGBT-Flag-animation {
    0% {
      background: linear-gradient(
        70deg,
        #ff0018,
        #ffa52c,
        #ffff41,
        #008018,
        #0000f9,
        #86007d
      );
    }
    20% {
      background: linear-gradient(
        120deg,
        #ff0018,
        #ffa52c,
        #ffff41,
        #008018,
        #0000f9,
        #86007d
      );
    }
    40% {
      background: linear-gradient(
        150deg,
        #ff0018,
        #ffa52c,
        #ffff41,
        #008018,
        #0000f9,
        #86007d
      );
    }

    60% {
      background: linear-gradient(
        150deg,
        #ff0018,
        #ffa52c,
        #ffff41,
        #008018,
        #0000f9,
        #86007d
      );
    }
    80% {
      background: linear-gradient(
        170deg,
        #ff0018,
        #ffa52c,
        #ffff41,
        #008018,
        #0000f9,
        #86007d
      );
    }

    100% {
      background: linear-gradient(
        190deg,
        #ff0018,
        #ffa52c,
        #ffff41,
        #008018,
        #0000f9,
        #86007d
      );
    }
  }
`;

const ThemeContentColor = styled.button`
  background: blue;
  width: 100%;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export { ThemeackgroundColor, ThemebuttonColor, ThemeContentColor };

import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({children}) => {

  const title = "Box Office";
  const subtitle = "Are you looking for a movie or an actor ?";
  return (
    
    <div>
    <Title title = {title} subtitle = {subtitle}/>
    <Navs />
    {children}
    </div>
  )
}

export default MainPageLayout;

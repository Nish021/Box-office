import React, {useState }from 'react';
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {

  //defining state
  const [input , setInput ] = useState('');


//defining update method for setInput
  const onInputchange = (event) => {
    setInput(event.target.value);
  }

//mapping Enter button with search
  const onClickEnter = (event) => {
    // console.log(event.keyCode);
    if(event.keyCode === 13)
    {
      onSearch();
    }
    
  }

//onclick event and API fetch
  const onSearch = (event) => {
  
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    .then(response => response.json())
    .then(result => console.log(result));
  }

  return (
    <div>
      <MainPageLayout>
        <input type="text" onChange = {onInputchange} onKeyDown = {onClickEnter} value = {input} placeholder="Search for Movie or Actor"/>
        <button type="button" onClick = {onSearch} >Search</button>
      </MainPageLayout>
    </div>
  )
}

export default Home

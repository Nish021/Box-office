import React, {useState }from 'react';
import MainPageLayout from '../components/MainPageLayout';
import {apiGet} from '../misc/config';

const Home = () => {

  //defining state for Input
  const [input , setInput ] = useState('');
  //defining state for Results
  const [result , setResult] = useState(null);


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
  const onSearch = () => {
  
    apiGet(`/search/shows?q=${input}`).then(result => {
         setResult(result);
    });
    // fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    // .then(response => response.json())
    // .then(result => (
    //   setResult(result)
    //   // console.log(result)
    // ));
  }

  //SeeResults Fuction - we will able to see results
  const seeResults = () => {

    //doing conditional rendering here
    if(result && result.length === 0 )
    {
      return  <div>Not Results</div> ;
    
    }
    if(result && result.length > 0)
    {
      return <div>
        { result.map ( (item) => (
          <div key={item.show.id}>{item.show.name}</div>
        ))}
      </div>;
    }

    return null;
  }


  return (
    <div>
      <MainPageLayout>
        <input type="text" onChange = {onInputchange} onKeyDown = {onClickEnter} value = {input} placeholder="Search for Movie or Actor"/>
        <button type="button" onClick = {onSearch} >Search</button>
        {seeResults()}
      </MainPageLayout>
    </div>
  )
}

export default Home

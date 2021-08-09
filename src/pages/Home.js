import React, {useState }from 'react';
import MainPageLayout from '../components/MainPageLayout';
import {apiGet} from '../misc/config';

const Home = () => {

  //defining state for Input
  const [input , setInput ] = useState('');
  //defining state for Results
  const [result , setResult] = useState(null);
  //defining state for onSearchresults
  const [radioSearch , setRadioSearch] = useState("shows");
  //defining to make one radio button active  at a time 
  const isShowsSearch = radioSearch === 'shows';

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

  //defining method for onsearchradio button
  const onSearchRadio = (event) => {
    setRadioSearch(event.target.value)
    console.log(event.target.value) //same as for onInput change
  }

//onclick event and API fetch
  const onSearch = () => {
  
    apiGet(`/search/${radioSearch}?q=${input}`).then(result => {
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
      
      return  <div>No Results</div> ;
    
    }
    if(result && result.length > 0)
    {
      return result[0].show ? 
      result.map ( (item) => (
        <div key={item.show.id}>{item.show.name}</div>
      )) :
      result.map ( (item) => (
        <div key={item.person.id}>{item.person.name}</div>
      ))
    }

    return null;
  }


  return (
    <div>
      <MainPageLayout>
        <input type="text" onChange = {onInputchange} onKeyDown = {onClickEnter} value = {input} placeholder="Search for Movie or Actor"/>
        <button type="button" onClick = {onSearch} >Search</button>

      {/* //radio button */}
      <div>
      <label htmlFor = "search-shows">
        Shows
        <input type = "radio" id = "search-shows" onChange={onSearchRadio} value="shows" checked= {isShowsSearch}/>
      </label>

      <label htmlFor =  " search-actors" >
        Actors
        <input type = "radio" id = "search-actors" onChange={onSearchRadio} value="people" checked= {!isShowsSearch}/>
      </label>
      </div>

        {seeResults()}
      </MainPageLayout>
    </div>
  )
}

export default Home

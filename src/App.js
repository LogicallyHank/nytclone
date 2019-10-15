import React from 'react';
import logo from './logo.svg';
import './App.css';

let post =[{
datetitle:  <div class="flex-box">
<p class='date'>Jan. 30, 2018</p>
<p class='headtitle'>THE SHIFT</p>
<div class="break"></div>
</div>,
title: <p class='title'>Kodak's Dubious Blockchain Gamble</p>,
summary:"What's a 130-year-old photo company doing dabbling in cryptocurrency? Either revolutionizing digital rights management or trying to make a quick buck.",
author:"By KEVIN ROOSE",
image:'https://cdn3.imggmi.com/uploads/2019/10/10/529ea1201a9786138d35977e66195ead-full.jpg',
line: <hr/>
},
{
datetitle: <div class="flex-box">
<p class='date'>Jan. 30, 2018</p>
<p class='title'>Taiwan Retaliates Against Chinese Airlines, Hampering Lunar New Year Travel</p>
<div class="break"></div>
</div>,
title:'',
summary:'Taiwan, pushing baxk over encroachment on Taiwan Strait airspace, may leave thousands without flights home for the holiday.',
author:'By CHRIS HORTON',
image:'https://cdn3.imggmi.com/uploads/2019/10/10/605e713f91fb6ff221b8485fa618970b-full.jpg',
line: <hr/>
},
{
datetitle:<div class="flex-box">
<p class='date'>Jan. 30, 2018</p>
<p class='title'>New Jersey Embraces an Idea it Once Rejected: Make Utilities Pay to Emit Carbon</p>
<div class="break"></div>
</div>,
title:'',
summary:'Democratic governors nationwide are taking steps to tax or price emissions within their borders, even as Trump dismantles federal climate policy.',
author:'By BRAD PLUMER',
image:'https://cdn3.imggmi.com/uploads/2019/10/10/8460a9635d49a560ceb339ad7f934d39-full.jpg',
}]

function App() {
  return(
    <div>
     <Art date={post[0].datetitle} title={post[0].title} summary={post[0].summary} author={post[0].author} image={post[0].image} line={post[0].line}/> 
      <Art date={post[1].datetitle} summary={post[1].summary} author={post[1].author} image={post[1].image} line={post[1].line}/> 
     <Art date={post[2].datetitle} summary={post[2].summary} author={post[2].author} image={post[2].image}/> 
     </div>
  );
  }

function Art(props) {
  return (
  <div class="text">
    <div class='pic'> <img src={props.image}/> </div>
    {props.date}
    <div class="flex-box">
       <p class='date'></p>
       {props.title}
      <div class="break"></div>
      <p class='date'></p>
      <p class="summary">{props.summary}</p>
      <div class="break"></div>
      <p class='date'></p>
      <p class="author">{props.author}</p>
      <div class="break"></div>
      {props.line}
    </div>
  </div>
  );
}

export default App;

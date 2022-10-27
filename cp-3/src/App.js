import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import ColorForm from "./ColorForm.js"

function App() {
    
    return (<div> <ColorForm/> </div>);
    
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<colorForm />);

export default App;

         
                /*<div class = "page">
                    <h1>Find the Perfect Pallete</h1>
                    <div class="color-search">
                        <legend>Get a random color, or specify the hue, amount, and whether 
                        you want light or dark color(s)</legend>
                    
                        <div class="search-fields">
                            <div class="hue-button">
                              <label>Select a Hue</label>
                              <select id="hue-selector">
                                <option value="random">Random</option>
                                <option value="red">Red</option>
                                <option value="pink">Pink</option>
                                <option value="purple">Purple</option>
                                <option value="navy">Navy</option>
                                <option value="blue">Blue</option>
                                <option value="aqua">Aqua</option>
                                <option value="green">Green</option>
                                <option value="lime">Lime</option>
                                <option value="yellow">Yellow</option>
                                <option value="orange">Orange</option>
                              </select> 
                              <input id="submitButton" type="submit" value="Get Colors" class='button'></input>
                           </div>
                        <div class='num-type'>
                          <div class='title-enter'>
                            <label>Number</label>
                            <select id="amount-selector">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                              <option value="13">13</option>
                              <option value="14">14</option>
                              <option value="15">15</option>
                            </select>
                          </div>
                          <div class='title-enter'>
                            <label>Light</label>
                            <input type="checkbox" id="light"></input>
                          </div>
                          <div class='title-enter'>
                            <label>Dark</label>
                            <input type="checkbox" id="dark"></input>
                          </div>
                        </div>
                    </div>
                </div>
          
            
                <div id="colorResults">
                  <div class='color-chip'>
                    <div class='color-block' id='block-1'></div>
                    <p>#E2A2CC</p>
                  </div>
                </div>
            </div> 
        */
        
        /*handleSubmit(event) {
            event.preventDefault();
            var url = "https://x-colors.herokuapp.com/api/random";
            if (this.state.hue != "Random") {
                url += "/" + selectedHue;
            }
            else {
                url += "/all";
            }
            url += "?number=" + numColors;
            
            if (this.state.light === true && this.state.dark === false) {
                url += "&type=light";
            }
            else if (this.state.light === false && this.state.dark === true) {
                url += "&type=dark";
            }
        
            fetch(url) 
                .then((data) => {
                    return (data.json());
                })
                .then((colorData) => {
                    console.log(colorData);
                    this.setState({hexColor: json.hex}); 
                    //The tricky thing for me is that the API just returns the color for the item with a hex color, 
                    //rgb color, and hsl color. The intricacy of the app comes from generating multiple colors and 
                    // handling the conditions of hue, amount, and light or dark
            });
            */

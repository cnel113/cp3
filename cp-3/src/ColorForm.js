import React from "react";
import ReactDOM from "react-dom";

class ColorForm extends React.Component {
        constructor(props) { 
            super(props); 
            this.state = {
                hue: "Random",
                number: 1,
                light: false,
                dark: false,
                hexColor: "#E2A2CC",
                colors: [{hex: "#E2A2CC", rgb:  "rgb(226, 162, 204)", hsl: 'hsl(321, 52%, 76%)'}]
            };
            
            this.handleInput = this.handleInput.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleColorSelection = this.handleColorSelection.bind(this);
            this.handleNumSelection = this.handleNumSelection.bind(this);
            this.handleLightSelection = this.handleLightSelection.bind(this);
            this.handleDarkSelection = this.handleDarkSelection.bind(this);
        }
        
        handleInput(event) {
            this.setState({hue: event.target.value});
        }
        
        handleColorSelection(event) {
            this.setState({hue:event.target.value});
        }
        
        handleNumSelection(event) {
            this.setState({number: event.target.value});
        }
        
        handleLightSelection(event) {
            this.setState({light: event.target.checked});
        }
        
        handleDarkSelection(event){
            this.setState({dark: event.target.checked});
        }
        
        
        handleSubmit(event) {
            event.preventDefault();
            var url = "https://x-colors.herokuapp.com/api/random";
            if (this.state.hue !== "Random") {
                url += "/" + this.state.hue;
            }
            else {
                url += "/all";
            }
            url += "?number=" + this.state.number;
            
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
                    this.setState({colors: colorData}); 
            });
       }
    
        render () {
            console.log("Render Array");
            console.log( this.state.colors);
            
            var background = {backgroundColor: this.state.colors.hex};
            var colorBlocks = "";
            if (this.state.colors.length < 2) {
                ////style{{backgroundColor:this.state.colors.hex}}
                colorBlocks = 
                <div className='color-chip'> 
                    <div className='color-block' style={background}></div> 
                    <p>{this.state.colors.hex}</p>
                </div>

            }
            else {
                colorBlocks = this.state.colors.map((color) =>
                     { 
                     background = {backgroundColor: color.hex};
                     return (<div className='color-chip'> 
                        <div className='color-block' style={background}></div>
                        <p>{color.hex}</p>
                    </div>)}
                );
            }
            
            return (
                <div className = "page">
                    <h1>Find the Perfect Pallete</h1>
                    <form className="color-search" onSubmit={this.handleSubmit}>
                        <legend>Get a random color, or specify the hue, amount, and whether 
                        you want light or dark color(s)</legend>
                    
                        <div className="search-fields">
                            <div className="hue-button">
                              <label>Select a Hue</label>
                              <select id="hue-selector" onChange={this.handleColorSelection}>
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
                              <input id="submitButton" type="submit" value="Get Colors" className='button'></input>
                           </div>
                        <div className='num-type'>
                          <div className='title-enter'>
                            <label>Number</label>
                            <select id="amount-selector" onChange={this.handleNumSelection}>
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
                          <div className='title-enter'>
                            <label>Light</label>
                            <input type="checkbox" id="light" onClick={this.handleLightSelection}></input>
                          </div>
                          <div className='title-enter'>
                            <label>Dark</label>
                            <input type="checkbox" id="dark" onClick={this.handleDarkSelection}></input>
                          </div>
                        </div>
                    </div>
                </form>
          
            
                <div id="colorResults">
                {colorBlocks}
                </div>
            </div> 
            );
        }
    }
export default ColorForm;
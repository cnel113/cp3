import './App.css';
import React from "react";
import ReactDOM from "react-dom";

function App() {
    
    class colorForm extends React.Component {
        constructor(props) { //ask what props is
            super(props); //ask what super is
            this.state = {
                hue: "Random", //make into a list of the color options
                number: 1,
                light: false,
                dark: false,
                hexColor: "#E2A2CC"
            };
            
            this.handleInput = this.handleInput.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        
        handleInput(event) { //How does it know which "event" is which? I have different buttons and different values to changes
            this.setState({hue: event.target.value}); //How do I set it based on the value if I don't know what was inputed?
        }
        
        handleSubmit(event) {
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
            
        }
    }
        
        // Do I have to set npm start and npm run build to test the page? 
        //or is it best to wait on those until I have a good working application?
        //What are the differences between React and React CLI? 
        //is it just that you can build the app and set start/run commands? 
        //It seems like the syntax is different
    }
    
    render () { //How do I dynamically render in here? 
    
        //define an element with the properties, map over list of colors to create your color elements.
    
        return ( //START with the HTML, the HTML and its functions are what calls the functions built out above. 
            
            for (let i = 0; i < numColors; i++){ //Get you use a loop in a render statement?
                let color = ""
                if (numColors === "1") {
                    color = json.hex;
                }
                else {
                    color = json[i].hex;
                }
                let chip = document.createElement('div'); 
                //One of the main benefits of React CLI is that you can just return direct
                // html elements right? just <div> <h1>Hello World</h1> </div>
                chip.classList.add('color-chip');
                let el = document.createElement('div');
                el.classList.add('color-block');
                el.style.backgroundColor = color;
                chip.appendChild(el);
                let text = document.createElement('p');
                text.innerHTML = color;
                chip.appendChild(text);
                box.appendChild(chip);
                
                
            }
        )
    }
    
    
    
    
 /* document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault();
    let colorField = document.getElementById('hue-selector');
    let selectedHue = colorField.options[colorField.selectedIndex].value;
    let amountField = document.getElementById('amount-selector');
    let numColors = amountField.options[amountField.selectedIndex].value;
    let light = document.getElementById('light').checked;
    let dark = document.getElementById('dark').checked;
    
    const box = document.getElementById('colorResults');
    box.innerHTML = ""; 
    
    let url ="https://x-colors.herokuapp.com/api/random";
    
    if (selectedHue != "random") {
        url += "/" + selectedHue;
    }
    else {
        url += "/all";
    }
    url += "?number=" + numColors;
    
    if (light === true && dark === false) {
        url += "&type=light";
    }
    else if (light === false && dark === true) {
        url += "&type=dark";
    }
    
    fetch(url) 
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
            for (let i = 0; i < numColors; i++){
                let color = ""
                if (numColors === "1") {
                    color = json.hex;
                }
                else {
                    color = json[i].hex;
                }
                let chip = document.createElement('div');
                chip.classList.add('color-chip');
                let el = document.createElement('div');
                el.classList.add('color-block');
                el.style.backgroundColor = color;
                chip.appendChild(el);
                let text = document.createElement('p');
                text.innerHTML = color;
                chip.appendChild(text);
                box.appendChild(chip);
            }
        });
            
      
  }); */
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (<colorForm />);

export default App;

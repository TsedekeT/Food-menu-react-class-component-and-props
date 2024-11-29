/* ************************************************** */
// 1. Using simple Destructuring
/* ************************************************** */

// import { Component } from "react"
// import "./App.css"
// import FoodItem from "./Components/FoodItem.jsx"
// class App extends Component {
//   render(){
 
//       return (
//         <>
//           <div className="all-container">
//               <header className="title">
//                 <h1>1. Using Simple Destructuring</h1>
//                 <h1>MyFood Menu</h1>
//                 <div></div>
//               </header>



//             <div className="foods-container">

//               <FoodItem 
//               image="https://media.cnn.com/api/v1/images/stellar/prod/190205144959-shekla-tibs.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280" 
//               title="TIBS (ጥብስ)" 
//               price="$22.99" 
//               desc="Sliced beef or lamb, pan-fried in butter, garlic and onion, tibs is
//                     one of the most popular dishes among Ethiopians. It comes in a
//                     variety of forms, varying in type, size or shape of the cuts of meat
//                     used, and can range from hot to mild or contain..."
//               />
//               <FoodItem 
//               image="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kitfo.jpg.webp" 
//               title="KITFO (ክትፎ)" 
//               price="$25.99" 
//               desc="Made from the leanest meat, kitfo is viewed as a big treat by
//                     ordinary Ethiopians, while its nutritional powers are also praised.
//                     Similar to French steak tartare, the meat is minced and warmed in a
//                     pan with a little butter, mitmita (a stronger version of berbere)..."
//               />
//               <FoodItem 
//               image="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp" 
//               title="TIMATIM SELAXA (ቲማቲም ሰላጣ)" 
//               price="$5.99" 
//               desc="Timatim Salata refers to a type of fresh Ethiopian tomato salad
//                     that’s also popular in Eritrea. It’s made with diced tomatoes,
//                     minced onions, and finely chopped peppers dressed with a mixture of
//                     berbere spices, olive oil, vinegar, and lemon juice..."
//               />
            
//             </div>
//           </div>
//         </>
//       )
//     }
// }

// export default App



/* ************************************************** */

// 2. Using Array's .map() method

/* ************************************************** */
// import React, { Component } from 'react';
// import "./App.css"
// import { userData } from './assets/userData.jsx';
// import FoodItem from "./Components/FoodItem.jsx"
// class App extends Component {
//   render() {
//     return (
//               <>
//           <div className="all-container">
//               <header className="title">
//               <h1>2. Using Array's .map() method</h1>
//                 <h1>MyFood Menu</h1>                
//                 <div></div>             
//               </header>
//             <div className="foods-container">
//             {userData.map((singleUserData, index) =>{

//                   return(
//                     <FoodItem
//                     key={index}
//                     image = {singleUserData.image}
//                     title = {singleUserData.title}
//                     price = {singleUserData.price}
//                     desc = {singleUserData.desc}
                    
//                     />
//                   )
//                 })}
//             </div>
//           </div>
//         </>
//       );
//   }
// }


// export default App;


/* ************************************************** */

// 3. Using Array's .map() method with Destructuring

/* ************************************************** */

import React, { Component } from 'react';
import "./App.css"
import { userData } from './assets/userData.jsx';
import FoodItem from "./Components/FoodItem.jsx"
import Footer from './Components/Footer.jsx'; // Import the Footer component

class App extends Component {
  render() {
    return (
      <>
        <div className="all-container">
          <header className="title">
            <h1>3. Using Array's .map() method with Destructuring</h1>
            <h1>MyFood Menu</h1>                
            <div></div>             
          </header>

          <div className="foods-container">
            {userData.map(({image, title, price, desc}, index) => {
              return (
                <FoodItem
                  key={index}
                  image={image}
                  title={title}
                  price={price}
                  desc={desc}
                />
              );
            })}
          </div>
          
          {/* Footer added here outside of the map */}
          <Footer />
        </div>
      </>
    );
  }
}

export default App;

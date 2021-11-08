import React from 'react';
import {Presentation} from "./features/presentation/Presentation";
import {Contact} from "./features/contact/Contact";

function App() {
  return (
   <div className={'app'}>
       <Presentation />
       <Contact />
   </div>
  );
}

export default App;

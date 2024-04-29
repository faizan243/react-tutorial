// import Header from './Header.js';
// import Footer from './Footer.jsx';
import { useState } from 'react';
function App() {

  const [myName, setMyName] = useState('');
  // Hook (useState)
  // use state return array of two elements
  // no1 variable
  // no2 function
  // variable we can assign anywhere
  // Function change the value of variable

  const [myRollNumber, setMyRollNumber] = useState(0);


  // const addValue = (event) => {
  //     setMyName(event.target.value)

  //     console.log("myName", myName);
  // }

  return (
    <div>

      {/* onChange={addValue} */}
      <input
        type="text"
        placeholder="Enter Name"
        value={myName}
        onChange={(event) => setMyName(event.target.value)}
      />
      <br />

      <input
        type="text"
        value={myRollNumber}
        onChange={(event) => setMyRollNumber(event.target.value)}
      />
      <br />
      Name: {myName} <br />
      Roll Number:  {myRollNumber}




      {/* <Header
        title={myObject.header.value}
        subTitle={myObject.headerSubTitle}
      >
      </Header>
      <Footer
        title={myObject.footer}>
      </Footer> */}
    </div>
  );
}

export default App;

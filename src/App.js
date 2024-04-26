import Header from './Header.js';
import Footer from './Footer.jsx';

function App() {
  let myObject = {
    header:"This is Header",
    headerSubTitle:"THis is Sub title",
    footer:"This is Footer"

  }
  return (
      <div>
        <Header 
          title={myObject.header} 
          subTitle={myObject.headerSubTitle}
          >
        </Header>

        
        <Footer 
          title={myObject.footer}>
        </Footer>
      </div>    
  );
}

export default App;

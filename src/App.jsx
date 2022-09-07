import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className = "App">
      <div className = "App-header">
        <h1>ASSIGNMENT 1</h1>
      </div>

      <div className = "Main">
        <div className="Para">
          <p>
            The below images are beautiful scenery images.
          </p>
          
        </div>
        <div className='images'>
          <img src='https://images.unsplash.com/photo-1596679593779-2c965ea8f25b?ixlib=rb-1.2.1&ixid=
                    MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBzY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=
                    format&fit=crop&w=500&q=60'></img>
          <img src='https://images.unsplash.com/photo-1506280597900-5a2569cd1bba?ixlib=rb-1.2.1&ixid=
                    MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHJvY2slMjBtb3VudGFpbnxlbnwwfDF8MHx8&auto=format&fit=
                    crop&w=500&q=60'></img>  
          <img src='https://images.unsplash.com/photo-1621114410742-f886ab91e6f4?ixlib=rb-1.2.1&ixid
                    =MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW4lMjBzY2VuZXJ5fGVufDB8fDB8fA%3D%3D&auto=
                    format&fit=crop&w=500&q=60'></img>
                  
        </div>
        <div className='App-link'>
          <a href='https://unsplash.com/s/photos/mountain-scenery'>More images</a>
        </div>
      </div>
    </div>
  );
}

export default App;

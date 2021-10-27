import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Newsletter from './Components/Newsletter';

function App() {
  console.log(process.env.MYSQL_USER);
  return (
    <div className="App">
      <Header />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import Navbar from './components/Navbar';
import About from './components/About';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <div>
        <Navbar />
        <TodoContainer />
        <Footer />
    </div>
    //   <Routes>
    //     <Route path="/" element={<TodoContainer />} />
    //     <Route path="Navbar" element={<Navbar />} />
    //     <Route path="about" element={<About />} />
    //   </Routes>
    );
  }
}

export default App;

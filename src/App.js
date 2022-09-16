import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="/" element={<TodoContainer />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>

    );
  }
}

export default App;

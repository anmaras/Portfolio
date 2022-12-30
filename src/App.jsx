import React from 'react';
import { Navbar, About } from './components/index';

function App() {
  return (
    <main className="grid">
      <section className="grid__about">
        <Navbar />
        <About />
      </section>
      <section className="grid__skills">Skills</section>
      <section className="grid__projects">Projects</section>
      <section className="grid__contact">
        <Navbar />
      </section>
    </main>
  );
}

export default App;

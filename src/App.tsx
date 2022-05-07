import React from 'react';
import Header from "./components/Header/Header";
import CoffeeList from "./components/CoffeeList/CoffeeList";

function App() {
  return (
    <>
        <Header />
        <main className="content">
            <CoffeeList />
        </main>
    </>
  );
}

export default App;

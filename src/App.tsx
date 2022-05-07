import React from 'react';
import Header from "./components/Header/Header";
import PageList from "./components/PageList/PageList";

function App() {
  return (
    <>
        <Header />
        <main className="content">
            <PageList />
        </main>
    </>
  );
}

export default App;

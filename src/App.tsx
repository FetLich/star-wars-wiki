import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from "./Table/Table";

function App() {
  return (

      <Container className="p-2">
          <div className="mt-md-3 p-2 bg-dark-subtle">
              <h1 className="header d-flex justify-content-center">
                  Welcome To Star Wars Assignment Task!
              </h1>

              <Table/>
          </div>
      </Container>
  );
}

export default App;

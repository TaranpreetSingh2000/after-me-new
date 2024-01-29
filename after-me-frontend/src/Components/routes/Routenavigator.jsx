import React ,{useState, useEffect}from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Signup from "../Signup/Signup";
import Loginfile from "../Login/Loginfile";
import Otplogin from "../Otplogin";
import Home from "../home/Home";
import Table from "../table/Table";
import Form from "../forms/Form";
import Strapidata from "../strapidata/Strapidata";


const Routenavigator = () => {
    const client = new ApolloClient(({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  }))

  const [formData, setFormData] = useState([]);

  const updateFormData = (newData) => {
    setFormData(newData);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    setFormData(storedData);

  }, []);
  return (
    <>
    <Router>
      <ApolloProvider client={client}>
        <Routes>
        debugger
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Loginfile />} />
          <Route path="/otplogin" element={<Otplogin />} />
          <Route path="/navbar" element={<Navbar/>}/>
          <Route path="/footer" element={<Footer />} />
          <Route path="/form" element={<Form updateFormData={updateFormData} />} />
          <Route path="/table" element={<Table formData={formData} />} />
          <Route path="/strapidata" element={<Strapidata />} />
        </Routes>
      </ApolloProvider>
    </Router>
  </>
  )
}

export default Routenavigator

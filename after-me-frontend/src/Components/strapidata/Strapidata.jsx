import React from 'react';
// import useFetch from '../hooks/useFetch';
import Card from '../cards/Card';
import Style from "./Strapidata.module.css";
import Navbar from '../navbar/Navbar';
import Title from "../title/Title";
import Footer from "../footer/Footer";
import { useQuery, gql } from '@apollo/client';

const REVIEWS = gql`
query GetCards {
  cards {
   data {
      id,
    
    attributes{
      title,
      icon{
        data{
          attributes{
            url,
          }
        }
      }
    }
  }
  }
}
`
const Strapidata = () => {
  // const { data, error, loading } = useFetch(`${import.meta.env.VITE_API_URL}/api/cards?populate=*`);
  const { data, error, loading } = useQuery(REVIEWS)


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!Array.isArray(data.cards.data)) {
    return <p>Data is not in the expected format</p>;
  }

  if (data.cards.data.length === 0) {
    return <p>No data found</p>;
  }

  return (
    <div className={`container ${Style.main_component}`}>
      <Navbar />
      <div className={Style.main_title}>
        <Title title="What my family should know" />
      </div>
      <div className="row">
        {data.cards.data.map(review => {
          const cardTitle = review.attributes.title;
          const cardIcon = `${import.meta.env.VITE_API_URL}${review.attributes.icon.data.attributes.url}`;

          return (
            <div key={review.id} className="col-lg-3 col-6 mt-4">
              <Card cardTitle={cardTitle} cardIcon={cardIcon} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Strapidata;

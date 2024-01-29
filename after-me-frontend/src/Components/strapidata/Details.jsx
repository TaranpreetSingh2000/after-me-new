import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Details = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch('http://localhost:1337/api/reviews/' + id);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const attributes = data.data?.attributes;

  if (!attributes) {
    return <p>Error: Data does not contain attributes</p>;
  }

  return (
    <div>
      <h4>Details Review - {id}</h4>
      <div className="items" key={data.data.id}>
        <p>Title: {attributes.title}</p>
        <p>Rating: {attributes.rating}</p>
        <p>Description: {attributes.description[0].children[0].text}</p>
      </div>
    </div>
  );
};

export default Details;

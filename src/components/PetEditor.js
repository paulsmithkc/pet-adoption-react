import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';

function PetEditor({ auth, showError }) {
  const { petId } = useParams();
  const [pet, setPet] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_URL}/api/pet/${petId}`, {
      method: 'get',
      headers: {
        authorization: `Bearer ${auth?.token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setPet(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        showError(err.message);
      });
  }, [petId, auth, showError]);

  return (
    <div>
      <h1>Pet Editor</h1>
      <div>{petId}</div>
      {pet && (
        <form>
          <div>{pet.name}</div>
          <div>{pet.species}</div>
          <div>{pet.gender}</div>
          <div>{pet.age}</div>
        </form>
      )}
    </div>
  );
}

export default PetEditor;

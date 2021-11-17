import { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';

import PetListItem from './PetListItem';

function PetList({ auth, showError }) {
  const [pending, setPending] = useState(true);
  const [items, setItems] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    setPending(true);
    setError('');

    axios(`${process.env.REACT_APP_API_URL}/api/pet/list`, {
      method: 'get',
      params: { pageSize: 1000 },
      headers: {
        authorization: `Bearer ${auth?.token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setPending(false);
        if (_.isArray(res.data)) {
          setItems(res.data);
        } else {
          setError('Expected an array.');
          showError('Expected an array.');
        }
      })
      .catch((err) => {
        console.error(err);
        setPending(false);
        setError(err.message);
        showError(err.message);
      });
  }, [auth, showError]);

  return (
    <div>
      <h1>Pet List</h1>
      {pending && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {error && <div className="text-danger mb-2">{error}</div>}
      {!pending && !error && _.isEmpty(items) && (
        <div className="mb-2">No items found.</div>
      )}
      {_.map(items, (item) => (
        <PetListItem key={item._id} item={item} />
      ))}
    </div>
  );
}

export default PetList;

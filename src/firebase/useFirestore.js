/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import db, { ROOT_COLLECTION } from './config';

const convertIntoObject = (data, mapKey) => {
  return data.reduce((result, item) => {
    result[item[mapKey]] = item;
    return result;
  }, {});
};

const useFirestore = (collection, mapKey) => {
  const [docs, setDocs] = useState({});
  const [isFSDataFetched, hideLoader] = useState(false);
  const [isError, setError] = useState(false);

  const fetchDocsObject = async () => {
    const fbCollection =
      ROOT_COLLECTION === 'prod' ? collection : `${collection}_dev`;
    try {
      const response = db.collection(fbCollection);
      const snapshot = await response.get();
      const data = snapshot.docs.map((doc) => doc.data());
      if (mapKey) {
        setDocs(convertIntoObject(data, mapKey));
      }
    } catch (e) {
      setError(true);
    }
    hideLoader(true);
  };

  useEffect(() => {
    hideLoader(false);
    setError(false);
    fetchDocsObject(collection);
  }, []);

  return { docs, isFSDataFetched, isError };
};

export default useFirestore;

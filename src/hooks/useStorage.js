import { useState, useEffect } from 'react';
import { storage } from '../firebase';

const useStorage = (file) => {
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {

    const storageRef = storage.ref(file.name);

    storageRef.put(file).on('state_changed', (snapshot) => {
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => setError(err), 
    async () => {
      const url = await storageRef.getDownloadUrl();
      setUrl(url);
    })
  }, [file]);

  return {
    progress,
    error,
    url, 
  }
}

export default useStorage;
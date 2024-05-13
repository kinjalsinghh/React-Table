import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
const LoaderButton = ({ text, loadingTime, intervalTime }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer;
    if (loadingTime) {
      timer = setTimeout(() => {
        setLoading(false);
      }, loadingTime);
    }

    return () => clearTimeout(timer);
  }, [loadingTime]);

  useEffect(() => {
    let interval;
    if (intervalTime) {
      interval = setInterval(() => {
        setLoading(true);
         setTimeout(() => {
          setLoading(false);
        }, loadingTime);
      }, intervalTime);
    }

    return () => clearInterval(interval);
  }, [intervalTime, loadingTime]);

  const handleClick = () => {
    setLoading(true);
     setTimeout(() => {
      setLoading(false);
    }, loadingTime);
  };

  return (
    <Button variant="warning" onClick={handleClick} disabled={loading}>
      {loading ?"Loading....": text}
    </Button>
  );
};

export default LoaderButton;

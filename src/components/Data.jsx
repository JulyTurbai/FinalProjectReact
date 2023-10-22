import React, { useEffect, useState } from 'react';

const Data = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
      const updateDate = () => {
        setCurrentDate(new Date());
      };

      const intervalId = setInterval(updateDate, 24 * 60 * 60 * 1000);
  
      return () => clearInterval(intervalId);
    
    }, []);
  
    const formattedDate = currentDate.toLocaleDateString('uk-UA');
  
    return (
      <div>
            { formattedDate }
      </div>
    );
};

export default Data;
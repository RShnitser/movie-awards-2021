import React, {useEffect, useState} from 'react';
import api from "../../Api/Api"
//import { useEffect, useState } from 'react/cjs/react.production.min';

const Ballot = () => {

  const [ballots, setBallots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const fetchBallots = async () => {
    //   try {
    //     setLoading(true);
    //     const response = await fetch('http://localhost:3000/api/getBallotData');
    //     if(response.ok) {
    //       const data = await response.json();
    //       setBallots(data);
    //       setLoading(false);
    //     }

    //   }
    //   catch(error) {
    //     console.error(error);
    //   }
    // }

    // fetchBallots();
    setLoading(true);
    api.getBallotData()
      .then((data) => {
        setBallots(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      })

  }, []);

  return (
    <div className='ballot'>
      {!loading ? ballots.items.map((category) => {

          return(
            <div>{category.title}</div>
          );
        }): null}
    </div>
  )
}

export default Ballot;
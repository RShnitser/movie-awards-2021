import React, {useEffect, useState} from 'react';
import api from "../../Api/Api"
import Nominee from '../Nominee/Nominee';
import Modal from '../Modal/Modal';
import "./Ballot.css";

const Ballot = () => {

  const [ballots, setBallots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
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

  const handleSubmit = () => {
    
    let valid = true;
    for(const category of ballots.items) {
      if(selected[category.title] === undefined) {
        valid = false;
        break;
      }
    }

    if(valid) {
      setModalMessage("SUCCESS");
    }
    else {
      setModalMessage("Please Vote in Every Category")
    }
    setModalOpen(true);
  }

  return (
    <div className='ballot'>
      <h3>Awards 2021</h3>
      {!loading ? ballots.items && ballots.items.map((category) => {

          return(
            <React.Fragment key={category.id}>
              <div className="category">{category.title}</div>
              <div className="ballot-grid">
                {category.items.map((nominee) => {
                  return(<Nominee
                    key={nominee.id} 
                    title={nominee.title}
                    image={nominee.photoUrL}
                    isSelected={selected[category.title] === nominee.title}
                    onClick={() => {
                      setSelected({
                        ...selected,
                        [category.title]: nominee.title
                      });
                    }}
                  />);
                })}
              </div>
            </React.Fragment>
          );
        }): null}
      <button className="ballot-submit" type="button" onClick={handleSubmit}>Submit</button>
      <Modal
          isOpen={modalOpen}
          close={setModalOpen}
          text={modalMessage}
      />
    </div>
  )
}

export default Ballot;
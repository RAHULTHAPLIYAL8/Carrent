import React from 'react';
import './Detials.css';

const Detials = (props) => {
  return (
    <div className="Details">
      <div className="vehicle-detail-band__detail">
        <div className="vehicle-detail-band__detail-title">
          <h1 style={{ textAlign: 'center' }}>{props.name}</h1>
        </div>
        <div className="Details-content">
          <div className="car-details">
            <h3 className="car-details__title" style={{ textAlign: 'center' }}>Details</h3>
            <ul className="car-details__list">
              <li className="car-details__list-item">
                <span className="car-details__list-icon-wrapper">
                  <i className="icon icon-specs-transmission-gray"></i>
                </span>
                <span>Automatic</span>
              </li>
              <li className="car-details__list-item">
                <span className="car-details__list-icon-wrapper">
                  <i className="icon icon-specs-passenger-gray"></i>
                </span>
                <span>5 People</span>
              </li>
              <li className="car-details__list-item">
                <span className="car-details__list-icon-wrapper">
                  <i className="icon icon-specs-bags-gray"></i>
                </span>
                <span>5 Bags</span>
              </li>
            </ul>
          </div>
          <div className="car-features__column">
            <h3 className="car-details__title" style={{ textAlign: 'center' }}>Features</h3>
            <div className="car-features__container">
              <div className="car-features">
                <ul style={{paddingLeft:"20px"}} className="car-features__list">
                  <li className="car-features__list-item">2 Wheel Drive</li>
                  <li className="car-features__list-item">Gasoline Vehicle</li>
                  <li className="car-features__list-item">Bluetooth</li>
                  <li className="car-features__list-item">Cruise Control</li>
                </ul>
              </div>
              <div className="car-features car-features--second-list">
                <ul className="car-features__list">
                  <li className="car-features__list-item">AM/FM Stereo Radio</li>
                  <li className="car-features__list-item">Automatic</li>
                  <li className="car-features__list-item">Air Conditioning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button>Book</button> <button>Close</button>
      </div>
      <div className="vehicle-detail-band__car">
        <img
          style={{ width: '400px', height: '400px' }}
          className="vehicle-detail-band__car-image"
          src={props.img}
          alt="Chevrolet Equinox"
        />
      </div>
    </div>
  );
};

export default Detials;

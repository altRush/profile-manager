import React from 'react';
import Card from './Card';

const CardList = ({ staffs }) => {
  return !staffs.length ? (
    <h2 className="white" style={{ fontFamily: 'Verdana' }}>
      No matched name..
    </h2>
  ) : (
    <div>
      {staffs.map((user, i) => {
        return (
          <Card
            key={i}
            id={staffs[i].id}
            name={staffs[i].name}
            email={staffs[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;

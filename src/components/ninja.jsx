import React from "react";

const ninja = (props) => {
  const { ninjas } = props; /// destructuring method
  //generate a new list of element with the object get from
  //parent props
  const ninjaList = ninjas.map((ninja) => {
    return (
      <div className="ninjaList" key={ninja.id}>
        <div>Name : {ninja.name}</div>
        <div>Age : {ninja.age}</div>
        <div>Belt : {ninja.belt}</div>
        <br />
      </div>
    );
  });

  //////////screen
  return (
    <div className="ninja">
      {/* Output a list  */}
      {/* Utiliser les maps */}
      {ninjaList}
    </div>
  );
};

export default ninja;

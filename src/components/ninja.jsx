import React from "react";

const ninja = (props) => {
  /// destructuring method use to get variable
  const { ninjas } = props;

  //generate a new list of element with the object get from
  //parent props
  const ninjaList = ninjas.map((ninja) => {
      /// conventionnal style
    // if (ninja.age > 20) {
    //   return (
    //     <div className="ninjaList" key={ninja.id}>
    //       <div>Name : {ninja.name}</div>
    //       <div>Age : {ninja.age}</div>
    //       <div>Belt : {ninja.belt}</div>
    //       <br />
    //     </div>
    //   );
    // } else {
    //   return null;
    // }

    //ternary style
    return ninja.age > 20 ?       (
        <div className="ninjaList" key={ninja.id}>
          <div>Name : {ninja.name}</div>
          <div>Age : {ninja.age}</div>
          <div>Belt : {ninja.belt}</div>
          <br />
        </div>
      ) : null;
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

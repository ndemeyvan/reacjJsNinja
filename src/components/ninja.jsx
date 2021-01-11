import React from "react";

const ninja = (props) => {
  /// destructuring method use to get variable
  const { ninjas, deleteNinja } = props;

  //generate a new list of element with the object get from
  //parent props
  const ninjaList = ninjas.map((ninja) => {
    return ninja.age > 20 ? (
      <div className="ninjaList" key={ninja.id}>
        <div>Name : {ninja.name}</div>
        <div>Age : {ninja.age}</div>
        <div>Belt : {ninja.belt}</div>
        {/* le fait de creer une fonction anonyme 
        ici permet a ce que la fonctionn 
        ne s'excecute pas directement en fait . */}
        <button
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          Delete ninja
        </button>
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

import React from 'react'

function NavBar(props) {
  return (
    <div className="NavBar">
      {props.showPrevious ? (
        <button onClick={props.onPrevious}>Précédent</button>
      ) : null}
      {props.showNext ? (
        <button onClick={props.onNext}>Suivant</button>
      ) : null}
    </div>
  )
}

export default NavBar;

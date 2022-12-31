import React from "react";
import ModalComponent from "../Modal";

interface CardsProps {};

export default function Cards({}: CardsProps) {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Audi RX</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
<ModalComponent/>
      </div>
    </div>
  );
}

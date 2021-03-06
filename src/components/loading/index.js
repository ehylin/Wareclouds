import React from "react";
import { Spinner } from "react-bootstrap";



export default function Loading() {
  return (
    <div className="text-center">
      <Spinner animation="border" role="status" variant="info"/>
      <h5>Cargando...</h5>
    </div>
  );
}

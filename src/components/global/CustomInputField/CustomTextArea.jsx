import React from 'react';
import { Form } from 'react-bootstrap';

const CustomTextArea = ({ label, rows }) => {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>{label}</Form.Label>
      <Form.Control as="textarea" rows={rows} />
    </Form.Group>
  );
};

export default CustomTextArea;

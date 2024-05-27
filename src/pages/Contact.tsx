import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import '../style/Contact.css';

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    descripcion: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);

    setForm({
      nombre: '',
      telefono: '',
      correo: '',
      descripcion: ''
    });
  };

  return (
    <Container className="contact-container">
      <Form className="contact-form" onSubmit={handleSubmit}>
        <h1 className="contact-title">Cuentanos, ¿En qué te podemos ayudar?</h1>
        <Form.Group controlId="formNombre" className="contact-form-group">
          <Form.Label>Nombre: </Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Ingresa tu Nombre"
            className="contact-form-control"
          />
        </Form.Group>
        <Form.Group controlId="formTelefono" className="contact-form-group">
          <Form.Label>Teléfono: </Form.Label>
          <Form.Control
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="Ingresa tu Teléfono"
            className="contact-form-control"
          />
        </Form.Group>
        <Form.Group controlId="formCorreo" className="contact-form-group">
          <Form.Label>Correo: </Form.Label>
          <Form.Control
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            placeholder="Ingresa tu E-mail"
            className="contact-form-control"
          />
        </Form.Group>
        <Form.Group controlId="formDescripcion" className="contact-form-group">
          <Form.Label>Descripción: </Form.Label>
          <Form.Control
            as="textarea"
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            placeholder="Ingresa tu consulta"
            className="contact-form-control contact-form-textarea"
          />
        </Form.Group>
        <div className="contact-button">
          <Button variant="danger" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Contact;
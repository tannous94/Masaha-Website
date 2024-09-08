import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.phone && !/^\d+$/.test(formData.phone)) newErrors.phone = 'Phone must contain only numbers';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log('Form data submitted:', formData);
    }
  };

  return (
    <div className="contact-form">
        <h2>Contact Form - Masaha<hr /></h2>
        
      <form onSubmit={handleSubmit}>
        <div>
          {errors.name && <p className="error">{errors.name}</p>}
          <input type="text" id="name" name="name" placeholder='Your Name' value={formData.name} onChange={handleChange} />
        </div>
        <div>
          {errors.phone && <p className="error">{errors.phone}</p>}
          <input type="text" id="phone" name="phone" placeholder='Your Phone' value={formData.phone} onChange={handleChange} />
        </div>
        <div>
          {errors.email && <p className="error">{errors.email}</p>}
          <input type="email" id="email"  name="email" placeholder='Your Email' value={formData.email} onChange={handleChange} />
        </div>
        <div>
          {errors.message && <p className="error">{errors.message}</p>}
          <textarea id="message" name="message" placeholder='Your Message' value={formData.message} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <hr />
    </div>
  );
};

export default ContactForm;

import React from 'react';
import Form from '../form/index';
import { AiOutlineMail } from 'react-icons/ai';
import { AiTwotonePhone } from 'react-icons/ai';

export default function Contact() {
  return (
    <div class="container">
      <div class="row align-items-start">
        <div class="col">
          <h1>Contact me</h1>
          <Form style={{ width: '20rem' }} />
        </div>

        <div class="row align-items-end">
          <div class="col">
            <br />
            <br />
            <h4>Email      < AiOutlineMail size={30} /></h4>
            barry.manowar@gmail.com<a href='barry.manowar@gmail.com' />
            <br />
            <br />
            <br />
            <h4>Telephone     < AiTwotonePhone size={30} /></h4>
            (719)271-8028
          </div>
        </div>
      </div>
    </div>






  );
}

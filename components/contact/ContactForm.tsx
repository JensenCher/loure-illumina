"use client";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, number, z } from "zod";
import styles from "./contactform.module.css";

interface contactDataProps {
  name: string;
  email: string;
  contact: string;
  message?: string;
}

const schema = z.object({
  name: string().min(1, { message: "Name is required" }),
  email: string().email({ message: "Please type in a valid email" }),
  //   contact: number(),
  //   message: string(),
});

const ContactForm = ({ contact = {} as contactDataProps }) => {
  const { register, control, handleSubmit, formState } = useForm({
    defaultValues: contact,
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const handleSave = (formValues: FieldValues) => {
    console.log("formValues", formValues);
    // onSave(formValues)
  };

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <div className={styles.int}>
        <label htmlFor="name" className="block">
          Name
        </label>
        <input className="border-b-2 focus:outline-none" {...register("name")} />
        <div className="text-red-600 text-xs">{errors.name?.message}</div>
        <span></span>
      </div>
      <div className={styles.int}>
        <label htmlFor="email" className="block">
          Email
        </label>
        <input className="border-b-2 border-b-purple-300 focus:outline-none" {...register("email")} />
        <span></span>
        <div className="text-red-600 text-xs">{errors.email?.message}</div>
      </div>
      <div className="pt-3">
        <button type="submit" className="rounded-lg bg-purple-500 border-2 border-purple-900 px-3 py-1 opacity-100 hover:opacity-80">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

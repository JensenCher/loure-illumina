"use client";

import { useState } from "react";
import Icons from "@/components/Icons";
import Button from "@/ui/Button";
import { FieldValue, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, number, z } from "zod";

// const phoneRegex = new RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/);

const contactSchema = z.object({
  name: string().min(1, { message: "Name is required" }),
  email: string().email({ message: "Valid email is required" }),
  // contact: string().regex(phoneRegex, "Please type in a valid number"),
  message: string(),
});

interface contactDataProps {
  name: string;
  email: string;
  // contact: string;
  message?: string;
}

const FooterContact = ({ contact = {} as contactDataProps }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState } = useForm({
    defaultValues: contact,
    resolver: zodResolver(contactSchema),
  });

  const { errors } = formState;

  const onSubmit: SubmitHandler<contactDataProps> = async (data) => {
    setIsLoading(true);
    console.log(data);

    // Send Data to Backend
    await fetch("/api/contacts", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    // await fetch("/api/contacts", {
    //   method: "POST",
    //   body: JSON.stringify({ hello: "world" }),
    // });

    setIsLoading(false);
    // axios.post('/api/register', data)
    // .then
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-3 pb-2">
          <div className="relative w-full">
            <input
              className="peer w-full h-10 rounded-xl p-3 py-1 text-sm bg-slate-300 dark:bg-slate-800 text-black dark:text-white
        outline-none transition-colors placeholder-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              {...register("name")}
              placeholder=" "
              disabled={isLoading}
            />
            <label
              htmlFor="name"
              className="absolute left-3 -top-4 text-slate-300 text-xs cursor-text transition-all
            peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-800 dark:peer-placeholder-shown:text-slate-300 peer-placeholder-shown:top-2 
            peer-focus:-top-4 peer-focus:text-xs peer-focus:text-slate-300"
            >
              Name
            </label>
            <div className="text-red-600 text-xs ml-2 mt-1">{errors.name?.message}</div>
          </div>
          <div className="relative w-full">
            <input
              className="peer w-full h-10 rounded-xl p-3 py-1 bg-slate-300 dark:bg-slate-800 text-black text-xs dark:text-white
        focus:outline-slate-100 focus:border-b-2 transition-colors placeholder-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              {...register("email")}
              placeholder=" "
              disabled={isLoading}
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-4 text-slate-300 text-xs cursor-text transition-all
      peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-800 dark:peer-placeholder-shown:text-slate-300 peer-placeholder-shown:top-2 
      peer-focus:-top-4 peer-focus:text-xs peer-focus:text-slate-300"
            >
              Email
            </label>
            <div className="text-red-600 text-xs ml-2 mt-1">{errors.email?.message}</div>
          </div>
        </div>
        {/* <div className="relative pb-5 w-full">
        <input
          className="peer w-full h-10 rounded-xl p-3 py-1 bg-slate-300 dark:bg-slate-800 text-black dark:text-white
        focus:outline-slate-100 focus:border-b-2 transition-colors placeholder-transparent"
          {...register("contact")}
          placeholder=" "
        />
        <label
          htmlFor="contact"
          className="absolute left-3 -top-4 text-slate-300 text-xs cursor-text transition-all
      peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-800 dark:peer-placeholder-shown:text-slate-300 peer-placeholder-shown:top-2 
      peer-focus:-top-4 peer-focus:text-xs peer-focus:text-slate-300"
        >
          Contact
        </label>
        <div className="text-red-600 text-xs">{errors.contact?.message}</div>
      </div> */}
        <div className="relative pb-0 w-full">
          <textarea
            className="peer w-full h-28 rounded-xl p-3 py-1 bg-slate-300 dark:bg-slate-800 text-black dark:text-white
        focus:outline-slate-100 focus:border-b-2 transition-colors placeholder-transparent resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            {...register("message")}
            placeholder=" "
            disabled={isLoading}
          />
          <label
            htmlFor="message"
            className="absolute left-3 -top-4 text-slate-300 text-xs cursor-text transition-all
          peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-800 dark:peer-placeholder-shown:text-slate-300 peer-placeholder-shown:top-2 
          peer-focus:-top-4 peer-focus:text-xs peer-focus:text-slate-300"
          >
            Message
          </label>
          <div className="text-red-600 text-xs">{errors.message?.message}</div>
        </div>
        <div className="flex justify-center md:justify-normal md:pb-10">
          <Button
            variant="ghost"
            size="sm"
            className={"py-5 px-3 border dark:border-slate-800 transition-all hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 group"}
            title="Contact"
            isLoading={isLoading}
          >
            {isLoading ? <></> : <Icons.Send className={"mr-3"} />}

            <span>Contact</span>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FooterContact;

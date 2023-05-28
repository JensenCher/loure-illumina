"use client";

import Icons from "@/components/Icons";
import Button from "@/ui/Button";
import { FieldValue, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

const FooterContact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    // Send Data to Backend
    // axios.post('/api/register', data)
    // .then
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="relative pb-5 w-full">
        <input
          className="peer w-full h-10 rounded-xl p-3 py-1 bg-slate-300 dark:bg-slate-800 text-black dark:text-white
        focus:outline-slate-100 focus:border-b-2 transition-colors placeholder-transparent"
          type="email"
          name="email"
          id="email"
          placeholder=" "
        />
        <label
          htmlFor="email"
          className="absolute left-3 -top-6 text-slate-300 text-sm cursor-text transition-all
      peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-800 dark:peer-placeholder-shown:text-slate-300 peer-placeholder-shown:top-2 
      peer-focus:-top-6 peer-focus:text-sm peer-focus:text-slate-300"
        >
          Email
        </label>
      </div>
      <div className="relative pb-5 w-full">
        <input
          className="peer w-full h-10 rounded-xl p-3 py-1 bg-slate-300 dark:bg-slate-800 text-black dark:text-white
        focus:outline-slate-100 focus:border-b-2 transition-colors placeholder-transparent"
          type="email"
          name="hello"
          id="hello"
          placeholder=" "
        />
        <label
          htmlFor="hello"
          className="absolute left-3 -top-6 text-slate-300 text-sm cursor-text transition-all
      peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-800 dark:peer-placeholder-shown:text-slate-300 peer-placeholder-shown:top-2 
      peer-focus:-top-6 peer-focus:text-sm peer-focus:text-slate-300"
        >
          Hello
        </label>
      </div>
      <div className="flex justify-center md:justify-normal">
        <Button
          variant="ghost"
          size="sm"
          className="border dark:border-slate-800 transition-all hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 group"
          title="Subscribe to Mailing List"
        >
          <Icons.Send className="mr-3" />
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default FooterContact;

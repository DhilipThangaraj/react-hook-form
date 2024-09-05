import React from "react";
import { DevTool } from "@hookform/devtools";

import { useForm } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

export default function YTForm() {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit } = form;

  const onSubmit = (data: FormValues) => {
    console.log("??????form submitted", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />

        <button>Submit</button>
        <DevTool control={control} />
      </form>
    </div>
  );
}

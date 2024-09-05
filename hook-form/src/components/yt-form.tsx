import React, { useEffect } from "react";
import { DevTool } from "@hookform/devtools";

import { useForm, useFieldArray } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  channel: string;
  social: {
    //nested objects
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
  phNumbers: {
    number: string;
  }[];
  age: number;
  dob: Date;
};

let renderCount = 0;

export default function YTForm() {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "dhilip",
      email: "",
      channel: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["", ""],
      phNumbers: [
        {
          number: "",
        },
      ],
      age: 0,
      dob: new Date(),
    },
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    setValue,
  } = form;

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  renderCount++;

  useEffect(() => {
    const subscription = watch((value) => {
      console.log("??????value", value);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data: FormValues) => {
    console.log("??????form submitted", data);
  };

  const handleGetValues = () => {
    console.log("?????get all values", getValues());
    console.log("?????get single value", getValues("username"));
  };

  const handleSetValues = () => {
    setValue("username", "", {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return (
    <div>
      <h1>{`Form Render Count :: ${renderCount}`}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: "user name is mandatory",
          })}
        />
        <p>{errors.username?.message}</p>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />

        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <input type="text" id="twitter" {...register("social.twitter")} />
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <input type="text" id="facebook" {...register("social.facebook")} />
        </div>

        <div className="form-control">
          <label htmlFor="primary-phone">Primary phone number</label>
          <input
            type="text"
            id="primary-phone"
            {...register("phoneNumbers.0")}
          />
        </div>

        <div className="form-control">
          <label htmlFor="primary-phone">Secondary phone number</label>
          <input
            type="text"
            id="secondary-phone"
            {...register("phoneNumbers.1")}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>List of phone numbers</label>
          <div>
            {fields.map((field, index) => {
              return (
                <div className="form-control" key={field.id}>
                  <input
                    type="text"
                    {...register(`phNumbers.${index}.number`)}
                  />
                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      Remove
                    </button>
                  )}
                </div>
              );
            })}
            <button type="button" onClick={() => append({ number: "" })}>
              Add Phone Number
            </button>
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            {...register("age", {
              required: "Age is required",
              valueAsNumber: true,
            })}
          />
          <p className="error">{errors.age?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="dob">Date of birth</label>
          <input
            type="date"
            id="dob"
            {...register("age", {
              required: "DOB is required",
              valueAsDate: true,
            })}
          />
          <p className="error">{errors.dob?.message}</p>
        </div>

        <button>Submit</button>
        <button onClick={handleGetValues}>Get Values</button>
        <button onClick={handleSetValues}>Set Values</button>
        <DevTool control={control} />
      </form>
    </div>
  );
}

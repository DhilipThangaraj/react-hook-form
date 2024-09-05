### React Hook Form

# Register

To manage the forms states. usage details below

```import { useForm } from "react-hook-form";

   const form = useForm();
   const { register } = form;
   const { name, ref, onChange, onBlur } = register("username")

   <input
   type="text"
   id="username"
   name={name}
   ref={ref}
   onChange={onChange}
   onBlur={onBlur}
   />

      <input
      type="text"
      id="username"
      {...register("username")}
   />
```

# Devtools

install::
pnpm add -D @hookform/devtools
usage::
import { DevTool } from "@hookform/devtools";

# Control

To associate component with form. devtools provides this option to see each fields state.

```
Touched: true - whether the input is got interacted.
Dirty:	true - whether the input got updated.
```

# formState

Formstate contains error object.

const { errors } = formState;

# defaultValues - for the form enhancement

```
const form = useForm<FormValues>({
defaultValues: {
username: "dhilip",
email: "",
channel: "",
},
});
```

# nested objects - for the form enhancement

```
const form = useForm<FormValues>({
defaultValues: {
username: "dhilip",
email: "",
channel: "",
social:{
    facebook:"",
    twitter:""
}
},
});
```

# Array - for the form enhancement

```
const form = useForm<FormValues>({
defaultValues: {
username: "dhilip",
email: "",
channel: "",
social:{
    facebook:"",
    twitter:""
},
phoneNumbers:["",""]
},
});
```

# dynamic controls

```
dataFieldArray()
```

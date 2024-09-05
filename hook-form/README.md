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
const { fields ,append,remove } = dataFieldArray([{}])
```

# Numeric and Date values

```
valueAsDate helps to convert string to date
valueAsNumber helps to number string to number when submit the form
```

# Watch

watch always subscribe to input which causes rerenders of the component.
with useEffect if you use it wont cause rerenders

```
  const watchUserName = watch("username");
    const watchUserNameArray = watch(["username","email"]);
      const watchUserName = watch(); - To watch entire form

    //performance consideration
      useEffect(() => {
    const subscription = watch((value) => {
      console.log("??????value", value);
    });

    return subscription.unsubscribe();
  }, [watch]);

```

# getValues

```
getValues() - give me the all values
getValues("username") - single value it returns
getValues(["username","channel"]) - give me the two values
```

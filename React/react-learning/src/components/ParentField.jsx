import { useState } from "react";
import DisplayField from "./DisplayField";
import InputField from "./InputField";

const ParentField = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <InputField value={value} setValue={setValue}/>
      <DisplayField value={value}/>
    </div>
  );
};

export default ParentField;


const InputField = ({value, setValue}) => {


  return <div>
    <input type="search" onChange={(e)=>{setValue(e.target.value)}} value={value}/>
  </div>;
};

export default InputField;

import { useState } from "react";

const CheckboxFour = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <><div className="form-control">
      <label className="label cursor-pointer">
       
        <input type="radio" name="radio-10" className="radio checked:bg-3c50e0-500" defaultChecked /> By card
      </label>
    </div><div className="form-control">
        <label className="label cursor-pointer">
          
          <input type="radio" name="radio-10" className="radio checked:bg-3c50e0-500" defaultChecked />  By cash
        </label>
      </div></>
    
  );
};

export default CheckboxFour;

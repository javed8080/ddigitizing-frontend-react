import React from 'react';

const CustomCheckbox = ({ label }) => {
  return (
    <div className="form-group">
      <label className="checkbox-inline">
        <input type="checkbox" value="yes" id="slideThree" name="check" />
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;

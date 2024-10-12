import React from 'react';

const PatchesTypeSelect = () => {
  return (
    <div className="form-select">
      <select name="clrSep" id="idClrSep" className="form-control">
        <option value="">Color Type</option>
        <option value="PMS">Pantone Matching System (PMS)</option>
        <option value="RGB">Three Color Process (RGB)</option>
        <option value="CMYK">Four Color Process (CMYK)</option>
      </select>
    </div>
  );
};

export default PatchesTypeSelect;

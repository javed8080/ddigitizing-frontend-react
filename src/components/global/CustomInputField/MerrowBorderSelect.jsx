import React from 'react';

const MerrowBorderSelect = () => {
  return (
    <div className="form-select">
      <select name="merrow_border" className="form-control">
        <option value="">Merrow Border</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>
  );
};

export default MerrowBorderSelect;

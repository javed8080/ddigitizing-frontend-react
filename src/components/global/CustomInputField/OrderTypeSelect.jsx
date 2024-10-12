import React from 'react';

const OrderTypeSelect = () => {
  return (
    <div className="form-select">
      <select name="vectorColor" id="vectorColor" className="form-control">
        <option value="">Order Type</option>
        <option value="Screen Printing">Screen Printing</option>
        <option value="DTG Printing">DTG Printing</option>
        <option value="Silk Screening">Silk Screening</option>
        <option value="Vinyl Cutting">Vinyl Cutting</option>
        <option value="Sublimation">Sublimation</option>
        <option value="Photo Touchup">Photo Touchup</option>
      </select>
    </div>
  );
};

export default OrderTypeSelect;

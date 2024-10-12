import React, { useState } from 'react';

const DesignPlacementSelect = () => {
  const [placement, setPlacement] = useState("");

  const placementOptions = [
    "Cap Front",
    "Cap Side",
    "Cap Back",
    "Low Profile Cap",
    "Left Chest",
    "Right Chest",
    "Front Pocket",
    "Full Front",
    "Jacket Back",
    "Cap/Chest",
    "Knit Caps",
    "Beanie Caps",
    "Visor",
    "Sleeve",
    "Patches",
    "Apron",
    "Applique Design",
    "Bags",
    "Towel",
    "Gloves",
    "Blankets",
    "Sweatshirt",
    "Hoodie",
    "Wrist Band",
    "Seat Cover",
    "Quilt",
  ];

  const handlePlacementChange = (e) => {
    setPlacement(e.target.value);
  };

  return (
    <div className="form-select">
      <select 
        name="placement" 
        className="form-control" 
        id="cboPlacement"
        value={placement}
        onChange={handlePlacementChange}
      >
        <option value="">Select Design Placement</option>
        {placementOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DesignPlacementSelect;

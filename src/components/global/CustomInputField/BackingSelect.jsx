import React from 'react';

const BackingSelect = () => {
  return (
    <div className="form-select">
      <select name="backing" className="form-control">
        <option value="">Backing</option>
        <option value="Iron on Patch">Iron on Patch</option>
        <option value="Velcro Patch">Velcro Patch</option>
        <option value="Plain sew on Patch">Plain sew on Patch</option>
        <option value="Peel and Stick">Peel and Stick</option>
        <option value="Peel & Stick + IronOn">Peel & Stick + IronOn</option>
        <option value="Not Sure">Not Sure</option>
      </select>
    </div>
  );
};

export default BackingSelect;

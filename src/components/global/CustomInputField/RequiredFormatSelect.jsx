import React from 'react';

const RequiredFormatSelect = () => {
  return (
    <div className="form-select">
      <select name="txtFormat" id="cboPlacement" className="form-control">
        <option value="">Required Format</option>
        <option value="Coral Draw (CDR)">Coral Draw (CDR)</option>
        <option value="Adobe Illustrator (AI)">Adobe Illustrator (AI)</option>
        <option value="Encapsulated Post Script (EPS)">Encapsulated Post Script (EPS)</option>
        <option value="Adobe Photoshop (PLT)">Adobe Photoshop (PLT)</option>
        <option value="Adobe Acrobat (PDF)">Adobe Acrobat (PDF)</option>
        <option value="Macromedia Freehand (FH)">Macromedia Freehand (FH)</option>
        <option value="Others">Others</option>
      </select>
    </div>
  );
};

export default RequiredFormatSelect;

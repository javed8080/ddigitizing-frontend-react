import React from 'react';

const FileFormatSelect = () => {
  return (
    <div className="form-select">
      <select name="txtFormat" className="form-control" id="txtFormat">
        <option value="" selected="selected">File Format Required</option>
        <option value="Tajima Machine File (.DST)">Tajima Machine File (.DST)</option>
        <option value="Barudan Machine File (.DSB)">Barudan Machine File (.DSB)</option>
        <option value="Janome Machine File (.JEF)">Janome Machine File (.JEF)</option>
        <option value="Compucon Machine File (.XXX)">Compucon Machine File (.XXX)</option>
        <option value="Happy Machine File (.TAP)">Happy Machine File (.TAP)</option>
        <option value="Toyota Machine File (.100)">Toyota Machine File (.100)</option>
        <option value=".EMB/.DST">.EMB/.DST</option>
        <option value=".PES/.DST">.PES/.DST</option>
        <option value=".EXP/.DST">.EXP/.DST</option>
        <option value=".CND/.DST">.CND/.DST</option>
        <option value=".OFM/.DST">.OFM/.DST</option>
        <option value=".PXF/.DST">.PXF/.DST</option>
      </select>
    </div>
  );
};

export default FileFormatSelect;

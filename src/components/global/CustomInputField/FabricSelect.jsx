import React from 'react';

const FabricSelect = () => {
  return (
    <div className="form-select">
      <select name="cboFabric" id="cboFabric" className="form-control">
        <option value="">Fabric</option>
        <option value="Twill">Twill</option>
        <option value="Pique">Pique</option>
        <option value="Polyester">Polyester</option>
        <option value="Cotton">Cotton</option>
        <option value="Fleece">Fleece</option>
        <option value="Towel">Towel</option>
        <option value="Leather">Leather</option>
        <option value="Denim">Denim</option>
        <option value="Silk">Silk</option>
        <option value="Nylon">Nylon</option>
        <option value="Quilt">Quilt</option>
        <option value="Canvas">Canvas</option>
        <option value="Single Jersey">Single Jersey</option>
        <option value="Wool">Wool</option>
        <option value="Velvet">Velvet</option>
        <option value="Apron">Apron</option>
        <option value="Blanket">Blanket</option>
        <option value="Polar Fleece">Polar Fleece</option>
        <option value="Stretchy Polyester/Light Knit">Stretchy Polyester/Light Knit</option>
        <option value="Knit">Knit</option>
        <option value="Others">Others</option>
      </select>
    </div>
  );
};

export default FabricSelect;

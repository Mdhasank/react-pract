import React, { useState } from "react";

function ChipsInput() {

  const [val, setVal] = useState('')
  const [chip, setChip] = useState([])

  const handleChip = (e) => {
    if (e.key === "Enter" && val.trim() !== "") {
      e.preventDefault();
      setChip([...chip, val.trim()]);
      setVal('');
    }
  };
  const removeChip = (indexToRemove) => {
    setChip(chip.filter((_, index) => index !== indexToRemove))
  };



  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={handleChip}
      />
      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: '10px' }}>
        {chip.map((c, index) => {
          return (
            <div key={index} style={{ padding: "5px 10px", background: "#ccc", borderRadius: "12px", display: 'flex', }}>
              {c}
              <span style={{
                padding: "0px 0px 0 16px", background: "#ccc", cursor: 'pointer',
              }}
                onClick={() => removeChip(index)}
              >✕</span>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default ChipsInput;

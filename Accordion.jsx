import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 

function Accordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(null)
    const toggleActive = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }
    return (
        <div>
            {items.map((item, index) => (
                <div key={index} style={{ border: "1px solid #ccc", marginBottom: "10px", borderRadius: "5px"
                 }}>
                    <div style={{
                        padding: "10px 15px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        cursor: "pointer",
                        backgroundColor: "#f7f7f7",
                        fontWeight: "bold",
                    }}
                    onClick = {()=>toggleActive(index)}
                    >
                        {item.title}
                        {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {activeIndex === index && (
                        <div style={{ padding: "10px 15px", backgroundColor: "#fff" }}>
                            {item.content}
                        </div>
                    )}
                </div>
    ))}
        </div>
    );
}

export default Accordion;

import React, { useState } from 'react'

const ChipsInput = () => {
    const [chip, setChip] = useState("");
    const [chips, setChips] = useState([]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && chip.trim() !== '') {
            setChips([...chips, chip]);
            setChip('');
        }
    };

    const handleDeleteChip=(name)=>{
        setChips(chips.filter((item)=>item !== name))
    }

    return (
        <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', margin: '40px 0' }}>
            <h2>Chips Input</h2>
            <input type="text"
                value={chip}
                placeholder='Type a chip and press tag'
                onChange={(e) => setChip(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{ padding: '8px', width: '200px' }}
            />
            <div style={{ margin: '20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                {
                    chips.map((item,index) => (
                        <div
                            key={index}
                            style={{ display: "flex", 
                                     alignItems: 'center', 
                                     margin: '5px', 
                                     backgroundColor: 'lightgray', 
                                     borderRadius:'20px',
                                     padding:'5px 20px'
                            }}
                        >
                        <span>{item}</span>
                        <button 
                          onClick={()=>handleDeleteChip(item)}
                          style={{
                            background:'transparent',
                            border:'none',
                            marginLeft:'8px',
                            cursor:'pointer',
                            color:'red'
                          }}
                            >X</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ChipsInput
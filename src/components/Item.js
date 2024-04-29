import React, { useState } from 'react';

const Item = () => {
    const [riddles, setRiddles] = useState([
        {
            id: 1,
            description: "Что можно увидеть с закрытыми глазами?",
            option1: "Мечты",
            option2: "Свет",
            option3: "Тьму",
            option4: "Все вышеперечисленное",
            correct: 1,
            selectedOption: null
        },

    ]);
    const [newRiddle, setNewRiddle] = useState({
        description: "",
        options: ["", "", "", ""],
        correct: 0 
    });

    const handleInputChange = (index, value) => {
        const updatedOptions = [...newRiddle.options];
        updatedOptions[index] = value;
        setNewRiddle({ ...newRiddle, options: updatedOptions });
    };

    const handleAddRiddle = () => {
        const updatedRiddles = [...riddles, { ...newRiddle, id: riddles.length + 1 }];
        setRiddles(updatedRiddles);

        setNewRiddle({
            description: "",
            options: ["", "", "", ""],
            correct: 0
        });
    };

    return (
        <div>
            <h2>Загадки</h2>
            {}
            {riddles.map((riddle, riddleIndex) => (
                <div key={riddle.id}>
                    <h3>{riddle.description}</h3>
                    <ul>
                        {riddle.options.map((option, index) => (
                            <li key={index}>{option}</li>
                        ))}
                    </ul>
                </div>
            ))}

            {}
            <h3>Добавить новую загадку</h3>
            <input
                type="text"
                placeholder="Описание"
                value={newRiddle.description}
                onChange={(e) => setNewRiddle({ ...newRiddle, description: e.target.value })}
            />
            {newRiddle.options.map((option, index) => (
                <input
                    key={index}
                    type="text"
                    placeholder={`Вариант ${index + 1}`}
                    value={option}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                />
            ))}
            <select
                value={newRiddle.correct}
                onChange={(e) => setNewRiddle({ ...newRiddle, correct: parseInt(e.target.value) })}
            >
                {newRiddle.options.map((option, index) => (
                    <option key={index} value={index}>
                        {`Вариант ${index + 1}`}
                    </option>
                ))}
            </select>
            <button onClick={handleAddRiddle}>Добавить загадку</button>
        </div>
    );
};

export default Item;

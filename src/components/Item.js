import React, { useState } from 'react';

const riddles = [
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
    {
      id: 2,
      description: "Какой шар не прыгает?",
      option1: "Футбольный",
      option2: "Пузырек",
      option3: "Бильярдный",
      option4: "Земной",
      correct: 3,
      selectedOption: null
    },
    {
      id: 3,
      description: "Кто владеет всеми знаниями?",
      option1: "Ученый",
      option2: "Книга",
      option3: "Библиотекарь",
      option4: "Жизнь",
      correct: 2,
      selectedOption: null
    },
    {
      id: 4,
      description: "Что можно сломать, называя его?",
      option1: "Сердце",
      option2: "Яйцо",
      option3: "Зеркало",
      option4: "Тишину",
      correct: 3,
      selectedOption: null
    },
    {
      id: 5,
      description: "Что идет, но не ходит?",
      option1: "Ветер",
      option2: "Время",
      option3: "Вода",
      option4: "Река",
      correct: 2,
      selectedOption: null
    }
  ];

const Item = () => {
    const [selectedOptions, setSelectedOptions] = useState(new Array(riddles.length).fill(null));

    const checkAnswer = (riddleId, selectedOptionIndex) => {
        const riddle = riddles.find(r => r.id === riddleId);
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[riddleId - 1] = selectedOptionIndex;
        setSelectedOptions(updatedSelectedOptions);
        riddle.selectedOption = selectedOptionIndex;
    };

    return (
        <div>
            <h2>Загадки</h2>
            {riddles.map(riddle => (
                <div key={riddle.id}>
                    <h3>{riddle.description}</h3>
                    <ul>
                        {[riddle.option1, riddle.option2, riddle.option3, riddle.option4].map((option, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => checkAnswer(riddle.id, index)}
                                    style={{
                                        backgroundColor: selectedOptions[riddle.id - 1] === index && riddle.correct === index ? 'green' : ''
                                    }}
                                >
                                    {option}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Item;

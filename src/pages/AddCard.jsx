import { useState } from "react";
import { addCard } from "../components/store";
import { useDispatch, useSelector } from "react-redux";

export const AddCard = () => {
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState('');
    const cards = useSelector((state) => state.cards)

    const handleSelectChange = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);
        dispatch(addCard({ id: 2, class: selectedValue, name: selectedValue, bank: 'Power Banking', number: 3495725507956296, balans: 0 }));
    }

    return (
        <div className="add-cards">
           <label>Оберіть картку:</label>
                <select
                    value={selectedOption}
                    onChange={ handleSelectChange }
                >
                    <option value="Choose-card">Обрати карту</option>
                    <option value="Universal">Universal</option>
                    <option value="Premium">Premium</option>
                    <option value="Gold">Gold</option>
                </select>
                <label>Як зручно отримати:</label>
                <select>
                    <option value="branch">У відділенні</option>
                    <option value="post">Новою поштою</option>
                    <option value="online">Online</option>
                </select>
                <button className='btn-card' type='submit'>Отримати картку</button>
        </div>
    );
};
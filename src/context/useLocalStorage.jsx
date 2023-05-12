import { useEffect, useState } from 'react'

function useLocalStorage(itemName, InitValue) {

    const [error, setError] = useState(false);

    const [loading, setLoading] = useState(true);

    const [item, setItem] = useState(InitValue);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let ParsedItem;


                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(InitValue));
                    ParsedItem = [];
                } else {
                    ParsedItem = JSON.parse(localStorageItem)
                }
                setItem(ParsedItem)
                setLoading(false)

            } catch (error) {
                setError(error)
            }
        }, 3000)
    });



    const saveItem = (newToDo) => {
        try {
            // infomración que sera pasada a localStorage
            const toString = JSON.stringify(newToDo);
            localStorage.setItem(itemName, toString)
            // Información que DEBE ser actualizada en el estado
            setItem(newToDo)
        } catch (error) {
            setError(error)
        }
    };
    return {
        item,
        saveItem,
        loading,
        error
    }

}


export {useLocalStorage}
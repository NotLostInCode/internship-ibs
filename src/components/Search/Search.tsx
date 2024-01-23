import styles from './Search.module.css'
import search from '../../assets/icons/search.svg'
import {ChangeEvent, FC, useState} from "react";
import {useDebounce} from "../../hooks/useDebounce";


type PropsType = {
    handleSearch: (query: string) => void
}

export const Search:FC<PropsType> = ({handleSearch}) => {
    const [input, setInput] = useState('')

    const debouncedHandleSearch = useDebounce(handleSearch, 1000);

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.currentTarget.value;
        debouncedHandleSearch(inputValue);
        setInput(inputValue);
    };

    return (
        <form className={styles.search}>
            <button>
                <img className={styles.searchImg} src={search} alt="search"/>
            </button>
            <input
                value={input}
                placeholder='Search products'
                type='search'
                className={styles.searchInput}
                onChange={onChangeSearch}
            />
        </form>
    )
}

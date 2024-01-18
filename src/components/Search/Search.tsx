import styles from './Search.module.css'
import {ChangeEvent, FC, useEffect, useState} from "react";
import {useDebounce} from "../../hooks/useDebounce";

type PropsType = {
    handleSearch: (query: string) => void
}

export const Search:FC<PropsType> = ({handleSearch}) => {
    const [input, setInput] = useState('')

    const debouncedHandleSearch = useDebounce((input: string) => {
        handleSearch(input);
        console.log(input)
    }, 1000);

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.currentTarget.value;
        debouncedHandleSearch(input);
        setInput(inputValue);
    };

    return (
        <form className={styles.search}>
            <button>
                <svg
                    className={styles.searchImg}
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        fill='#323232'
                        d='M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z'
                    />
                </svg>
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
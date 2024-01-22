import styles from './App.module.css'
import {Catalog} from "../components/Catalog/Catalog";
import {Search} from "../components/Search/Search";
import {Actions} from "../components/Actions/Actions";
import {Detail} from "../components/Detail/Detail";
import {Route, Routes} from 'react-router-dom';
import {useState} from "react";
import {Modal} from "../components/Modal/Modal";
import {useModal} from "../hooks/useModal";
import {CatalogPage} from "../features/CatalogPage/CatalogPage";
import {DetailPage} from "../features/DetailPage/DetailPage";

export const App = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const errorMessage = useModal()

    const handleSearch = (query: string) => {
        setSearchQuery(query)
    }

    return (
        <div className="App">
            <div className={styles.app}>
                <Search handleSearch={handleSearch}/>
                <Actions/>
            </div>
            <div className={styles.productList}>
                <Routes>
                    <Route path={'/'} element={<CatalogPage searchQuery={searchQuery}/>}/>
                    <Route path={'/detail'} element={<DetailPage/>}/>
                </Routes>
            </div>
            {errorMessage && <Modal message={errorMessage}/>}
        </div>
    );
}



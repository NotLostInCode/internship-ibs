import {Search} from "../components/Search/Search";
import {Actions} from "../components/Actions/Actions";
import {Route, Routes} from 'react-router-dom';
import {useState} from "react";
import {Modal} from "../components/Modal/Modal";
import {useModal} from "../hooks/useModal";
import {CatalogPage} from "../pages";
import {DetailPage} from "../pages";
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";


export const App = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const errorMessage = useModal()

    const handleSearch = (query: string) => {
        setSearchQuery(query)
    }

    return (
        <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Search handleSearch={handleSearch} />
              <Actions />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              <Routes>
                <Route path={'/'} element={<CatalogPage searchQuery={searchQuery} />} />
                <Route path={'/detail/:id'} element={<DetailPage />} />
              </Routes>
            </Grid>
          </Grid>
        </Grid>
        {errorMessage && <Modal message={errorMessage} />}
      </Box>
    );
}



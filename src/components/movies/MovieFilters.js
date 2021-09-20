import Slider from "@mui/material/node/Slider/Slider"
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import { useEffect, useState } from "react";
import { MovieContext } from "./MovieProvider"
import { useContext } from "react";

export const MovieFilters = () => {
    const { genres, getGenres } = useContext(MovieContext)
    const [runtime, setRuntime] = React.useState(0)

    useEffect(() => {
        getGenres()
    }, [])

    const RowRadioButtonsGroup = () => {
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend">Select One</FormLabel>
                <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                    <FormControlLabel value="tv" control={<Radio />} label="TV" />
                    <FormControlLabel value="movie" control={<Radio />} label="Movie" />
                </RadioGroup>
            </FormControl>
        );
    }

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    // const names = [
    //     'Oliver Hansen',
    //     'Van Henry',
    //     'April Tucker',
    //     'Ralph Hubbard',
    //     'Omar Alexander',
    //     'Carlos Abbott',
    //     'Miriam Wagner',
    //     'Bradley Wilkerson',
    //     'Virginia Andrews',
    //     'Kelly Snyder',
    // ];


    const MultipleSelectCheckmarks = () => {
        const [genres, setGenres] = React.useState([]);

        const handleChange = (event) => {
            const {
                target: { value },
            } = event;
            setGenres(
                // On autofill we get a the stringified value.
                typeof value === 'string' ? value.split(',') : value,
            );
        };

        return (
            <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">Genres</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={genres}
                        onChange={handleChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        >
                        {genres.map(genre => (
                            <MenuItem key={genre} value={genre}>
                                <Checkbox checked={genres.indexOf(genre) > -1} />
                                <ListItemText primary={genre.name} />
                            </MenuItem>
                        ))}
                        {/* {genres.genres.map(g => {
                            return <div>
                                <h3>{g.}</h3>
                                </div>
                        })} */}
                    </Select>
                </FormControl>
            </div>
        );
    }




    console.log(genres)
    return (
        <>
            <h1>Filters</h1>
            <section className="filters">
                <div style={{ width: 300, margin: 30 }} className="filters__movieOrTv">
                    {RowRadioButtonsGroup()}
                </div>
                <div style={{ width: 300, margin: 30 }} className="filters__streamingProvider">

                </div>
                <div style={{ width: 300, margin: 30 }} className="filters__genre">
                    <h4>Genres</h4>
                    {MultipleSelectCheckmarks()}

                </div>
                <div style={{ width: 300, margin: 30 }} className="filters__decade">

                </div >
                <div style={{ width: 300, margin: 30 }} className="filters__genre">
                </div>
                <div style={{ width: 300, margin: 30 }} className="filters__runtime">
                    <h4>Maximum Runtime (minutes)</h4>
                    <Slider
                        defaultValue={130}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        // size="small"
                        max={200}
                        min={30}
                        onChange={(event) => {
                            setRuntime(event.target.value)
                        }}
                    />
                </div>
            </section>
        </>
    )
}
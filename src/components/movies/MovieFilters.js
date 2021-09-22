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
import { MultiSelect } from "react-multi-select-component";

export const MovieFilters = () => {
    const { genres, getGenres, getLatestMovie, latestMovie, getMovieById, discoverMovie, movie } = useContext(MovieContext)
    const [runtime, setRuntime] = useState(0)
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedProviders, setSelectedProviders] = useState([]);

    useEffect(() => {
        getLatestMovie().then(getGenres)
    }, [])


    const MovieGenres = () => {
        const handleOnChange = (event) => {
            const selectedArray = [...selectedGenres]
            const index = selectedArray.indexOf(event.target.value)
            if (index === -1) {
                selectedArray.push(event.target.value)
            } else {
                selectedArray.splice(index, 1)
            }
            setSelectedGenres(selectedArray)
        }
        return (
            <div className="Genres__container">
                Select your genres
                <div className="Genres">
                    <input type="checkbox" id="Action" name="Genre" value="28" onChange={handleOnChange} />
                    <label for="Action">Action  </label>
                    <input type="checkbox" id="Adventure" name="Genre" value="12" onChange={handleOnChange} />
                    <label for="Adventure">Adventure  </label>
                    <input type="checkbox" id="Animation" name="Genre" value="16" onChange={handleOnChange} />
                    <label for="Animation">Animation  </label>
                    <input type="checkbox" id="Comedy" name="Genre" value="35" onChange={handleOnChange} />
                    <label for="Comedy">Comedy  </label>
                    <input type="checkbox" id="Crime" name="Genre" value="80" onChange={handleOnChange} />
                    <label for="Crime">Crime  </label>
                    <input type="checkbox" id="Documentary" name="Genre" value="99" onChange={handleOnChange} />
                    <label for="Documentary">Documentary  </label>
                    <input type="checkbox" id="Drama" name="Genre" value="18" onChange={handleOnChange} />
                    <label for="Drama">Drama  </label>
                    <input type="checkbox" id="Family" name="Genre" value="10751" onChange={handleOnChange} />
                    <label for="Family">Family  </label>
                    <input type="checkbox" id="Fantasy" name="Genre" value="14" onChange={handleOnChange} />
                    <label for="Fantasy">Fantasy  </label>
                    <input type="checkbox" id="History" name="Genre" value="36" onChange={handleOnChange} />
                    <label for="History">History  </label>
                    <input type="checkbox" id="Horror" name="Genre" value="27" onChange={handleOnChange} />
                    <label for="Horror">Horror  </label>
                    <input type="checkbox" id="Music" name="Genre" value="10402" onChange={handleOnChange} />
                    <label for="Music">Music  </label>
                    <input type="checkbox" id="Mystery" name="Genre" value="9648" onChange={handleOnChange} />
                    <label for="Mystery">Mystery  </label>
                    <input type="checkbox" id="Romance" name="Genre" value="10749" onChange={handleOnChange} />
                    <label for="Romance">Romance  </label>
                    <input type="checkbox" id="Science Fiction" name="Genre" value="878" onChange={handleOnChange} />
                    <label for="Science Fiction">Science Fiction  </label>
                    <input type="checkbox" id="TV Movie" name="Genre" value="10770" onChange={handleOnChange} />
                    <label for="TV Movie">TV Movie  </label>
                    <input type="checkbox" id="Thriller" name="Genre" value="53" onChange={handleOnChange} />
                    <label for="Thriller">Thriller  </label>
                    <input type="checkbox" id="War" name="Genre" value="10752" onChange={handleOnChange} />
                    <label for="War">War  </label>
                    <input type="checkbox" id="Western" name="Genre" value="37" onChange={handleOnChange} />
                    <label for="Western">Western  </label>
                    
                </div>
            </div>
        );
    }

    const WatchProviders = () => {
        const handleOnChange = (event) => {
            const selectedArray = [...selectedProviders]
            const index = selectedArray.indexOf(event.target.value)
            if (index === -1) {
                selectedArray.push(event.target.value)
            } else {
                selectedArray.splice(index, 1)
            }
            setSelectedProviders(selectedArray)
        }
        return (
            <div className="Genres__container">
                Select your streaming providers
                <div className="Genres">
                    <input type="checkbox" id="Hulu" name="Provider" value="15" onChange={handleOnChange} />
                    <label for="Hulu">Hulu  </label>

                    <input type="checkbox" id="Netflix" name="Provider" value="8" onChange={handleOnChange} />
                    <label for="Netflix">Netflix  </label>

                    <input type="checkbox" id="Amazon Prime Video" name="Provider" value="9" onChange={handleOnChange} />
                    <label for="Amazon Prime Video">Amazon Prime Video  </label>

                    <input type="checkbox" id="Disney Plus" name="Provider" value="337" onChange={handleOnChange} />
                    <label for="Disney Plus">Disney Plus  </label>

                    <input type="checkbox" id="HBO" name="Provider" value="118" onChange={handleOnChange} />
                    <label for="HBO">HBO  </label>

                    <input type="checkbox" id="HBO Max" name="Provider" value="384" onChange={handleOnChange} />
                    <label for="HBO Max">HBO Max  </label>
                </div>
            </div>
        )
    }

    const Runtime = () => {
        const handleOnChange = (event) => {
            const selectedRuntime = event.target.value
            setRuntime(selectedRuntime)
        }
        return (
            <Slider
                defaultValue={130}
                aria-label="Small"
                valueLabelDisplay="auto"
                max={200}
                min={30}
                onChange={handleOnChange}
            />
        )
    }


return (
    <>
            <h1>Filters</h1>
            <section className="filters">
                <div style={{ width: 300, margin: 30 }} className="filters__movieOrTv">
                    {/* {RowRadioButtonsGroup()} */}
                </div>
                <div style={{ width: 300, margin: 30 }} className="filters__streamingProvider">
                    <h4>Streaming Providers</h4>
                    {WatchProviders()}
                </div>
                <div style={{ width: 300, margin: 30 }} className="filters__genre">
                    <h4>Genres</h4>
                    {MovieGenres()}
                </div>
                <div style={{ width: 300, margin: 30 }} className="filters__decade">

                </div >
                <div style={{ width: 300, margin: 30 }} className="filters__genre">
                </div>
                <div style={{ width: 300, margin: 30 }} className="filters__runtime">
                    <h4>Maximum Runtime (minutes)</h4>
                    {Runtime()}
                </div>
                <button onClick={() => {
                    const genresString = selectedGenres.toString()
                    const providersString = selectedProviders.toString()
                    discoverMovie(genresString, providersString, runtime)
                }} >Watch This</button>
                <div>
                    {movie.title}
                </div>
            </section>
        </>
    )
}

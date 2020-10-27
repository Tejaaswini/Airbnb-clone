import React, {useState} from 'react'
import {Button} from '@material-ui/core'
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { DateRangePicker } from "react-date-range";
import '../styles/search.css'

function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2 style={{marginTop:'-20px'}}>
                Number of guests <PeopleIcon />
            </h2>
            <input min={0} defaultValue={2} type="number" style={{marginTop:'-20px'}}/>
            <Button onClick={() => history.push('/search')} style={{marginTop:'-20px'}}>Search Airbnb</Button>
        </div>
    )
}

export default Search

 
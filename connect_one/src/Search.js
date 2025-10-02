import React, { useState, useEffect } from 'react';
import { MDBCol } from 'mdbreact';
import Button from 'react-bootstrap/Button';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import "./Interest.css";
import RandomTweets from './ForYouPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faMusic } from '@fortawesome/free-solid-svg-icons'
import TwitterFeed from "./ForYouPage.js"
import CreatePosts from './CreateTweets.js';
import { Cards } from './Cards.js';
import Java from './java2.jpg'
import Random2 from './Random_Person2.jpg'
import Bio from './Bio.jpg'
import "./Search.css"
import ischool from './ischool.jpg'
import IUGA from './IUGA.jpg'
import Crags from './crags.jpg'
import Math from './math.jpg'
import NSBE from './NSBE.jpg'

export function Search(props) {
    let Classes =  [

        { "name": "CSE 142", "Classroom": "Classroom: Kane 131", "img": Java },
        { "name": "BIO 180", "Classroom": "Classroom: Kane 130", "img": Bio },
        { "name": "Info 200", "Classroom": "Classroom: GWN 301", "img": ischool },
        { "name": "IUGA", "Classroom": "iSchool", "img": IUGA },
        { "name": "Crags Climbing Center", "Classroom": "UW IMA", "img": Crags},
        { "name": "Math 124", "Classroom": "Classroom: PCAR 192", "img": Math},
        { "name": "NSBE", "Classroom": "Kelly ECC - Unity Room", "img": NSBE }
    
    ];
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = React.useState("");
    const [searchedArray, setSearchArray] = React.useState(Classes)
    let mapped = true;

    useEffect(() => {
        setTimeout(() => {
            setLoading(false); 
        }, 2500); 
    }, []);


   
    const handleSubmit = (e) => {
        if(search.length === 0) {
            setSearchArray(Classes);
        } else {
        let data = searchedArray.filter(element => {
            return search.length === 0 || element.name.toLowerCase().indexOf(search.toLowerCase()) >= 0 
        })
        setSearchArray(data);
         console.log("Hi", data);
    }
        
    }

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
        
    }

    
    
   
    
  //  setSearchArray(cardArray)

    return (
        <div class="rand">
            <MDBCol md="6">
                <div className="input-group md-form form-sm form-1 pl-0">
                    <div className="input-group-prepend">
                        <span className="input-group-text purple lighten-3" id="basic-text1">
                            <Button variant="outline-danger" onClick={handleSubmit}>Search</Button>
                        </span>
                    </div>
                    <input
                        className="form-control my-0 py-1"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={handleSearchChange}
                    />
                </div>
            </MDBCol>
          {searchedArray.map(element => {
            return(<Cards user={element} />)
          })}

        </div>
    );
}

export default Search;

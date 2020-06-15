import React, {useEffect,useState} from "react"
import {Link} from "react-router-dom"

function Names() {
    useEffect(()=>{
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async ()=>{
        const data = await fetch(
            'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole'
        );

        const items = await data.json();
        console.log(items);
        setItems(items);
    };

    

    return(
        <div>
            <h2>Page 3</h2>
            <div>{items.map(item =>(<p>{item.first} {item.last}</p>))}</div><br/><br/><br/>
            <div>
                <Link to="/time">
                    <button>Page 2</button>
                </Link>
                
                <Link to="/home">
                    <button>Page 1</button>
                </Link>
            </div>
        </div>
    );
};

export default Names;
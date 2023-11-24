import {useEffect, useState} from "react";

export default function Api() {
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`https://dogapi.dog/api/v2/breeds`)
        .then((res) => res.json())
        .then((json)=> {
            setItems(json.data);
            setIsLoaded(true);
        });
    }, []);
    
    if (!isLoaded) {
        return (
          <div>
            <h1> Data is loading...</h1>
          </div>
        );
    }

    return (
    <>
    <h1>Api Exercise: Dog Facts!</h1>
    {items.map((item) => (
        <ul key={item.id}>
          <li>
            <h3>{item.attributes.name}</h3>
            <span>{item.attributes.description}</span>
            <br /> Max Age: {item.attributes.life.max} years
            <br /> Min Age: {item.attributes.life.min} years
          </li>
        </ul>
      ))}
    </>
    );
  };
  

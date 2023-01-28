import "./Home.css";
import React, { useEffect, useState } from 'react';
import Header from "../Header/Header";
import Item from "../Item/Item";
import Profile from "../Profile/Profile";

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    console.log(items[0])
    return (
        <div className="home-container">
            <div className="left-side">
                <Header></Header>
                <h1 className="">Select your today's exercise</h1>
                <div className="items">
                    {
                        items.map(item => <Item
                            key={item.id}
                            item={item}
                        ></Item>)
                    }

                </div>
            </div>
            <div className="right-side home-text">
                <Profile></Profile>
            </div>
        </div>
    );
};

export default Home;
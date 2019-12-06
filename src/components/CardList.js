import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    return (
        <div>
            { //do a loop for each item of the object robots
                robots.map((user, i) => {
                    return (<Card key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />)
                })
            }
        </div>
    );
}

export default CardList;
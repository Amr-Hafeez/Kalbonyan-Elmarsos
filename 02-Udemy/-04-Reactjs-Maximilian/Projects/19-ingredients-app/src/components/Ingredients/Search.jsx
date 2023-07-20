import React, {useEffect, useState} from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
    const [filter, setFilter] = useState('');
    
    useEffect(() => {
        const identifier = setTimeout(() => {
            props.filterHandler(filter)
        }, 500)
        return () => {
            clearTimeout(identifier);
        };
    }, [filter]);
    
    return (
        <section className="search">
            <Card>
                <div className="search-input">
                    <label>Filter by Title</label>
                    <input
                        type="text"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
            </Card>
        </section>
    );
});

export default Search;

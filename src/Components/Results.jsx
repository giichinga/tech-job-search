import PropTypes from 'prop-types';
import TalentCard from './Card';

const Results = ({ inputValue, results }) => {
    return (
        <div className='results' >
            <h2 className='resultsHeader' >Search Results for: {inputValue} </h2>
            {results.length > 0 ? (
                <ul>
                    {results.map((person, index) => (

                        <TalentCard key={index} name={person.name} talent={person.title}  bio={person.description} rating={person.rating} />
                        
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

Results.propTypes = {
    inputValue: PropTypes.string.isRequired,
    results: PropTypes.array.isRequired
};



export default Results;

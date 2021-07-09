import './style.css';

const Rating = ({starsChecked}) => {
    
    return <div className="rating-container">
        {
            [1, 2, 3, 4, 5].map(index => index <= starsChecked ? <img key={index} src="./icons/star-checked.svg" alt="star-checked"/> : <img key={index} src="./icons/star-unchecked.svg" alt="star-checked"/>)
        }
    </div>
}

export default Rating;
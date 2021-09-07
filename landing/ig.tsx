import InstagramFeed from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

export const IG = () => {
    return (
        <div className='lightgrey-bg text-center flex items-center justify-center'>
            <span>Instagram</span>
            <img src='./images/icons/ig.svg'/>
            <span>allraga.id</span>
            <button className='blue-button'>Follow</button>
            <InstagramFeed token='IGQVJYZADZABWGN0OEZATXzhqbkZAqX2Q4ZAjY0M2cteUw1bWMxWTFIMTNMYmxyZAnhLQk8wdWhaMXBDOXNYNW1rRE1KdFhSUHJhOE92RnlzZA2p6YXQ3MHVfdlNOOGtjdWhaa0JmY0ZApRVBxdTlYRUNqUzJDTQZDZD' counter="4"/>
        </div>
    )
}
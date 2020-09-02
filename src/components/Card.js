import React from 'react';

// import React, {Fragment} from 'react';
// we have to wrap all elements in return in a <div> <div/> tag but, using fragment can prevent this 
// we just have to wrap the elements by <Fragment> </Fragment> or just empty tags <> </>
// Check this link for more info https://blog.logrocket.com/rendering-sibling-elements-react-fragments/

const Card =({ name, email, id }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
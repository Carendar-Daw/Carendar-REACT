import React from 'react';

const Details = ({cosa}) => {

    const URLIMG = 'http://localhost/proyectoDAW/Carendar-LARAVEL/storage/app/public/images/avatar/';

    return (
        <div>
            <img src={`${URLIMG}${cosa}`} />
        </div>
    );
};

export default Details;

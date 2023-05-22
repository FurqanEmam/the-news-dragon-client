import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique corrupti ut accusantium maxime, non quae, minus, nihil quos aspernatur tenetur assumenda facere beatae delectus exercitationem optio incidunt nemo quas. Dolore corporis aliquam nemo accusamus earum obcaecati laboriosam sit praesentium cum!</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;
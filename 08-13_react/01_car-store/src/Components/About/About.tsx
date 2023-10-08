import './About.css';
import Car_Store from '../../Assets/Images/car-store.jpg';

function About(): JSX.Element{
    return(
       <div className='About'>
         <p><strong>About the Store:</strong> Duis aliquip nostrud dolore sunt sint ut ad mollit. Duis amet Lorem mollit aliqua adipisicing quis laboris quis et do fugiat pariatur occaecat laborum. Fugiat anim officia mollit sint veniam dolor dolore incididunt nisi laborum nostrud laboris.</p>

         <p>Voluptate Lorem id irure exercitation aute aliquip excepteur sunt et tempor et quis esse. Magna eiusmod commodo proident anim id irure do proident ullamco officia nisi laborum eu Lorem. Sint est deserunt aliquip ullamco pariatur reprehenderit.</p>

        <div className='image'>
            <img src={Car_Store} alt="" />
        </div>
       </div>
    );
}

export default About;

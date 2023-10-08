import './Cars.css';
import Car_1 from '../../Assets/Images/car-0001.jpg';
import Car_2 from '../../Assets/Images/car-0002.jpg';
import Car_3 from '../../Assets/Images/car-0003.jpg';

function Cars(): JSX.Element{
    return(
       <div className='Cars'>
        <h1>Cars</h1>
        <ul>
            <li>Car 0001</li>
            <li>Car 0002</li>
            <li>Car 0003</li>
        </ul>
        <div className='images'>
            <img src={Car_1} alt="" />
            <img src={Car_2} alt="" />
            <img src={Car_3} alt="" />
        </div>
       </div>
    );
}

export default Cars;

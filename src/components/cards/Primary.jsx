import Button from "../button/Button";

const Primary = ({planPrice}) => {
    return ( 
        <div className="card-container card-container-primary">
            <div className="card-head">
                <h5 className="card-head-title">Professional</h5>
                <div className="card-price-container">
                    <span className="dolar">$</span>
                    <span className="card-price">{planPrice === 'Anually' ? '249.99': '24.99'}</span>
                </div>
            </div>
            <div className="card-body">
                <ul className="card-specs">
                    <li className="specs">
                        1T Storage
                    </li>
                    <li className="specs">
                        5 User Allowed
                    </li>
                    <li className="specs">
                        Send up to 10 GB
                    </li>
                </ul>
            </div>
            <div className="card-footer">
                <Button type='primary'/>
            </div>
        </div>
     );
}
 
export default Primary;
import Button from "../button/Button";
const Secondary = ({planPrice, plan}) => {
    return ( 
        <div className="card-container">
            <div className="card-head">
                <h5 className="card-head-title">{plan}</h5>
                <div className="card-price-container">
                    <span className="dolar">$</span>
                    {plan==='Basic' ?
                    <span className="card-price">
                        {planPrice === 'Anually' ? '199.99' : '19.99'}
                    </span> :
                    <span className="card-price">
                        {planPrice === 'Anually' ? '399.99' : '39.99'}
                    </span> 
                    }
                </div>
            </div>
            <div className="card-body">
                <ul className="card-specs">
                    <li className="specs">
                        {plan==='Basic' ? '500 GB' : '20 GB'} Storage
                    </li>
                    <li className="specs">
                    {plan==='Basic' ? '2' : '10'} User Allowed
                    </li>
                    <li className="specs">
                        Send up to 3 GB
                    </li>
                </ul>
            </div>
            <div className="card-footer">
                <Button type='secondary'/>
            </div>
        </div>
     );
}
 
export default Secondary;
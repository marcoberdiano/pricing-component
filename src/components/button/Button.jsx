const Button = ({type}) => {
    return ( 
        <button className={`btn ${type}`}>
            <span className="txt-btn">learn more</span>
        </button>
     );
}
 
export default Button;
import logo from '../img/logo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <img className='footer-brand' src={logo} alt="" />
            <div className='contact'>
                <div className='footdiv'>
                <span>Helpline: 8149083149083</span> 
                </div>
                <div className='footdiv'>
                <span>Address: MilkyWayyyy</span>
                </div>
            </div>
            <span className='copyright'>Copyright Omair 2021</span>
        </div>
    )
}

export default Footer

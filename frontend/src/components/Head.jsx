import { Link, useNavigate } from 'react-router-dom';

export default function Head() {
    const navigate = useNavigate();

    const linkStyle = {
        textDecoration: 'none',
        color: '#f5400f'
    };

    const handleLogout = () => {
        // Perform logout logic here, like clearing authentication tokens, user data, etc.
        console.log('User logged out');
        
        // Redirect to login page or home page after logout
        navigate('/login');
    };

    return (
        <nav>
            <div className="logo">
                <Link to={'/'} style={linkStyle}><h2>Note App</h2></Link>
            </div>
            <div className="action">
                <button onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
}

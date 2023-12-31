import { useLocation, useNavigate } from 'react-router-dom';
import { useLogin } from '../hook/UseLogin';

export const Login = () => {
    const { state } = useLocation();
    const fromPage = state?.from || '/';
    const navigate = useNavigate();
    const { singIn } = useLogin();
    const handleSubmit = event => {
        event.preventDefault();
        
        const form = event.target;
        const user = {
            firstName: form.firstName.value,
            lastName: form.firstName.value,
            number: form.number.value
        }
        
        singIn(user, () => navigate(fromPage));

    }
     
    return (
        <div className='login-page'>
            <div className="login-page block-form">
                <form onSubmit={handleSubmit}>
                    <label className='label-main'>Вхід/Реєстрація</label>
                    <label>Ім'я <input type="text" name='firstName' required/></label>
                    <label>Прізвище <input type="text" name='lastName' required/></label>
                    <label>Телефон <input type="number" name='number' required/></label>
                    <button className='btn-login' type='submit'>Вхід</button>
                </form>
            </div>
            
            <div className="login-decoration">
                <div className="login-decoration__ line"></div>
                <div className='login-decoration__info'>International Bank</div>
            </div>
        </div>
    );
};

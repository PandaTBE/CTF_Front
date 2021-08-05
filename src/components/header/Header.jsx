import { AuthInformation, LoginText, Logo, StyledAvatar, StylesHeaderWrapper } from './Header.styles';
import logo from '../../img/ctf_logo3.png';
import { useContext } from 'react';
import Context from '../../store/context';
import { AccountBox } from '@material-ui/icons';

// Компонент для отрисовки хедера
const Header = () => {
    const { state } = useContext(Context);
    const { isAuth } = state;

    return (
        <StylesHeaderWrapper elevation={1}>
            <Logo src={logo} alt='ctf logo' />
            <AuthInformation>
                {isAuth ? (
                    <StyledAvatar>
                        <AccountBox />
                    </StyledAvatar>
                ) : (
                    <LoginText>Login</LoginText>
                )}
            </AuthInformation>
        </StylesHeaderWrapper>
    );
};

export default Header;

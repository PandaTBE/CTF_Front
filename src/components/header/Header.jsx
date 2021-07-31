import { Logo, StyledAppBar } from './Header.styles';
import logo from '../../img/ctf_logo2.png';
import { useContext } from 'react';
import Context from '../../store/context';

// Компонент для отрисовки хедера
const Header = () => {
    const { state } = useContext(Context);

    console.log(state.isAuth);
    return (
        <StyledAppBar position='fixed' color='primary'>
            <Logo src={logo} alt='ctf logo' />
        </StyledAppBar>
    );
};

export default Header;

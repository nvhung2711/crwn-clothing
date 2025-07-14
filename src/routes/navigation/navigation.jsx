import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CrwnLogo from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { selectCurrentUser } from '../../store/user/user.selector';

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles';

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const { isCartOpen } = useContext(CartContext);

    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <img src={CrwnLogo} className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}> SIGN OUT</NavLink>
                        ) : (
                            <NavLink to='/auth'>
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropDown/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;
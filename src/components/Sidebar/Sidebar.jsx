import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute,
} from './SideBarElements';

function Sidebar({ isOpen, toggle }) {
	return (
		<SidebarContainer isOpen={isOpen}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarMenu>
				<SidebarLink to='/'>Strona Głowna</SidebarLink>
				<SidebarLink to='/oferta'>Oferta</SidebarLink>
				<SidebarLink to='/cennik'>Cennik</SidebarLink>
			</SidebarMenu>
			<SideBtnWrap>
				<SidebarRoute to='/'>Skontaktuj się</SidebarRoute>
			</SideBtnWrap>
		</SidebarContainer>
	);
}

export default Sidebar;

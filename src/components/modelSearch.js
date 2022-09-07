import * as React from 'react'

import {
    Paper,
    InputBase,
    Divider,
    SearchIcon,
    DirectionsIcon, IconButton,
    ArrowDropDownIcon,
    ClickAwayListener,
    Grow, ButtonGroup,
    Popper,
    MenuList, MenuItem
} from '../constant/FMaterielTools'
import { categories } from './widget';



export default function ModelSearch() {
    return (
        <Paper
            component="form" className='_input'
            sx={{ p: '0px 2px', display: 'flex', alignItems: 'center', mr: 3, width: 400 }}
        >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                {/* <MenuIcon /> */}
                <SplitButton />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Rechercher un produit"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <DirectionsIcon />
            </IconButton>
        </Paper>
    );
}

function SplitButton() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    // const handleClick = () => {
    //     console.info(`You clicked ${options[selectedIndex]}`);
    // };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
        alert(index);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <React.Fragment>
            <ButtonGroup ref={anchorRef}>
                <ArrowDropDownIcon onClick={handleToggle} />
            </ButtonGroup>
            <Popper
                sx={{
                    zIndex: 1,
                }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem>
                                    {categories.map((option, index) => (
                                        <MenuItem
                                            key={option}
                                            selected={index === selectedIndex}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                        >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </React.Fragment>
    );
}

import { IconButton } from '@material-ui/core';
import { Block as BlockIcon, CheckCircleOutline } from '@material-ui/icons';
import React, { useState } from 'react'

const UserItem = () => {
    const [clicked, setClicked] = useState(false)

    return (
        <IconButton onClick={() => setClicked(true)}>
            {clicked ? <BlockIcon style={{ color: 'red' }} /> : <CheckCircleOutline />}
        </IconButton>
    );

}
export default UserItem;
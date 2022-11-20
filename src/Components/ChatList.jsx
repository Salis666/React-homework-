import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';


export const ChatList = (props) => {
            const chats = [{ name: 'Kris', id: 1 }, { name: 'Alex', id: 2 }];
            return (

                        <List
                                    sx={{ width: '20%', maxWidth: 360, bgcolor: 'background' }}
                                    aria-label="contacts"
                        >
                                    {
                                                chats.map((e, i) =>

                                                            <ListItem key={i} disablePadding>
                                                                        <ListItemButton>
                                                                                    <ListItemIcon>
                                                                                                <StarIcon />
                                                                                    </ListItemIcon>
                                                                                    <ListItemText primary={e.name} />
                                                                        </ListItemButton>
                                                            </ListItem>

                                                )
                                    }
                                    <a href='/1'><ListItem disablePadding>
                                                <ListItemIcon>
                                                            <StarIcon />
                                                </ListItemIcon>
                                                <ListItemText primary='Conf' />
                                    </ListItem></a>
                        </List>

            );

}
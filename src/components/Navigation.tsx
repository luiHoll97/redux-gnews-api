import {
    Box, Button, Center, Flex,
    Stack, useColorMode, useColorModeValue, Avatar,
    Menu, MenuButton, MenuList, MenuItem, MenuDivider, Heading
}
    from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { connectGoogleUser } from '../features/signInGoogleSlice';
import { connect } from 'react-redux';
import { useAppSelector } from '../app/hooks';
import { selectGoogleUser } from '../features/googleUserSlice';



const mapDispatchToProps = {
    setGoogleUser: connectGoogleUser
}


const Navigation = ( { setGoogleUser } : any  ) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const googleUser = useAppSelector(selectGoogleUser);

    return (
        <>
            <Box bg={useColorModeValue('green.100', 'yellow.300')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Heading size={'md'}>redux-gnews-api</Heading>
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Menu>
                                <Button onClick={setGoogleUser}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                        Sign in 
                                </Button>
                                {googleUser && <Button onClick={() => console.log(googleUser)}>SignedIn</Button>}
                                <Button onClick={() => console.log(googleUser)} />

                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={googleUser ? googleUser.photoUrl : 'https://avatars.dicebear.com/api/male/username.svg'}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Teams</MenuItem>
                                    <MenuItem>Players</MenuItem>
                                    <MenuItem >Logout</MenuItem>

                                </MenuList>
                                <Button onClick={toggleColorMode}>
                                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                </Button>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
export default connect(null, mapDispatchToProps)(Navigation);

import {
    Box, Button, Center, Flex,
    Stack, useColorMode, useColorModeValue, Avatar,
    Menu, MenuButton, MenuList, MenuItem, MenuDivider, Heading
}
    from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navigation = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Box bg={useColorModeValue('green.100', 'yellow.300')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Heading size={'md'}>redux-gnews-api</Heading>
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={'https://avatars.dicebear.com/api/male/username.svg'}
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
export default Navigation;

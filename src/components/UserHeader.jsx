import { VStack,Box, Flex, Text, useToast } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {BsInstagram} from "react-icons/bs"
import { CgMoreO } from "react-icons/cg";
import { MenuButton, Menu, MenuList, MenuItem } from '@chakra-ui/menu'
import { Portal } from "@chakra-ui/portal";

const UserHeader = () => {
  const toast = useToast();

  const copyUrl = ()=>{
    const currentUrl = window.location.href;
    console.log(currentUrl);
    console.log(window)
    navigator.clipboard.writeText(currentUrl).then(()=>{toast({description : 'Copied'})});
  }


  return (
    <VStack gap={4} alignItems={"start"}>
        {/* <Box>BOx1</Box>
        <Box>BOx1</Box>

        <Box>BOx1</Box> */}
        <Flex justifyContent={"space-between"} w={"full"}>
          <Box>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              Mark Zuckerberg
            </Text>
            <Flex gap={2} alignItems={"center"}>
              <Text fontSize={"sm"}>markzuckerberg</Text>
              <Text fontSize={"xs"} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"}>threads.next</Text>
            </Flex>
          </Box>
          <Box>
            <Avatar name="Mark zuckerbeg"
              src="/zuck-avatar.png"
              size={{
                base : "md", 
                md: "xl"
              }}
            />
          </Box>
        </Flex>

        <Text>Co-founder, executive chairman and CEO of meta platform</Text>

        <Flex w={"full"} justifyContent={"space-between"}>
          <Flex gap={2} alignItems={"center"}>
            <Text color={"gray.light"}>3.2K Followers</Text>
            <Box w="1" h={"1"} bg={"gray.light"} borderRadius={"full"} ></Box>
            <Link color='gray.light'>instagram.com</Link>
          </Flex>
          <Flex>
            <Box className='icon-container'>
              <BsInstagram size={24} cursor={"pointer"}/>

            </Box>
            <Box className='icon-container'>
              <Menu>
              <MenuButton>
              <CgMoreO size={24} cursor={"pointer"}/>

              </MenuButton>
                <Portal>
                  <MenuList bg={"gray.dark"}>
                    <MenuItem bg={"gray.dark"} onClick={copyUrl}>Copy Link</MenuItem>
                    {/* <MenuItem>New Window</MenuItem>

                    <MenuItem>Open closed Tab</MenuItem>

                    <MenuItem>Open File</MenuItem> */}


                  </MenuList>
                </Portal>
              </Menu>

              
            </Box>
          </Flex>
        </Flex>

        <Flex w={"full"}>
          <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pb={3} cursor={"pointer"}>
            <Text fontWeight={"bold"} >Threads</Text>
          </Flex>
          <Flex flex={1} borderBottom={"1px solid gray"} justifyContent={"center"} color={"gray.light"} pb={3} cursor={"pointer"}>
          <Text fontWeight={"bold"} >Replies</Text>

          </Flex>

        </Flex>
    </VStack>
  )
}

export default UserHeader
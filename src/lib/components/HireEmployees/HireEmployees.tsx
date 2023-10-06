import { Center, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'

function HireEmployees() {
    const data = [
        {
            title: "Hire a Web Designer",
            description: "Lorem ipsum dolor sit amet consectetur. Maecenas ullamcorper ",
            icon: '/employees/web-designer.svg'
        },
        {
            title: "Hire a App Developer",
            description: "Lorem ipsum dolor sit amet consectetur. Maecenas ullamcorper ",
            icon: '/employees/app-developer.svg'
        },
        {
            title: "Hire a QA Engineer",
            description: "Lorem ipsum dolor sit amet consectetur. Maecenas ullamcorper ",
            icon: '/employees/qa-eng.svg'
        },
        {
            title: "Hire an Al Engineer",
            description: "Lorem ipsum dolor sit amet consectetur. Maecenas ullamcorper ",
            icon: '/employees/ai-eng.svg'
        },
        {
            title: "Hire a Digital Marketer",
            description: "Lorem ipsum dolor sit amet consectetur. Maecenas ullamcorper ",
            icon: '/employees/digital-marketer.svg'
        },
        {
            title: "Hire a UI/UX Designer",
            description: "Lorem ipsum dolor sit amet consectetur. Maecenas ullamcorper ",
            icon: '/employees/ux-designer.svg'
        },
    ]
    return (
        <SimpleGrid minChildWidth={{ base: "280px", md: '380px' }} spacingY={"20px"} spacingX={{ base: "40px", md: "80px" }}
            py={{ base: "40px", md: "80px" }}
            px={{ base: "20px", md: "50px", lg: "120px" }}
        >
            {
                data.map((item, index) => (
                    <Center>
                        <Flex key={`${item.title.trim()}-${index}`} _hover={{
                            bg: '#F2F2F2'
                        }}
                            transition={'ease-in-out .2s'} cursor={'pointer'}
                            flexDirection={'column'} align='center' justify={'center'} height='365px' width={{ base: '280px', md: "380px" }} borderRadius={'18px'}>
                            <Image src={item.icon} alt='Icon' />
                            <Text mt='43px' color={'#424242'} fontSize={'25px'} fontWeight={500}>
                                {item.title}
                            </Text>
                            <Text mt='18px' color={'#757575'} fontSize={'19px'} textAlign={'center'} maxW='311px' fontWeight={500}>
                                {item.description}
                            </Text>
                        </Flex>
                    </Center>
                ))
            }
        </SimpleGrid>
    )
}

export default HireEmployees
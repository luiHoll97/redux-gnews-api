import { Article } from "../../types/article"
import { Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react"
import Heart from "react-animated-heart";

/*
export interface Article {
    title: string;
    description: string;
    url: string;
    content: string;
    image: string;
    publishedAt: string;
    source: {
        name: string;
        url: string;
    };
}
*/

interface Props {
    article: Article;
}

const ArticleCard = ({ article }: Props) => {
    return (
        <div>
            <Card maxW='sm' >
                <CardBody maxH={'300px'}>
                    <Image
                        src={article.image}
                        alt={article.title}
                        borderRadius='lg'
                        h={'150px'}
                        w={'100%'}
                        objectFit='cover'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='sm'>{article.title}</Heading>
                        <Text noOfLines={2} >
                            {article.description}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider mt={5} />

                <CardFooter padding={0}>
                    <Center>
                        <ButtonGroup spacing='1'>
                            <a href={article.source.url} target="_blank" rel="noopener noreferrer">
                                <Button variant='ghost' colorScheme='blue'>
                                    Go to Source
                                </Button>
                            </a>
                        </ButtonGroup>
                        <Heart isClick={false} onClick={() => { }} />
                    </Center>
                </CardFooter>
                <Text color='blue.600' fontSize='sm'>
                            {article.source.name}
                        </Text>
            </Card>

        </div>
    )
}

export default ArticleCard
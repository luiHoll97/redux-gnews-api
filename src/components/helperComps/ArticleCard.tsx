import { Article } from "../../types/article"
import { Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { useAppSelector } from "../../app/hooks";
import { selectGoogleUser } from "../../features/googleUserSlice";
import { HeartClick } from "./HeartClick";
import { ImportedArticle } from "../../types/importedArticle";

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
    article: Article 
}

const ArticleCard = ({ article }: Props) => {
    const userID: string | undefined = useAppSelector(selectGoogleUser)?.localId;
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
                        <Heading size='sm' noOfLines={3}>{article.title}</Heading>
                        <Text noOfLines={2} >
                            {article.description}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider mt={5} />
                <Center >
                    <CardFooter padding={0} m={1}>
                        <Stack direction='row' spacing='6' align='center' justify='space-between' padding={0}>
                                <a href={article.source.url} target="_blank" rel="noopener noreferrer">
                                    <Button variant='ghost' colorScheme='blue'>
                                        Go to Source
                                    </Button>
                                </a>
                            <HeartClick userID={userID} article={article}/>
                        </Stack>
                    </CardFooter>
                </Center>
            </Card>

        </div>
    )
}

export default ArticleCard
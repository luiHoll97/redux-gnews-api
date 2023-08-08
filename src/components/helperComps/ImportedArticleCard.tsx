import { Article } from "../../types/article"
import { Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { useAppSelector } from "../../app/hooks";
import { selectGoogleUser } from "../../features/googleUserSlice";
import { HeartClick } from "./HeartClick";
import { ImportedArticle } from "../../types/importedArticle";


interface Props {
    article: ImportedArticle;
}

const ImportedArticleCard = ({ article }: Props) => {
    const userID: string | undefined = useAppSelector(selectGoogleUser)?.localId;
    return (
        <div>
            { article && 
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
                        <Stack direction='row' spacing='1' align='center' justify='space-between' padding={0}>
                                <a href={article.source.url} target="_blank" rel="noopener noreferrer">
                                    <Button variant='ghost' colorScheme='blue'>
                                        Go to Source
                                    </Button>
                                </a>
                                <Button variant='ghost' colorScheme='red'>Remove</Button>
                        </Stack>
                    </CardFooter>
                </Center>
            </Card>
}
        </div>
    )
}

export default ImportedArticleCard
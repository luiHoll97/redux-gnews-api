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
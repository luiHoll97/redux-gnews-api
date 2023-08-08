export interface ImportedArticle {
        ref?: string;
        title: string;
        userId?: string;
        uuid?: string;
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
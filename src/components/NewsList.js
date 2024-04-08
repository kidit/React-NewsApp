import styled from 'styled-components';
import NewsItem from './Newsitem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({ category }) => {

    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=d4f205ca7f4445f29c8d50fc9deef3ca`,
        );
    }, [category]);

    if (loading) {
        return <NewsListBlock>Loading...</NewsListBlock>;
    }

    if (!response) {
        return null;
    }

    if (error) {
    return <NewsListBlock>Error!</NewsListBlock>;
    }

    const {articles} = response.data;

    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;

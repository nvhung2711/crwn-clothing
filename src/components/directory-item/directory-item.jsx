import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.style';

const DirectoryItem = ({ category }) => {
    const { imageurl, title } = category;

    return (
        <DirectoryItemContainer>
            <BackgroundImage imageurl={imageurl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
}

export default DirectoryItem;
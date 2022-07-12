import React from 'react';
import styled from '@emotion/styled';
import '../styles/styles.css';
import { StyledGrid } from '../components/ImageGalleryTemplateBreeds';
import GridItem from '../components/GridItem';
import { Box } from '@mui/system';

const NoItemBox = styled(Box)({
  position: 'absolute',
  width: '100%',
  padding: '18px 20px',
  backgroundColor: 'var(--main-gray)',
  color: 'var(--gray)',
  height: 'fit-content',
  borderRadius: '10px',
});

const GridPageLoyaut = (props) => {
  //NOTE: Value for every categorie:
  //      Likes: '1'
  //      Dislikes: '0'
  //      Favourites: '2'

  return (
    <StyledGrid
      sx={{
        display: { xs: 'flex', md: 'grid' },
        flexDirection: { xs: 'column' },
      }}
    >
      {props.arr.map((elem) => (
        <GridItem key={elem.id} id={elem.id} imageUrl={elem.url} favValue={elem.value === 2 && true} />
      ))}

      {props.arr.length === 0 && <NoItemBox>No item found</NoItemBox>}
    </StyledGrid>
  );
};

export default GridPageLoyaut;
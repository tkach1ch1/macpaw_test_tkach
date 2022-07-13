import React, { useEffect, useState } from 'react';
import '../styles/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Categories from '../components/Categories';
import MainBox from '../components/MainBox';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import PageName from '../components/PageName';
import ChoseCategoryGallery from '../components/ChoseCategoryGallery';
import ModalUpload from '../components/ModalUpload';
import ScrollToTop from '../components/ScrollToTop';
import ImageGalleryTemplateGallery from '../components/ImageGalleryTemlateGallery';
import { fetchImages } from '../redux/allImagesGalleryReducer';
import Context from '../components/context';

const Gallery = () => {
  const allImages = useSelector((state) => state.allImages.images);
  const imagesStatus = useSelector((state) => state.allImages.status);
  const imagesError = useSelector((state) => state.allImages.error);

  const [limit, setLimit] = useState(5);
  const [order, setOrder] = useState('RANDOM');
  const [type, setType] = useState('jpg,png,gif');
  const [breed, setBreed] = useState('');
  const [breedId, setBreedId] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages({ limit, order, type, breedId }));
  }, [dispatch, limit, order, type, breedId]);

  const value = { limit, order, type, breedId };

  return (
    <Context.Provider value={value}>
      <PageWrapper>
        <Box
          sx={{
            display: { xs: 'none', lg: 'block' },
          }}
        >
          <Categories />
        </Box>
        <Box>
          <Header />
          <MainBox backgroundColor={'#ffffff'}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  sm: 'row',
                  justifyContent: 'space-between',
                },
                mb: { xs: '10px', sm: '0px' },
              }}
            >
              <PageName name='Gallery' />
              <ModalUpload />
            </Box>

            <ChoseCategoryGallery
              limit={limit}
              order={order}
              type={type}
              breed={breed}
              breedId={breedId}
              setLimit={setLimit}
              setOrder={setOrder}
              setType={setType}
              setBreed={setBreed}
              setBreedId={setBreedId}
            />

            <ImageGalleryTemplateGallery
              arr={allImages}
              status={imagesStatus}
              error={imagesError}
            />
            <ScrollToTop />
          </MainBox>
        </Box>
      </PageWrapper>
    </Context.Provider>
  );
};

export default Gallery;

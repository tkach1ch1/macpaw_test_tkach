import React from 'react';
import styled from '@emotion/styled';
import '../styles/styles.css';
import { useSelector } from 'react-redux';
import SelectComponent from '../components/SelectComponent';
import Box from '@mui/material/Box';
import { InputLabel } from '@mui/material';
import UpdateButton from './UpdateButton';

const StyledBox = styled(Box)({
  backgroundColor: 'var(--main-gray)',
  borderRadius: '20px',
  width: '100%',
  padding: '10px 10px',
  marginBottom: '10px',
});

const StyledInputLabel = styled(InputLabel)({
  textTransform: 'uppercase',
  fontSize: '10px',
  fontWeight: '500',
  color: 'var(--gray)',
  padding: '3px 13px',
});

const arrLimit = [
  { name: '5 items per page', value: 5 },
  { name: '10 items per page', value: 10 },
  { name: '15 items per page', value: 15 },
  { name: '20 items per page', value: 20 },
];

const arrOrder = [
  { name: 'Random', value: 'random' },
  { name: 'Desc', value: 'desc' },
  { name: 'Asc', value: 'asc' },
];

const arrayType = [
  { name: 'All', value: 'jpg,png,gif' },
  { name: 'Static', value: 'jpg,png' },
  { name: 'Animated', value: 'gif' },
];

const ChoseCategoryGallery = (props) => {
  const allBreeds = useSelector((state) => state.allBreeds.breeds);

  const onHandleLimitChange = (event) => {
    props.setLimit(event.target.value);
  };

  const onHandleOrderChange = (event) => {
    props.setOrder(event.target.value);
  };

  const onHandleTypeChange = (event) => {
    props.setType(event.target.value);
  };

  const onHandleBreedChange = (event) => {
    props.setBreed(event.target.value);
    if (allBreeds.find((elem) => elem.name === event.target.value)) {
      let foundBreed = allBreeds.find(
        (elem) => elem.name === event.target.value
      );
      props.setBreedId(foundBreed.id);
    } else props.setBreedId(' ')
    
  };

  return (
    <StyledBox
      display={'flex'}
      flexDirection={{ xs: 'column', sm: 'row' }}
      gap={{ xs: 0, sm: '20px' }}
    >
      <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
        <StyledInputLabel>Order</StyledInputLabel>
        <SelectComponent
          arr={arrOrder}
          backgroundColor='white'
          color='var(--black)'
          mb='10px'
          value={props.order}
          onChange={onHandleOrderChange}
        />
        <StyledInputLabel>Breed</StyledInputLabel>
        <SelectComponent
          arr={allBreeds}
          firstParam='None'
          backgroundColor='white'
          color='var(--black)'
          mb='10px'
          value={props.breed}
          onChange={onHandleBreedChange}
        />
      </Box>
      <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
        <StyledInputLabel>Type</StyledInputLabel>
        <SelectComponent
          arr={arrayType}
          backgroundColor='white'
          color='var(--black)'
          mb='10px'
          value={props.type}
          onChange={onHandleTypeChange}
        />

        <StyledInputLabel>Limit</StyledInputLabel>
        <Box display={'flex'} gap={'10px'}>
          <SelectComponent
            arr={arrLimit}
            backgroundColor='white'
            color='var(--black)'
            mb='10px'
            value={props.limit}
            onChange={onHandleLimitChange}
          />
          <UpdateButton
            displayXS={'none'}
            displaySM={'flex'}
            width={'40px'}
            height={'40px'}
            limit={props.limit}
            type={props.type}
            order={props.order}
          />
        </Box>
      </Box>
      <UpdateButton displayXS={'flex'} displaySM={'none'} />
    </StyledBox>
  );
};

export default ChoseCategoryGallery;

import React from 'react';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';

const BorderedChip = styled(Chip)(({ theme }) => ({
  border: `1px solid #FF1CF7`,
  color: 'violet',
  boxShadow: 'none',
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    border: `violet`,
    backgroundColor: 'violet',    
    color: '#1e1e1e',
  },
}));

const ChipArray = ({ items }) => {
  return (
    <div style={{height: 'auto', display: 'ruby-text'}}>
      {items.map((item, index) => (
        <BorderedChip
          key={index}
          label={item?.name}
          variant="outlined"
          style={{
            margin: '4px',
            fontSize: item?.size === 'lg' ? '1.3rem' : item?.size === 'md' ? '1rem' : '0.8rem',
            height: '2rem',
          }}
        />
      ))}
    </div>
  );
};

export default ChipArray;

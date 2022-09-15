import { Box, Paper, TextField } from '@mui/material';
import { ChangeEvent, FC, memo } from 'react';
import SearchIcon from '@mui/icons-material/Search';

type P = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const EditSearch: FC<P> = memo(({ onChange }) => {
  return (
    <Paper component='form' sx={{ m: 2, p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon sx={{ mr: 1, my: 0.5 }} />
        <TextField
          label='キーワードから検索'
          variant='standard'
          onChange={onChange}
        />
      </Box>
    </Paper>
  );
});

export default EditSearch;

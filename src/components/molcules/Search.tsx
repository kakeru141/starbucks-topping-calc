import { InputAdornment, TextField } from '@mui/material';
import { ChangeEvent, Dispatch, FC, memo, SetStateAction } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Product } from '../../types/productType';

type P = {
  setSearchDatas: Dispatch<SetStateAction<Product[]>>;
  beforeDatas: Product[];
};

const Search: FC<P> = memo(({ setSearchDatas, beforeDatas }) => {
  const search = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setSearchDatas(beforeDatas);
    } else {
      setSearchDatas(
        beforeDatas.filter((data) =>
          Object.values(data.productName).some(
            () =>
              data.productName
                .toUpperCase()
                .indexOf(e.target.value.trim().toUpperCase()) !== -1
          )
        )
      );
    }
  };

  return (
    <>
      <TextField
        label='商品を探す'
        size='small'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={search}
      />
    </>
  );
});

export default Search;

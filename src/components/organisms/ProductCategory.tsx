import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { FC, memo } from 'react';
import { Product } from '../../types/productType';

type P = {
  searchDatas: Product[];
  text: string;
  name: string;
};

const ProductCategory: FC<P> = memo(
  ({ searchDatas, text, name }) => {
    return (
      <section>
        <Typography
          component='h2'
          variant='h6'
          id={name}
          sx={{
            fontWeight: 'bold',
            mt: 4,
            p: '8px 0',
            borderLeft: '8px solid #42a5f5',
            bgcolor: '#f5f5f5',
          }}>
          {text}
        </Typography>
        <List>
          {searchDatas.map((data) => {
            if (data.category === name) {
              return (
                <Link href={`/products/${data._id}`} key={data._id}>
                  <ListItem component='a'>
                    <ListItemButton>
                      <ListItemText
                        primary={data.productName}
                        primaryTypographyProps={{
                          variant: 'h6',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              );
            }
          })}
        </List>
      </section>
    );
  },
  (prev: P, next: P) => {
    const prevDeepTrigger = prev.searchDatas;
    const nextDeepTrigger = next.searchDatas;
    return prevDeepTrigger === nextDeepTrigger;
  }
);

export default ProductCategory;

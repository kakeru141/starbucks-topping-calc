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
          variant='subtitle1'
          fontWeight='bold'
          id={name}
          sx={{
            mt: 3,
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
                  <ListItem>
                    <ListItemButton component='a'>
                      <ListItemText
                        primary={data.productName}
                        primaryTypographyProps={{
                          component: 'p',
                          variant: 'subtitle2',
                          fontWeight: 'bold',
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

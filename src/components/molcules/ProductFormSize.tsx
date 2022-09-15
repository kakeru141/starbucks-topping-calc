import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { ChangeEvent, Dispatch, FC, memo, SetStateAction } from 'react';
import { useSetRecoilState } from 'recoil';
import { totalPriceAtom } from '../../recoil/atom/totalPriceAtom';
import { Product } from '../../types/productType';

type P = {
  data: {
    takeout: {
      short: {
        select: boolean;
        value: number;
      };
      tall: {
        select: boolean;
        value: number;
      };
      grande: {
        select: boolean;
        value: number;
      };
      venti: {
        select: boolean;
        value: number;
      };
    };
    shop: {
      short: {
        select: boolean;
        value: number;
      };
      tall: {
        select: boolean;
        value: number;
      };
      grande: {
        select: boolean;
        value: number;
      };
      venti: {
        select: boolean;
        value: number;
      };
    };
  };
  setData: Dispatch<SetStateAction<Product>>;
  isShop: boolean;
};

const ProductFormSize: FC<P> = memo(
  ({ data, setData, isShop }) => {
    const setTotalPrice = useSetRecoilState(totalPriceAtom);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.name === 'short') {
        setData((prev) => ({
          ...prev,
          size: {
            ...prev.size,
            shop: {
              ...prev.size.shop,
              short: {
                ...prev.size.shop.short,
                select: true,
              },
              tall: {
                ...prev.size.shop.tall,
                select: false,
              },
              grande: {
                ...prev.size.shop.grande,
                select: false,
              },
              venti: {
                ...prev.size.shop.venti,
                select: false,
              },
            },
            takeout: {
              ...prev.size.takeout,
              short: {
                ...prev.size.takeout.short,
                select: true,
              },
              tall: {
                ...prev.size.takeout.tall,
                select: false,
              },
              grande: {
                ...prev.size.takeout.grande,
                select: false,
              },
              venti: {
                ...prev.size.takeout.venti,
                select: false,
              },
            },
          },
        }));
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            current: {
              ...prev.shop.current,
              size: e.target.name,
            },
            price: {
              ...prev.shop.price,
              size: data.shop.short.value,
            },
          },
          takeout: {
            ...prev.takeout,
            current: {
              ...prev.takeout.current,
              size: e.target.name,
            },
            price: {
              ...prev.takeout.price,
              size: data.takeout.short.value,
            },
          },
        }));
      } else if (e.target.name === 'tall') {
        setData((prev) => ({
          ...prev,
          size: {
            ...prev.size,
            shop: {
              ...prev.size.shop,
              short: {
                ...prev.size.shop.short,
                select: false,
              },
              tall: {
                ...prev.size.shop.tall,
                select: true,
              },
              grande: {
                ...prev.size.shop.grande,
                select: false,
              },
              venti: {
                ...prev.size.shop.venti,
                select: false,
              },
            },
            takeout: {
              ...prev.size.takeout,
              short: {
                ...prev.size.takeout.short,
                select: false,
              },
              tall: {
                ...prev.size.takeout.tall,
                select: true,
              },
              grande: {
                ...prev.size.takeout.grande,
                select: false,
              },
              venti: {
                ...prev.size.takeout.venti,
                select: false,
              },
            },
          },
        }));
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            current: {
              ...prev.shop.current,
              size: e.target.name,
            },
            price: {
              ...prev.shop.price,
              size: data.shop.tall.value,
            },
          },
          takeout: {
            ...prev.takeout,
            current: {
              ...prev.takeout.current,
              size: e.target.name,
            },
            price: {
              ...prev.takeout.price,
              size: data.takeout.tall.value,
            },
          },
        }));
      } else if (e.target.name === 'grande') {
        setData((prev) => ({
          ...prev,
          size: {
            ...prev.size,
            shop: {
              ...prev.size.shop,
              short: {
                ...prev.size.shop.short,
                select: false,
              },
              tall: {
                ...prev.size.shop.tall,
                select: false,
              },
              grande: {
                ...prev.size.shop.grande,
                select: true,
              },
              venti: {
                ...prev.size.shop.venti,
                select: false,
              },
            },
            takeout: {
              ...prev.size.takeout,
              short: {
                ...prev.size.takeout.short,
                select: false,
              },
              tall: {
                ...prev.size.takeout.tall,
                select: false,
              },
              grande: {
                ...prev.size.takeout.grande,
                select: true,
              },
              venti: {
                ...prev.size.takeout.venti,
                select: false,
              },
            },
          },
        }));
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            current: {
              ...prev.shop.current,
              size: e.target.name,
            },
            price: {
              ...prev.shop.price,
              size: data.shop.grande.value,
            },
          },
          takeout: {
            ...prev.takeout,
            current: {
              ...prev.takeout.current,
              size: e.target.name,
            },
            price: {
              ...prev.takeout.price,
              size: data.takeout.grande.value,
            },
          },
        }));
      } else if (e.target.name === 'venti') {
        setData((prev) => ({
          ...prev,
          size: {
            ...prev.size,
            shop: {
              ...prev.size.shop,
              short: {
                ...prev.size.shop.short,
                select: false,
              },
              tall: {
                ...prev.size.shop.tall,
                select: false,
              },
              grande: {
                ...prev.size.shop.grande,
                select: false,
              },
              venti: {
                ...prev.size.shop.venti,
                select: true,
              },
            },
            takeout: {
              ...prev.size.takeout,
              short: {
                ...prev.size.takeout.short,
                select: false,
              },
              tall: {
                ...prev.size.takeout.tall,
                select: false,
              },
              grande: {
                ...prev.size.takeout.grande,
                select: false,
              },
              venti: {
                ...prev.size.takeout.venti,
                select: true,
              },
            },
          },
        }));
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            current: {
              ...prev.shop.current,
              size: e.target.name,
            },
            price: {
              ...prev.shop.price,
              size: data.shop.venti.value,
            },
          },
          takeout: {
            ...prev.takeout,
            current: {
              ...prev.takeout.current,
              size: e.target.name,
            },
            price: {
              ...prev.takeout.price,
              size: data.takeout.venti.value,
            },
          },
        }));
      } else {
        console.log('例外');
      }
    };

    if (isShop) {
      return (
        <RadioGroup
          onChange={onChange}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            '@media screen and (max-width: 600px)': {
              flexDirection: 'column',
              width: '100px',
              m: 'auto',
            },
          }}>
          {Object.entries(data.shop).map(([key, value], index) => {
            if (value.value) {
              return (
                <FormControlLabel
                  key={index}
                  name={key}
                  control={<Radio />}
                  value={value.select}
                  label={key}
                  checked={value.select}
                />
              );
            } else {
              return <div key={index}></div>;
            }
          })}
        </RadioGroup>
      );
    } else {
      return (
        <RadioGroup
          onChange={onChange}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            '@media screen and (max-width: 600px)': {
              flexDirection: 'column',
              width: '100px',
              m: 'auto',
            },
          }}>
          {Object.entries(data.takeout).map(([key, value], index) => {
            if (value.value) {
              return (
                <FormControlLabel
                  key={index}
                  name={key}
                  control={<Radio />}
                  value={value.select}
                  label={key}
                  checked={value.select}
                />
              );
            } else {
              return <div key={index}></div>;
            }
          })}
        </RadioGroup>
      );
    }
  },
  (prev: P, next: P) => {
    const prevDeepTrigger = prev.data;
    const nextDeepTrigger = next.data;
    return prevDeepTrigger === nextDeepTrigger;
  }
);

export default ProductFormSize;

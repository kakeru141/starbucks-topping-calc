import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { ChangeEvent, Dispatch, FC, memo, SetStateAction } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSetRecoilState } from 'recoil';
import { totalPriceAtom } from '../../recoil/atom/totalPriceAtom';
import { Product } from '../../types/productType';

type P = {
  data: {
    detail: {
      id: string;
      text: string;
      exist: boolean;
    };
    content: {
      [name: string]: {
        text: string;
        select: boolean;
        price: {
          takeout: number;
          shop: number;
        };
      };
    };
  };
  setData: Dispatch<SetStateAction<Product>>;
  isShop: boolean;
  isDecaf?: boolean;
};

const ProductFormGroup: FC<P> = memo(({ data, setData, isShop, isDecaf }) => {
  const setTotalPrice = useSetRecoilState(totalPriceAtom);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'extraWhip') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          whipGroup: {
            ...prev.topping.whipGroup,
            content: {
              ...prev.topping.whipGroup.content,
              extraWhip: {
                ...prev.topping.whipGroup.content.extraWhip,
                select: true,
              },
              lightWhip: {
                ...prev.topping.whipGroup.content.lightWhip,
                select: false,
              },
              noneWhip: {
                ...prev.topping.whipGroup.content.noneWhip,
                select: false,
              },
              inWhip: {
                ...prev.topping.whipGroup.content.inWhip,
                select: false,
              },
              noneWhipGroup: {
                ...prev.topping.whipGroup.content.noneWhipGroup,
                select: false,
              },
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
            whipGroup: true,
          },
          price: {
            ...prev.shop.price,
            whipGroup: data.content.extraWhip.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            whipGroup: true,
          },
          price: {
            ...prev.takeout.price,
            whipGroup: data.content.extraWhip.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'lightWhip') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          whipGroup: {
            ...prev.topping.whipGroup,
            content: {
              ...prev.topping.whipGroup.content,
              extraWhip: {
                ...prev.topping.whipGroup.content.extraWhip,
                select: false,
              },
              lightWhip: {
                ...prev.topping.whipGroup.content.lightWhip,
                select: true,
              },
              noneWhip: {
                ...prev.topping.whipGroup.content.noneWhip,
                select: false,
              },
              inWhip: {
                ...prev.topping.whipGroup.content.inWhip,
                select: false,
              },
              noneWhipGroup: {
                ...prev.topping.whipGroup.content.noneWhipGroup,
                select: false,
              },
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
            whipGroup: true,
          },
          price: {
            ...prev.shop.price,
            whipGroup: data.content.lightWhip.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            whipGroup: true,
          },
          price: {
            ...prev.takeout.price,
            whipGroup: data.content.lightWhip.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'noneWhip') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          whipGroup: {
            ...prev.topping.whipGroup,
            content: {
              ...prev.topping.whipGroup.content,
              extraWhip: {
                ...prev.topping.whipGroup.content.extraWhip,
                select: false,
              },
              lightWhip: {
                ...prev.topping.whipGroup.content.lightWhip,
                select: false,
              },
              noneWhip: {
                ...prev.topping.whipGroup.content.noneWhip,
                select: true,
              },
              inWhip: {
                ...prev.topping.whipGroup.content.inWhip,
                select: false,
              },
              noneWhipGroup: {
                ...prev.topping.whipGroup.content.noneWhipGroup,
                select: false,
              },
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
            whipGroup: true,
          },
          price: {
            ...prev.shop.price,
            whipGroup: data.content.noneWhip.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            whipGroup: true,
          },
          price: {
            ...prev.takeout.price,
            whipGroup: data.content.noneWhip.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'inWhip') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          whipGroup: {
            ...prev.topping.whipGroup,
            content: {
              ...prev.topping.whipGroup.content,
              extraWhip: {
                ...prev.topping.whipGroup.content.extraWhip,
                select: false,
              },
              lightWhip: {
                ...prev.topping.whipGroup.content.lightWhip,
                select: false,
              },
              noneWhip: {
                ...prev.topping.whipGroup.content.noneWhip,
                select: false,
              },
              inWhip: {
                ...prev.topping.whipGroup.content.inWhip,
                select: true,
              },
              noneWhipGroup: {
                ...prev.topping.whipGroup.content.noneWhipGroup,
                select: false,
              },
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
            whipGroup: true,
          },
          price: {
            ...prev.shop.price,
            whipGroup: data.content.inWhip.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            whipGroup: true,
          },
          price: {
            ...prev.takeout.price,
            whipGroup: data.content.inWhip.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'noneWhipGroup') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          whipGroup: {
            ...prev.topping.whipGroup,
            content: {
              ...prev.topping.whipGroup.content,
              extraWhip: {
                ...prev.topping.whipGroup.content.extraWhip,
                select: false,
              },
              lightWhip: {
                ...prev.topping.whipGroup.content.lightWhip,
                select: false,
              },
              noneWhip: {
                ...prev.topping.whipGroup.content.noneWhip,
                select: false,
              },
              inWhip: {
                ...prev.topping.whipGroup.content.inWhip,
                select: false,
              },
              noneWhipGroup: {
                ...prev.topping.whipGroup.content.noneWhipGroup,
                select: true,
              },
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
            whipGroup: false,
          },
          price: {
            ...prev.shop.price,
            whipGroup: data.content.noneWhipGroup.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            whipGroup: false,
          },
          price: {
            ...prev.takeout.price,
            whipGroup: data.content.noneWhipGroup.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'foamMilk') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          milkGroup: {
            ...prev.topping.milkGroup,
            content: {
              ...prev.topping.milkGroup.content,
              foamMilk: {
                ...prev.topping.milkGroup.content.foamMilk,
                select: true,
              },
              lightMilk: {
                ...prev.topping.milkGroup.content.lightMilk,
                select: false,
              },
              noneMilk: {
                ...prev.topping.milkGroup.content.noneMilk,
                select: false,
              },
              noneMilkGroup: {
                ...prev.topping.milkGroup.content.noneMilkGroup,
                select: false,
              },
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
            milkGroup: true,
          },
          price: {
            ...prev.shop.price,
            milkGroup: data.content.foamMilk.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            milkGroup: true,
          },
          price: {
            ...prev.takeout.price,
            milkGroup: data.content.foamMilk.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'lightMilk') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          milkGroup: {
            ...prev.topping.milkGroup,
            content: {
              ...prev.topping.milkGroup.content,
              foamMilk: {
                ...prev.topping.milkGroup.content.foamMilk,
                select: false,
              },
              lightMilk: {
                ...prev.topping.milkGroup.content.lightMilk,
                select: true,
              },
              noneMilk: {
                ...prev.topping.milkGroup.content.noneMilk,
                select: false,
              },
              noneMilkGroup: {
                ...prev.topping.milkGroup.content.noneMilkGroup,
                select: false,
              },
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
            milkGroup: true,
          },
          price: {
            ...prev.shop.price,
            milkGroup: data.content.lightMilk.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            milkGroup: true,
          },
          price: {
            ...prev.takeout.price,
            milkGroup: data.content.lightMilk.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'noneMilk') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          milkGroup: {
            ...prev.topping.milkGroup,
            content: {
              ...prev.topping.milkGroup.content,
              foamMilk: {
                ...prev.topping.milkGroup.content.foamMilk,
                select: false,
              },
              lightMilk: {
                ...prev.topping.milkGroup.content.lightMilk,
                select: false,
              },
              noneMilk: {
                ...prev.topping.milkGroup.content.noneMilk,
                select: true,
              },
              noneMilkGroup: {
                ...prev.topping.milkGroup.content.noneMilkGroup,
                select: false,
              },
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
            milkGroup: true,
          },
          price: {
            ...prev.shop.price,
            milkGroup: data.content.noneMilk.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            milkGroup: true,
          },
          price: {
            ...prev.takeout.price,
            milkGroup: data.content.noneMilk.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'noneMilkGroup') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          milkGroup: {
            ...prev.topping.milkGroup,
            content: {
              ...prev.topping.milkGroup.content,
              foamMilk: {
                ...prev.topping.milkGroup.content.foamMilk,
                select: false,
              },
              lightMilk: {
                ...prev.topping.milkGroup.content.lightMilk,
                select: false,
              },
              noneMilk: {
                ...prev.topping.milkGroup.content.noneMilk,
                select: false,
              },
              noneMilkGroup: {
                ...prev.topping.milkGroup.content.noneMilkGroup,
                select: true,
              },
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
            milkGroup: false,
          },
          price: {
            ...prev.shop.price,
            milkGroup: data.content.noneMilkGroup.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            milkGroup: false,
          },
          price: {
            ...prev.takeout.price,
            milkGroup: data.content.noneMilkGroup.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'lowFatMilk') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          changeMilkGroup: {
            ...prev.topping.changeMilkGroup,
            content: {
              ...prev.topping.changeMilkGroup.content,
              lowFatMilk: {
                ...prev.topping.changeMilkGroup.content.lowFatMilk,
                select: true,
              },
              fatFreeMilk: {
                ...prev.topping.changeMilkGroup.content.fatFreeMilk,
                select: false,
              },
              soyMilk: {
                ...prev.topping.changeMilkGroup.content.soyMilk,
                select: false,
              },
              almondMilk: {
                ...prev.topping.changeMilkGroup.content.almondMilk,
                select: false,
              },
              oatMilk: {
                ...prev.topping.changeMilkGroup.content.oatMilk,
                select: false,
              },
              breveMilk: {
                ...prev.topping.changeMilkGroup.content.breveMilk,
                select: false,
              },
              noneChangeMilkGroup: {
                ...prev.topping.changeMilkGroup.content.noneChangeMilkGroup,
                select: false,
              },
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
            changeMilkGroup: true,
          },
          price: {
            ...prev.shop.price,
            changeMilkGroup: data.content.lowFatMilk.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            changeMilkGroup: true,
          },
          price: {
            ...prev.takeout.price,
            changeMilkGroup: data.content.lowFatMilk.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'fatFreeMilk') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          changeMilkGroup: {
            ...prev.topping.changeMilkGroup,
            content: {
              ...prev.topping.changeMilkGroup.content,
              lowFatMilk: {
                ...prev.topping.changeMilkGroup.content.lowFatMilk,
                select: false,
              },
              fatFreeMilk: {
                ...prev.topping.changeMilkGroup.content.fatFreeMilk,
                select: true,
              },
              soyMilk: {
                ...prev.topping.changeMilkGroup.content.soyMilk,
                select: false,
              },
              almondMilk: {
                ...prev.topping.changeMilkGroup.content.almondMilk,
                select: false,
              },
              oatMilk: {
                ...prev.topping.changeMilkGroup.content.oatMilk,
                select: false,
              },
              breveMilk: {
                ...prev.topping.changeMilkGroup.content.breveMilk,
                select: false,
              },
              noneChangeMilkGroup: {
                ...prev.topping.changeMilkGroup.content.noneChangeMilkGroup,
                select: false,
              },
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
            changeMilkGroup: true,
          },
          price: {
            ...prev.shop.price,
            changeMilkGroup: data.content.fatFreeMilk.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            changeMilkGroup: true,
          },
          price: {
            ...prev.takeout.price,
            changeMilkGroup: data.content.fatFreeMilk.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'soyMilk') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          changeMilkGroup: {
            ...prev.topping.changeMilkGroup,
            content: {
              ...prev.topping.changeMilkGroup.content,
              lowFatMilk: {
                ...prev.topping.changeMilkGroup.content.lowFatMilk,
                select: false,
              },
              fatFreeMilk: {
                ...prev.topping.changeMilkGroup.content.fatFreeMilk,
                select: false,
              },
              soyMilk: {
                ...prev.topping.changeMilkGroup.content.soyMilk,
                select: true,
              },
              almondMilk: {
                ...prev.topping.changeMilkGroup.content.almondMilk,
                select: false,
              },
              oatMilk: {
                ...prev.topping.changeMilkGroup.content.oatMilk,
                select: false,
              },
              breveMilk: {
                ...prev.topping.changeMilkGroup.content.breveMilk,
                select: false,
              },
              noneChangeMilkGroup: {
                ...prev.topping.changeMilkGroup.content.noneChangeMilkGroup,
                select: false,
              },
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
            changeMilkGroup: true,
          },
          price: {
            ...prev.shop.price,
            changeMilkGroup: data.content.soyMilk.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            changeMilkGroup: true,
          },
          price: {
            ...prev.takeout.price,
            changeMilkGroup: data.content.soyMilk.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'almondMilk') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          changeMilkGroup: {
            ...prev.topping.changeMilkGroup,
            content: {
              ...prev.topping.changeMilkGroup.content,
              lowFatMilk: {
                ...prev.topping.changeMilkGroup.content.lowFatMilk,
                select: false,
              },
              fatFreeMilk: {
                ...prev.topping.changeMilkGroup.content.fatFreeMilk,
                select: false,
              },
              soyMilk: {
                ...prev.topping.changeMilkGroup.content.soyMilk,
                select: false,
              },
              almondMilk: {
                ...prev.topping.changeMilkGroup.content.almondMilk,
                select: true,
              },
              oatMilk: {
                ...prev.topping.changeMilkGroup.content.oatMilk,
                select: false,
              },
              breveMilk: {
                ...prev.topping.changeMilkGroup.content.breveMilk,
                select: false,
              },
              noneChangeMilkGroup: {
                ...prev.topping.changeMilkGroup.content.noneChangeMilkGroup,
                select: false,
              },
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
            changeMilkGroup: true,
          },
          price: {
            ...prev.shop.price,
            changeMilkGroup: data.content.almondMilk.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            changeMilkGroup: true,
          },
          price: {
            ...prev.takeout.price,
            changeMilkGroup: data.content.almondMilk.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'oatMilk') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          changeMilkGroup: {
            ...prev.topping.changeMilkGroup,
            content: {
              ...prev.topping.changeMilkGroup.content,
              lowFatMilk: {
                ...prev.topping.changeMilkGroup.content.lowFatMilk,
                select: false,
              },
              fatFreeMilk: {
                ...prev.topping.changeMilkGroup.content.fatFreeMilk,
                select: false,
              },
              soyMilk: {
                ...prev.topping.changeMilkGroup.content.soyMilk,
                select: false,
              },
              almondMilk: {
                ...prev.topping.changeMilkGroup.content.almondMilk,
                select: false,
              },
              oatMilk: {
                ...prev.topping.changeMilkGroup.content.oatMilk,
                select: true,
              },
              breveMilk: {
                ...prev.topping.changeMilkGroup.content.breveMilk,
                select: false,
              },
              noneChangeMilkGroup: {
                ...prev.topping.changeMilkGroup.content.noneChangeMilkGroup,
                select: false,
              },
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
            changeMilkGroup: true,
          },
          price: {
            ...prev.shop.price,
            changeMilkGroup: data.content.oatMilk.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            changeMilkGroup: true,
          },
          price: {
            ...prev.takeout.price,
            changeMilkGroup: data.content.oatMilk.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'breveMilk') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          changeMilkGroup: {
            ...prev.topping.changeMilkGroup,
            content: {
              ...prev.topping.changeMilkGroup.content,
              lowFatMilk: {
                ...prev.topping.changeMilkGroup.content.lowFatMilk,
                select: false,
              },
              fatFreeMilk: {
                ...prev.topping.changeMilkGroup.content.fatFreeMilk,
                select: false,
              },
              soyMilk: {
                ...prev.topping.changeMilkGroup.content.soyMilk,
                select: false,
              },
              almondMilk: {
                ...prev.topping.changeMilkGroup.content.almondMilk,
                select: false,
              },
              oatMilk: {
                ...prev.topping.changeMilkGroup.content.oatMilk,
                select: false,
              },
              breveMilk: {
                ...prev.topping.changeMilkGroup.content.breveMilk,
                select: true,
              },
              noneChangeMilkGroup: {
                ...prev.topping.changeMilkGroup.content.noneChangeMilkGroup,
                select: false,
              },
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
            changeMilkGroup: true,
          },
          price: {
            ...prev.shop.price,
            changeMilkGroup: data.content.breveMilk.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            changeMilkGroup: true,
          },
          price: {
            ...prev.takeout.price,
            changeMilkGroup: data.content.breveMilk.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'noneChangeMilkGroup') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          changeMilkGroup: {
            ...prev.topping.changeMilkGroup,
            content: {
              ...prev.topping.changeMilkGroup.content,
              lowFatMilk: {
                ...prev.topping.changeMilkGroup.content.lowFatMilk,
                select: false,
              },
              fatFreeMilk: {
                ...prev.topping.changeMilkGroup.content.fatFreeMilk,
                select: false,
              },
              soyMilk: {
                ...prev.topping.changeMilkGroup.content.soyMilk,
                select: false,
              },
              almondMilk: {
                ...prev.topping.changeMilkGroup.content.almondMilk,
                select: false,
              },
              oatMilk: {
                ...prev.topping.changeMilkGroup.content.oatMilk,
                select: false,
              },
              breveMilk: {
                ...prev.topping.changeMilkGroup.content.breveMilk,
                select: false,
              },
              noneChangeMilkGroup: {
                ...prev.topping.changeMilkGroup.content.noneChangeMilkGroup,
                select: true,
              },
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
            changeMilkGroup: false,
          },
          price: {
            ...prev.shop.price,
            changeMilkGroup: data.content.noneChangeMilkGroup.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            changeMilkGroup: false,
          },
          price: {
            ...prev.takeout.price,
            changeMilkGroup: data.content.noneChangeMilkGroup.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'extraPowder') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          powderGroup: {
            ...prev.topping.powderGroup,
            content: {
              ...prev.topping.powderGroup.content,
              extraPowder: {
                ...prev.topping.powderGroup.content.extraPowder,
                select: true,
              },
              lightPowder: {
                ...prev.topping.powderGroup.content.lightPowder,
                select: false,
              },
              nonePowder: {
                ...prev.topping.powderGroup.content.nonePowder,
                select: false,
              },
              nonePowderGroup: {
                ...prev.topping.powderGroup.content.nonePowderGroup,
                select: false,
              },
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
            powderGroup: true,
          },
          price: {
            ...prev.shop.price,
            powderGroup: data.content.extraPowder.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            powderGroup: true,
          },
          price: {
            ...prev.takeout.price,
            powderGroup: data.content.extraPowder.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'lightPowder') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          powderGroup: {
            ...prev.topping.powderGroup,
            content: {
              ...prev.topping.powderGroup.content,
              extraPowder: {
                ...prev.topping.powderGroup.content.extraPowder,
                select: false,
              },
              lightPowder: {
                ...prev.topping.powderGroup.content.lightPowder,
                select: true,
              },
              nonePowder: {
                ...prev.topping.powderGroup.content.nonePowder,
                select: false,
              },
              nonePowderGroup: {
                ...prev.topping.powderGroup.content.nonePowderGroup,
                select: false,
              },
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
            powderGroup: true,
          },
          price: {
            ...prev.shop.price,
            powderGroup: data.content.lightPowder.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            powderGroup: true,
          },
          price: {
            ...prev.takeout.price,
            powderGroup: data.content.lightPowder.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'nonePowder') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          powderGroup: {
            ...prev.topping.powderGroup,
            content: {
              ...prev.topping.powderGroup.content,
              extraPowder: {
                ...prev.topping.powderGroup.content.extraPowder,
                select: false,
              },
              lightPowder: {
                ...prev.topping.powderGroup.content.lightPowder,
                select: false,
              },
              nonePowder: {
                ...prev.topping.powderGroup.content.nonePowder,
                select: true,
              },
              nonePowderGroup: {
                ...prev.topping.powderGroup.content.nonePowderGroup,
                select: false,
              },
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
            powderGroup: true,
          },
          price: {
            ...prev.shop.price,
            powderGroup: data.content.nonePowder.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            powderGroup: true,
          },
          price: {
            ...prev.takeout.price,
            powderGroup: data.content.nonePowder.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'nonePowderGroup') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          powderGroup: {
            ...prev.topping.powderGroup,
            content: {
              ...prev.topping.powderGroup.content,
              extraPowder: {
                ...prev.topping.powderGroup.content.extraPowder,
                select: false,
              },
              lightPowder: {
                ...prev.topping.powderGroup.content.lightPowder,
                select: false,
              },
              nonePowder: {
                ...prev.topping.powderGroup.content.nonePowder,
                select: false,
              },
              nonePowderGroup: {
                ...prev.topping.powderGroup.content.nonePowderGroup,
                select: true,
              },
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
            powderGroup: false,
          },
          price: {
            ...prev.shop.price,
            powderGroup: data.content.nonePowderGroup.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            powderGroup: false,
          },
          price: {
            ...prev.takeout.price,
            powderGroup: data.content.nonePowderGroup.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'extraSauce') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          sauceGroup: {
            ...prev.topping.sauceGroup,
            content: {
              ...prev.topping.sauceGroup.content,
              extraSauce: {
                ...prev.topping.sauceGroup.content.extraSauce,
                select: true,
              },
              lightSauce: {
                ...prev.topping.sauceGroup.content.lightSauce,
                select: false,
              },
              noneSauce: {
                ...prev.topping.sauceGroup.content.noneSauce,
                select: false,
              },
              noneSauceGroup: {
                ...prev.topping.sauceGroup.content.noneSauceGroup,
                select: false,
              },
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
            sauceGroup: true,
          },
          price: {
            ...prev.shop.price,
            sauceGroup: data.content.extraSauce.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            sauceGroup: true,
          },
          price: {
            ...prev.takeout.price,
            sauceGroup: data.content.extraSauce.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'lightSauce') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          sauceGroup: {
            ...prev.topping.sauceGroup,
            content: {
              ...prev.topping.sauceGroup.content,
              extraSauce: {
                ...prev.topping.sauceGroup.content.extraSauce,
                select: false,
              },
              lightSauce: {
                ...prev.topping.sauceGroup.content.lightSauce,
                select: true,
              },
              noneSauce: {
                ...prev.topping.sauceGroup.content.noneSauce,
                select: false,
              },
              noneSauceGroup: {
                ...prev.topping.sauceGroup.content.noneSauceGroup,
                select: false,
              },
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
            sauceGroup: true,
          },
          price: {
            ...prev.shop.price,
            sauceGroup: data.content.lightSauce.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            sauceGroup: true,
          },
          price: {
            ...prev.takeout.price,
            sauceGroup: data.content.lightSauce.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'noneSauce') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          sauceGroup: {
            ...prev.topping.sauceGroup,
            content: {
              ...prev.topping.sauceGroup.content,
              extraSauce: {
                ...prev.topping.sauceGroup.content.extraSauce,
                select: false,
              },
              lightSauce: {
                ...prev.topping.sauceGroup.content.lightSauce,
                select: false,
              },
              noneSauce: {
                ...prev.topping.sauceGroup.content.noneSauce,
                select: true,
              },
              noneSauceGroup: {
                ...prev.topping.sauceGroup.content.noneSauceGroup,
                select: false,
              },
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
            sauceGroup: true,
          },
          price: {
            ...prev.shop.price,
            sauceGroup: data.content.noneSauce.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            sauceGroup: true,
          },
          price: {
            ...prev.takeout.price,
            sauceGroup: data.content.noneSauce.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'noneSauceGroup') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          sauceGroup: {
            ...prev.topping.sauceGroup,
            content: {
              ...prev.topping.sauceGroup.content,
              extraSauce: {
                ...prev.topping.sauceGroup.content.extraSauce,
                select: false,
              },
              lightSauce: {
                ...prev.topping.sauceGroup.content.lightSauce,
                select: false,
              },
              noneSauce: {
                ...prev.topping.sauceGroup.content.noneSauce,
                select: false,
              },
              noneSauceGroup: {
                ...prev.topping.sauceGroup.content.noneSauceGroup,
                select: true,
              },
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
            sauceGroup: false,
          },
          price: {
            ...prev.shop.price,
            sauceGroup: data.content.noneSauceGroup.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            sauceGroup: false,
          },
          price: {
            ...prev.takeout.price,
            sauceGroup: data.content.noneSauceGroup.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'extraSyrup') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          syrupGroup: {
            ...prev.topping.syrupGroup,
            content: {
              ...prev.topping.syrupGroup.content,
              extraSyrup: {
                ...prev.topping.syrupGroup.content.extraSyrup,
                select: true,
              },
              lightSyrup: {
                ...prev.topping.syrupGroup.content.lightSyrup,
                select: false,
              },
              noneSyrup: {
                ...prev.topping.syrupGroup.content.noneSyrup,
                select: false,
              },
              noneSyrupGroup: {
                ...prev.topping.syrupGroup.content.noneSyrupGroup,
                select: false,
              },
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
            syrupGroup: true,
          },
          price: {
            ...prev.shop.price,
            syrupGroup: data.content.extraSyrup.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            syrupGroup: true,
          },
          price: {
            ...prev.takeout.price,
            syrupGroup: data.content.extraSyrup.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'lightSyrup') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          syrupGroup: {
            ...prev.topping.syrupGroup,
            content: {
              ...prev.topping.syrupGroup.content,
              extraSyrup: {
                ...prev.topping.syrupGroup.content.extraSyrup,
                select: false,
              },
              lightSyrup: {
                ...prev.topping.syrupGroup.content.lightSyrup,
                select: true,
              },
              noneSyrup: {
                ...prev.topping.syrupGroup.content.noneSyrup,
                select: false,
              },
              noneSyrupGroup: {
                ...prev.topping.syrupGroup.content.noneSyrupGroup,
                select: false,
              },
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
            syrupGroup: true,
          },
          price: {
            ...prev.shop.price,
            syrupGroup: data.content.lightSyrup.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            syrupGroup: true,
          },
          price: {
            ...prev.takeout.price,
            syrupGroup: data.content.lightSyrup.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'noneSyrup') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          syrupGroup: {
            ...prev.topping.syrupGroup,
            content: {
              ...prev.topping.syrupGroup.content,
              extraSyrup: {
                ...prev.topping.syrupGroup.content.extraSyrup,
                select: false,
              },
              lightSyrup: {
                ...prev.topping.syrupGroup.content.lightSyrup,
                select: false,
              },
              noneSyrup: {
                ...prev.topping.syrupGroup.content.noneSyrup,
                select: true,
              },
              noneSyrupGroup: {
                ...prev.topping.syrupGroup.content.noneSyrupGroup,
                select: false,
              },
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
            syrupGroup: true,
          },
          price: {
            ...prev.shop.price,
            syrupGroup: data.content.noneSyrup.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            syrupGroup: true,
          },
          price: {
            ...prev.takeout.price,
            syrupGroup: data.content.noneSyrup.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'noneSyrupGroup') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          syrupGroup: {
            ...prev.topping.syrupGroup,
            content: {
              ...prev.topping.syrupGroup.content,
              extraSyrup: {
                ...prev.topping.syrupGroup.content.extraSyrup,
                select: false,
              },
              lightSyrup: {
                ...prev.topping.syrupGroup.content.lightSyrup,
                select: false,
              },
              noneSyrup: {
                ...prev.topping.syrupGroup.content.noneSyrup,
                select: false,
              },
              noneSyrupGroup: {
                ...prev.topping.syrupGroup.content.noneSyrupGroup,
                select: true,
              },
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
            syrupGroup: false,
          },
          price: {
            ...prev.shop.price,
            syrupGroup: data.content.inWhip.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            syrupGroup: false,
          },
          price: {
            ...prev.takeout.price,
            syrupGroup: data.content.inWhip.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'vanilla') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          changeSyrupGroup: {
            ...prev.topping.changeSyrupGroup,
            content: {
              ...prev.topping.changeSyrupGroup.content,
              vanilla: {
                ...prev.topping.changeSyrupGroup.content.vanilla,
                select: true,
              },
              caramel: {
                ...prev.topping.changeSyrupGroup.content.caramel,
                select: false,
              },
              classic: {
                ...prev.topping.changeSyrupGroup.content.classic,
                select: false,
              },
              mocha: {
                ...prev.topping.changeSyrupGroup.content.mocha,
                select: false,
              },
              whiteMocha: {
                ...prev.topping.changeSyrupGroup.content.whiteMocha,
                select: false,
              },
              chai: {
                ...prev.topping.changeSyrupGroup.content.chai,
                select: false,
              },
              valencia: {
                ...prev.topping.changeSyrupGroup.content.valencia,
                select: false,
              },
              ginger: {
                ...prev.topping.changeSyrupGroup.content.ginger,
                select: false,
              },
              noneChangeSyrupGroup: {
                ...prev.topping.changeSyrupGroup.content.noneChangeSyrupGroup,
                select: false,
              },
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
            changeSyrupGroup: true,
          },
          price: {
            ...prev.shop.price,
            changeSyrupGroup: data.content.vanilla.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            changeSyrupGroup: true,
          },
          price: {
            ...prev.takeout.price,
            changeSyrupGroup: data.content.vanilla.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'caramel') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          changeSyrupGroup: {
            ...prev.topping.changeSyrupGroup,
            content: {
              ...prev.topping.changeSyrupGroup.content,
              vanilla: {
                ...prev.topping.changeSyrupGroup.content.vanilla,
                select: false,
              },
              caramel: {
                ...prev.topping.changeSyrupGroup.content.caramel,
                select: true,
              },
              classic: {
                ...prev.topping.changeSyrupGroup.content.classic,
                select: false,
              },
              mocha: {
                ...prev.topping.changeSyrupGroup.content.mocha,
                select: false,
              },
              whiteMocha: {
                ...prev.topping.changeSyrupGroup.content.whiteMocha,
                select: false,
              },
              chai: {
                ...prev.topping.changeSyrupGroup.content.chai,
                select: false,
              },
              valencia: {
                ...prev.topping.changeSyrupGroup.content.valencia,
                select: false,
              },
              ginger: {
                ...prev.topping.changeSyrupGroup.content.ginger,
                select: false,
              },
              noneChangeSyrupGroup: {
                ...prev.topping.changeSyrupGroup.content.noneChangeSyrupGroup,
                select: false,
              },
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
            changeSyrupGroup: true,
          },
          price: {
            ...prev.shop.price,
            changeSyrupGroup: data.content.caramel.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            changeSyrupGroup: true,
          },
          price: {
            ...prev.takeout.price,
            changeSyrupGroup: data.content.caramel.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'classic') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          changeSyrupGroup: {
            ...prev.topping.changeSyrupGroup,
            content: {
              ...prev.topping.changeSyrupGroup.content,
              vanilla: {
                ...prev.topping.changeSyrupGroup.content.vanilla,
                select: false,
              },
              caramel: {
                ...prev.topping.changeSyrupGroup.content.caramel,
                select: false,
              },
              classic: {
                ...prev.topping.changeSyrupGroup.content.classic,
                select: true,
              },
              mocha: {
                ...prev.topping.changeSyrupGroup.content.mocha,
                select: false,
              },
              whiteMocha: {
                ...prev.topping.changeSyrupGroup.content.whiteMocha,
                select: false,
              },
              chai: {
                ...prev.topping.changeSyrupGroup.content.chai,
                select: false,
              },
              valencia: {
                ...prev.topping.changeSyrupGroup.content.valencia,
                select: false,
              },
              ginger: {
                ...prev.topping.changeSyrupGroup.content.ginger,
                select: false,
              },
              noneChangeSyrupGroup: {
                ...prev.topping.changeSyrupGroup.content.noneChangeSyrupGroup,
                select: false,
              },
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
            changeSyrupGroup: true,
          },
          price: {
            ...prev.shop.price,
            changeSyrupGroup: data.content.classic.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            changeSyrupGroup: true,
          },
          price: {
            ...prev.takeout.price,
            changeSyrupGroup: data.content.classic.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'mocha') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          changeSyrupGroup: {
            ...prev.topping.changeSyrupGroup,
            content: {
              ...prev.topping.changeSyrupGroup.content,
              vanilla: {
                ...prev.topping.changeSyrupGroup.content.vanilla,
                select: false,
              },
              caramel: {
                ...prev.topping.changeSyrupGroup.content.caramel,
                select: false,
              },
              classic: {
                ...prev.topping.changeSyrupGroup.content.classic,
                select: false,
              },
              mocha: {
                ...prev.topping.changeSyrupGroup.content.mocha,
                select: true,
              },
              whiteMocha: {
                ...prev.topping.changeSyrupGroup.content.whiteMocha,
                select: false,
              },
              chai: {
                ...prev.topping.changeSyrupGroup.content.chai,
                select: false,
              },
              valencia: {
                ...prev.topping.changeSyrupGroup.content.valencia,
                select: false,
              },
              ginger: {
                ...prev.topping.changeSyrupGroup.content.ginger,
                select: false,
              },
              noneChangeSyrupGroup: {
                ...prev.topping.changeSyrupGroup.content.noneChangeSyrupGroup,
                select: false,
              },
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
            changeSyrupGroup: true,
          },
          price: {
            ...prev.shop.price,
            changeSyrupGroup: data.content.mocha.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            changeSyrupGroup: true,
          },
          price: {
            ...prev.takeout.price,
            changeSyrupGroup: data.content.mocha.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'whiteMocha') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          changeSyrupGroup: {
            ...prev.topping.changeSyrupGroup,
            content: {
              ...prev.topping.changeSyrupGroup.content,
              vanilla: {
                ...prev.topping.changeSyrupGroup.content.vanilla,
                select: false,
              },
              caramel: {
                ...prev.topping.changeSyrupGroup.content.caramel,
                select: false,
              },
              classic: {
                ...prev.topping.changeSyrupGroup.content.classic,
                select: false,
              },
              mocha: {
                ...prev.topping.changeSyrupGroup.content.mocha,
                select: false,
              },
              whiteMocha: {
                ...prev.topping.changeSyrupGroup.content.whiteMocha,
                select: true,
              },
              chai: {
                ...prev.topping.changeSyrupGroup.content.chai,
                select: false,
              },
              valencia: {
                ...prev.topping.changeSyrupGroup.content.valencia,
                select: false,
              },
              ginger: {
                ...prev.topping.changeSyrupGroup.content.ginger,
                select: false,
              },
              noneChangeSyrupGroup: {
                ...prev.topping.changeSyrupGroup.content.noneChangeSyrupGroup,
                select: false,
              },
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
            changeSyrupGroup: true,
          },
          price: {
            ...prev.shop.price,
            changeSyrupGroup: data.content.whiteMocha.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            changeSyrupGroup: true,
          },
          price: {
            ...prev.takeout.price,
            changeSyrupGroup: data.content.whiteMocha.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'chai') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          changeSyrupGroup: {
            ...prev.topping.changeSyrupGroup,
            content: {
              ...prev.topping.changeSyrupGroup.content,
              vanilla: {
                ...prev.topping.changeSyrupGroup.content.vanilla,
                select: false,
              },
              caramel: {
                ...prev.topping.changeSyrupGroup.content.caramel,
                select: false,
              },
              classic: {
                ...prev.topping.changeSyrupGroup.content.classic,
                select: false,
              },
              mocha: {
                ...prev.topping.changeSyrupGroup.content.mocha,
                select: false,
              },
              whiteMocha: {
                ...prev.topping.changeSyrupGroup.content.whiteMocha,
                select: false,
              },
              chai: {
                ...prev.topping.changeSyrupGroup.content.chai,
                select: true,
              },
              valencia: {
                ...prev.topping.changeSyrupGroup.content.valencia,
                select: false,
              },
              ginger: {
                ...prev.topping.changeSyrupGroup.content.ginger,
                select: false,
              },
              noneChangeSyrupGroup: {
                ...prev.topping.changeSyrupGroup.content.noneChangeSyrupGroup,
                select: false,
              },
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
            changeSyrupGroup: true,
          },
          price: {
            ...prev.shop.price,
            changeSyrupGroup: data.content.chai.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            changeSyrupGroup: true,
          },
          price: {
            ...prev.takeout.price,
            changeSyrupGroup: data.content.chai.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'valencia') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          changeSyrupGroup: {
            ...prev.topping.changeSyrupGroup,
            content: {
              ...prev.topping.changeSyrupGroup.content,
              vanilla: {
                ...prev.topping.changeSyrupGroup.content.vanilla,
                select: false,
              },
              caramel: {
                ...prev.topping.changeSyrupGroup.content.caramel,
                select: false,
              },
              classic: {
                ...prev.topping.changeSyrupGroup.content.classic,
                select: false,
              },
              mocha: {
                ...prev.topping.changeSyrupGroup.content.mocha,
                select: false,
              },
              whiteMocha: {
                ...prev.topping.changeSyrupGroup.content.whiteMocha,
                select: false,
              },
              chai: {
                ...prev.topping.changeSyrupGroup.content.chai,
                select: false,
              },
              valencia: {
                ...prev.topping.changeSyrupGroup.content.valencia,
                select: true,
              },
              ginger: {
                ...prev.topping.changeSyrupGroup.content.ginger,
                select: false,
              },
              noneChangeSyrupGroup: {
                ...prev.topping.changeSyrupGroup.content.noneChangeSyrupGroup,
                select: false,
              },
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
            changeSyrupGroup: true,
          },
          price: {
            ...prev.shop.price,
            changeSyrupGroup: data.content.valencia.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            changeSyrupGroup: true,
          },
          price: {
            ...prev.takeout.price,
            changeSyrupGroup: data.content.valencia.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'ginger') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          changeSyrupGroup: {
            ...prev.topping.changeSyrupGroup,
            content: {
              ...prev.topping.changeSyrupGroup.content,
              vanilla: {
                ...prev.topping.changeSyrupGroup.content.vanilla,
                select: false,
              },
              caramel: {
                ...prev.topping.changeSyrupGroup.content.caramel,
                select: false,
              },
              classic: {
                ...prev.topping.changeSyrupGroup.content.classic,
                select: false,
              },
              mocha: {
                ...prev.topping.changeSyrupGroup.content.mocha,
                select: false,
              },
              whiteMocha: {
                ...prev.topping.changeSyrupGroup.content.whiteMocha,
                select: false,
              },
              chai: {
                ...prev.topping.changeSyrupGroup.content.chai,
                select: false,
              },
              valencia: {
                ...prev.topping.changeSyrupGroup.content.valencia,
                select: false,
              },
              ginger: {
                ...prev.topping.changeSyrupGroup.content.ginger,
                select: true,
              },
              noneChangeSyrupGroup: {
                ...prev.topping.changeSyrupGroup.content.noneChangeSyrupGroup,
                select: false,
              },
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
            changeSyrupGroup: true,
          },
          price: {
            ...prev.shop.price,
            changeSyrupGroup: data.content.ginger.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            changeSyrupGroup: true,
          },
          price: {
            ...prev.takeout.price,
            changeSyrupGroup: data.content.ginger.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'noneChangeSyrupGroup') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          changeSyrupGroup: {
            ...prev.topping.changeSyrupGroup,
            content: {
              ...prev.topping.changeSyrupGroup.content,
              vanilla: {
                ...prev.topping.changeSyrupGroup.content.vanilla,
                select: false,
              },
              caramel: {
                ...prev.topping.changeSyrupGroup.content.caramel,
                select: false,
              },
              classic: {
                ...prev.topping.changeSyrupGroup.content.classic,
                select: false,
              },
              mocha: {
                ...prev.topping.changeSyrupGroup.content.mocha,
                select: false,
              },
              whiteMocha: {
                ...prev.topping.changeSyrupGroup.content.whiteMocha,
                select: false,
              },
              chai: {
                ...prev.topping.changeSyrupGroup.content.chai,
                select: false,
              },
              valencia: {
                ...prev.topping.changeSyrupGroup.content.valencia,
                select: false,
              },
              ginger: {
                ...prev.topping.changeSyrupGroup.content.ginger,
                select: false,
              },
              noneChangeSyrupGroup: {
                ...prev.topping.changeSyrupGroup.content.noneChangeSyrupGroup,
                select: true,
              },
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
            changeSyrupGroup: false,
          },
          price: {
            ...prev.shop.price,
            changeSyrupGroup: data.content.noneChangeSyrupGroup.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            changeSyrupGroup: false,
          },
          price: {
            ...prev.takeout.price,
            changeSyrupGroup: data.content.noneChangeSyrupGroup.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'extraChip') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          chipGroup: {
            ...prev.topping.chipGroup,
            content: {
              ...prev.topping.chipGroup.content,
              extraChip: {
                ...prev.topping.chipGroup.content.extraChip,
                select: true,
              },
              lightChip: {
                ...prev.topping.chipGroup.content.lightChip,
                select: false,
              },
              noneChip: {
                ...prev.topping.chipGroup.content.noneChip,
                select: false,
              },
              noneChipGroup: {
                ...prev.topping.chipGroup.content.noneChipGroup,
                select: false,
              },
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
            chipGroup: true,
          },
          price: {
            ...prev.shop.price,
            chipGroup: data.content.extraChip.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            chipGroup: true,
          },
          price: {
            ...prev.takeout.price,
            chipGroup: data.content.extraChip.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'lightChip') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          chipGroup: {
            ...prev.topping.chipGroup,
            content: {
              ...prev.topping.chipGroup.content,
              extraChip: {
                ...prev.topping.chipGroup.content.extraChip,
                select: false,
              },
              lightChip: {
                ...prev.topping.chipGroup.content.lightChip,
                select: true,
              },
              noneChip: {
                ...prev.topping.chipGroup.content.noneChip,
                select: false,
              },
              noneChipGroup: {
                ...prev.topping.chipGroup.content.noneChipGroup,
                select: false,
              },
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
            chipGroup: true,
          },
          price: {
            ...prev.shop.price,
            chipGroup: data.content.lightChip.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            chipGroup: true,
          },
          price: {
            ...prev.takeout.price,
            chipGroup: data.content.lightChip.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'noneChip') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          chipGroup: {
            ...prev.topping.chipGroup,
            content: {
              ...prev.topping.chipGroup.content,
              extraChip: {
                ...prev.topping.chipGroup.content.extraChip,
                select: false,
              },
              lightChip: {
                ...prev.topping.chipGroup.content.lightChip,
                select: false,
              },
              noneChip: {
                ...prev.topping.chipGroup.content.noneChip,
                select: true,
              },
              noneChipGroup: {
                ...prev.topping.chipGroup.content.noneChipGroup,
                select: false,
              },
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
            chipGroup: true,
          },
          price: {
            ...prev.shop.price,
            chipGroup: data.content.noneChip.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            chipGroup: true,
          },
          price: {
            ...prev.takeout.price,
            chipGroup: data.content.noneChip.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'noneChipGroup') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          chipGroup: {
            ...prev.topping.chipGroup,
            content: {
              ...prev.topping.chipGroup.content,
              extraChip: {
                ...prev.topping.chipGroup.content.extraChip,
                select: false,
              },
              lightChip: {
                ...prev.topping.chipGroup.content.lightChip,
                select: false,
              },
              noneChip: {
                ...prev.topping.chipGroup.content.noneChip,
                select: false,
              },
              noneChipGroup: {
                ...prev.topping.chipGroup.content.noneChipGroup,
                select: true,
              },
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
            chipGroup: false,
          },
          price: {
            ...prev.shop.price,
            chipGroup: data.content.noneChipGroup.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            chipGroup: false,
          },
          price: {
            ...prev.takeout.price,
            chipGroup: data.content.noneChipGroup.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'extraIce') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          iceGroup: {
            ...prev.topping.iceGroup,
            content: {
              ...prev.topping.iceGroup.content,
              extraIce: {
                ...prev.topping.iceGroup.content.extraIce,
                select: true,
              },
              lightIce: {
                ...prev.topping.iceGroup.content.lightIce,
                select: false,
              },
              noneIceGroup: {
                ...prev.topping.iceGroup.content.noneIceGroup,
                select: false,
              },
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
            iceGroup: true,
          },
          price: {
            ...prev.shop.price,
            iceGroup: data.content.extraIce.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            iceGroup: true,
          },
          price: {
            ...prev.takeout.price,
            iceGroup: data.content.extraIce.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'lightIce') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          iceGroup: {
            ...prev.topping.iceGroup,
            content: {
              ...prev.topping.iceGroup.content,
              extraIce: {
                ...prev.topping.iceGroup.content.extraIce,
                select: false,
              },
              lightIce: {
                ...prev.topping.iceGroup.content.lightIce,
                select: true,
              },
              noneIceGroup: {
                ...prev.topping.iceGroup.content.noneIceGroup,
                select: false,
              },
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
            iceGroup: true,
          },
          price: {
            ...prev.shop.price,
            iceGroup: data.content.lightIce.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            iceGroup: true,
          },
          price: {
            ...prev.takeout.price,
            iceGroup: data.content.lightIce.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'noneIceGroup') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          iceGroup: {
            ...prev.topping.iceGroup,
            content: {
              ...prev.topping.iceGroup.content,
              extraIce: {
                ...prev.topping.iceGroup.content.extraIce,
                select: false,
              },
              lightIce: {
                ...prev.topping.iceGroup.content.lightIce,
                select: false,
              },
              noneIceGroup: {
                ...prev.topping.iceGroup.content.noneIceGroup,
                select: true,
              },
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
            iceGroup: false,
          },
          price: {
            ...prev.shop.price,
            iceGroup: data.content.noneIceGroup.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            iceGroup: false,
          },
          price: {
            ...prev.takeout.price,
            iceGroup: data.content.noneIceGroup.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'extraHot') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          hotGroup: {
            ...prev.topping.hotGroup,
            content: {
              ...prev.topping.hotGroup.content,
              extraHot: {
                ...prev.topping.hotGroup.content.extraHot,
                select: true,
              },
              lightHot: {
                ...prev.topping.hotGroup.content.lightHot,
                select: false,
              },
              noneHotGroup: {
                ...prev.topping.hotGroup.content.noneHotGroup,
                select: false,
              },
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
            hotGroup: true,
          },
          price: {
            ...prev.shop.price,
            hotGroup: data.content.extraHot.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            hotGroup: true,
          },
          price: {
            ...prev.takeout.price,
            hotGroup: data.content.extraHot.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'lightHot') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          hotGroup: {
            ...prev.topping.hotGroup,
            content: {
              ...prev.topping.hotGroup.content,
              extraHot: {
                ...prev.topping.hotGroup.content.extraHot,
                select: false,
              },
              lightHot: {
                ...prev.topping.hotGroup.content.lightHot,
                select: true,
              },
              noneHotGroup: {
                ...prev.topping.hotGroup.content.noneHotGroup,
                select: false,
              },
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
            hotGroup: true,
          },
          price: {
            ...prev.shop.price,
            hotGroup: data.content.lightHot.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            hotGroup: true,
          },
          price: {
            ...prev.takeout.price,
            hotGroup: data.content.lightHot.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'noneHotGroup') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          hotGroup: {
            ...prev.topping.hotGroup,
            content: {
              ...prev.topping.hotGroup.content,
              extraHot: {
                ...prev.topping.hotGroup.content.extraHot,
                select: false,
              },
              lightHot: {
                ...prev.topping.hotGroup.content.lightHot,
                select: false,
              },
              noneHotGroup: {
                ...prev.topping.hotGroup.content.noneHotGroup,
                select: true,
              },
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
            hotGroup: false,
          },
          price: {
            ...prev.shop.price,
            hotGroup: data.content.noneHotGroup.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            hotGroup: false,
          },
          price: {
            ...prev.takeout.price,
            hotGroup: data.content.noneHotGroup.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'shotPlusOne') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          shotPlusGroup: {
            ...prev.topping.shotPlusGroup,
            content: {
              ...prev.topping.shotPlusGroup.content,
              shotPlusOne: {
                ...prev.topping.shotPlusGroup.content.shotPlusOne,
                select: true,
              },
              shotPlusTwo: {
                ...prev.topping.shotPlusGroup.content.shotPlusTwo,
                select: false,
              },
              shotPlusThree: {
                ...prev.topping.shotPlusGroup.content.shotPlusThree,
                select: false,
              },
              noneShotPlusGroup: {
                ...prev.topping.shotPlusGroup.content.noneShotPlusGroup,
                select: false,
              },
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
            shotPlusGroup: true,
          },
          price: {
            ...prev.shop.price,
            shotPlusGroup: data.content.shotPlusOne.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            shotPlusGroup: true,
          },
          price: {
            ...prev.takeout.price,
            shotPlusGroup: data.content.shotPlusOne.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'shotPlusTwo') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          shotPlusGroup: {
            ...prev.topping.shotPlusGroup,
            content: {
              ...prev.topping.shotPlusGroup.content,
              shotPlusOne: {
                ...prev.topping.shotPlusGroup.content.shotPlusOne,
                select: false,
              },
              shotPlusTwo: {
                ...prev.topping.shotPlusGroup.content.shotPlusTwo,
                select: true,
              },
              shotPlusThree: {
                ...prev.topping.shotPlusGroup.content.shotPlusThree,
                select: false,
              },
              noneShotPlusGroup: {
                ...prev.topping.shotPlusGroup.content.noneShotPlusGroup,
                select: false,
              },
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
            shotPlusGroup: true,
          },
          price: {
            ...prev.shop.price,
            shotPlusGroup: data.content.shotPlusTwo.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            shotPlusGroup: true,
          },
          price: {
            ...prev.takeout.price,
            shotPlusGroup: data.content.shotPlusTwo.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'shotPlusThree') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          shotPlusGroup: {
            ...prev.topping.shotPlusGroup,
            content: {
              ...prev.topping.shotPlusGroup.content,
              shotPlusOne: {
                ...prev.topping.shotPlusGroup.content.shotPlusOne,
                select: false,
              },
              shotPlusTwo: {
                ...prev.topping.shotPlusGroup.content.shotPlusTwo,
                select: false,
              },
              shotPlusThree: {
                ...prev.topping.shotPlusGroup.content.shotPlusThree,
                select: true,
              },
              noneShotPlusGroup: {
                ...prev.topping.shotPlusGroup.content.noneShotPlusGroup,
                select: false,
              },
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
            shotPlusGroup: true,
          },
          price: {
            ...prev.shop.price,
            shotPlusGroup: data.content.shotPlusThree.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            shotPlusGroup: true,
          },
          price: {
            ...prev.takeout.price,
            shotPlusGroup: data.content.shotPlusThree.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'noneShotPlusGroup') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          shotPlusGroup: {
            ...prev.topping.shotPlusGroup,
            content: {
              ...prev.topping.shotPlusGroup.content,
              shotPlusOne: {
                ...prev.topping.shotPlusGroup.content.shotPlusOne,
                select: false,
              },
              shotPlusTwo: {
                ...prev.topping.shotPlusGroup.content.shotPlusTwo,
                select: false,
              },
              shotPlusThree: {
                ...prev.topping.shotPlusGroup.content.shotPlusThree,
                select: false,
              },
              noneShotPlusGroup: {
                ...prev.topping.shotPlusGroup.content.noneShotPlusGroup,
                select: true,
              },
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
            shotPlusGroup: false,
          },
          price: {
            ...prev.shop.price,
            shotPlusGroup: data.content.noneShotPlusGroup.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            shotPlusGroup: false,
          },
          price: {
            ...prev.takeout.price,
            shotPlusGroup: data.content.noneShotPlusGroup.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'coffeeRoastOne') {
      if (isDecaf) {
        setData((prev) => ({
          ...prev,
          topping: {
            ...prev.topping,
            coffeeRoastPlusGroup: {
              ...prev.topping.coffeeRoastPlusGroup,
              content: {
                ...prev.topping.coffeeRoastPlusGroup.content,
                coffeeRoastOne: {
                  ...prev.topping.coffeeRoastPlusGroup.content.coffeeRoastOne,
                  select: true,
                },
                coffeeRoastTwo: {
                  ...prev.topping.coffeeRoastPlusGroup.content.coffeeRoastTwo,
                  select: false,
                },
                coffeeRoastThree: {
                  ...prev.topping.coffeeRoastPlusGroup.content.coffeeRoastThree,
                  select: false,
                },
                noneCoffeeRoastPlusGroup: {
                  ...prev.topping.coffeeRoastPlusGroup.content
                    .noneCoffeeRoastPlusGroup,
                  select: false,
                },
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
              coffeeRoastPlusGroup: true,
            },
            price: {
              ...prev.shop.price,
              coffeeRoastPlusGroup: data.content.coffeeRoastOne.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            current: {
              ...prev.takeout.current,
              coffeeRoastPlusGroup: true,
            },
            price: {
              ...prev.takeout.price,
              coffeeRoastPlusGroup: data.content.coffeeRoastOne.price.takeout,
            },
          },
        }));
      }
    } else if (e.target.name === 'coffeeRoastTwo') {
      if (isDecaf) {
        setData((prev) => ({
          ...prev,
          topping: {
            ...prev.topping,
            coffeeRoastPlusGroup: {
              ...prev.topping.coffeeRoastPlusGroup,
              content: {
                ...prev.topping.coffeeRoastPlusGroup.content,
                coffeeRoastOne: {
                  ...prev.topping.coffeeRoastPlusGroup.content.coffeeRoastOne,
                  select: false,
                },
                coffeeRoastTwo: {
                  ...prev.topping.coffeeRoastPlusGroup.content.coffeeRoastTwo,
                  select: true,
                },
                coffeeRoastThree: {
                  ...prev.topping.coffeeRoastPlusGroup.content.coffeeRoastThree,
                  select: false,
                },
                noneCoffeeRoastPlusGroup: {
                  ...prev.topping.coffeeRoastPlusGroup.content
                    .noneCoffeeRoastPlusGroup,
                  select: false,
                },
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
              coffeeRoastPlusGroup: true,
            },
            price: {
              ...prev.shop.price,
              coffeeRoastPlusGroup: data.content.coffeeRoastTwo.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            current: {
              ...prev.takeout.current,
              coffeeRoastPlusGroup: true,
            },
            price: {
              ...prev.takeout.price,
              coffeeRoastPlusGroup: data.content.coffeeRoastTwo.price.takeout,
            },
          },
        }));
      }
    } else if (e.target.name === 'coffeeRoastThree') {
      if (isDecaf) {
        setData((prev) => ({
          ...prev,
          topping: {
            ...prev.topping,
            coffeeRoastPlusGroup: {
              ...prev.topping.coffeeRoastPlusGroup,
              content: {
                ...prev.topping.coffeeRoastPlusGroup.content,
                coffeeRoastOne: {
                  ...prev.topping.coffeeRoastPlusGroup.content.coffeeRoastOne,
                  select: false,
                },
                coffeeRoastTwo: {
                  ...prev.topping.coffeeRoastPlusGroup.content.coffeeRoastTwo,
                  select: false,
                },
                coffeeRoastThree: {
                  ...prev.topping.coffeeRoastPlusGroup.content.coffeeRoastThree,
                  select: true,
                },
                noneCoffeeRoastPlusGroup: {
                  ...prev.topping.coffeeRoastPlusGroup.content
                    .noneCoffeeRoastPlusGroup,
                  select: false,
                },
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
              coffeeRoastPlusGroup: true,
            },
            price: {
              ...prev.shop.price,
              coffeeRoastPlusGroup: data.content.coffeeRoastThree.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            current: {
              ...prev.takeout.current,
              coffeeRoastPlusGroup: true,
            },
            price: {
              ...prev.takeout.price,
              coffeeRoastPlusGroup: data.content.coffeeRoastThree.price.takeout,
            },
          },
        }));
      }
    } else if (e.target.name === 'noneCoffeeRoastPlusGroup') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          coffeeRoastPlusGroup: {
            ...prev.topping.coffeeRoastPlusGroup,
            content: {
              ...prev.topping.coffeeRoastPlusGroup.content,
              coffeeRoastOne: {
                ...prev.topping.coffeeRoastPlusGroup.content.coffeeRoastOne,
                select: false,
              },
              coffeeRoastTwo: {
                ...prev.topping.coffeeRoastPlusGroup.content.coffeeRoastTwo,
                select: false,
              },
              coffeeRoastThree: {
                ...prev.topping.coffeeRoastPlusGroup.content.coffeeRoastThree,
                select: false,
              },
              noneCoffeeRoastPlusGroup: {
                ...prev.topping.coffeeRoastPlusGroup.content
                  .noneCoffeeRoastPlusGroup,
                select: true,
              },
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
            coffeeRoastPlusGroup: false,
          },
          price: {
            ...prev.shop.price,
            coffeeRoastPlusGroup:
              data.content.noneCoffeeRoastPlusGroup.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            coffeeRoastPlusGroup: false,
          },
          price: {
            ...prev.takeout.price,
            coffeeRoastPlusGroup:
              data.content.noneCoffeeRoastPlusGroup.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'citrusPulpPlusOne') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          citrusPulpPlusGroup: {
            ...prev.topping.citrusPulpPlusGroup,
            content: {
              ...prev.topping.citrusPulpPlusGroup.content,
              citrusPulpPlusOne: {
                ...prev.topping.citrusPulpPlusGroup.content.citrusPulpPlusOne,
                select: true,
              },
              citrusPulpPlusTwo: {
                ...prev.topping.citrusPulpPlusGroup.content.citrusPulpPlusTwo,
                select: false,
              },
              citrusPulpPlusThree: {
                ...prev.topping.citrusPulpPlusGroup.content.citrusPulpPlusThree,
                select: false,
              },
              noneCitrusPulpPlusGroup: {
                ...prev.topping.citrusPulpPlusGroup.content
                  .noneCitrusPulpPlusGroup,
                select: false,
              },
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
            citrusPulpPlusGroup: true,
          },
          price: {
            ...prev.shop.price,
            citrusPulpPlusGroup: data.content.citrusPulpPlusOne.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            citrusPulpPlusGroup: true,
          },
          price: {
            ...prev.takeout.price,
            citrusPulpPlusGroup: data.content.citrusPulpPlusOne.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'citrusPulpPlusTwo') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          citrusPulpPlusGroup: {
            ...prev.topping.citrusPulpPlusGroup,
            content: {
              ...prev.topping.citrusPulpPlusGroup.content,
              citrusPulpPlusOne: {
                ...prev.topping.citrusPulpPlusGroup.content.citrusPulpPlusOne,
                select: false,
              },
              citrusPulpPlusTwo: {
                ...prev.topping.citrusPulpPlusGroup.content.citrusPulpPlusTwo,
                select: true,
              },
              citrusPulpPlusThree: {
                ...prev.topping.citrusPulpPlusGroup.content.citrusPulpPlusThree,
                select: false,
              },
              noneCitrusPulpPlusGroup: {
                ...prev.topping.citrusPulpPlusGroup.content
                  .noneCitrusPulpPlusGroup,
                select: false,
              },
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
            citrusPulpPlusGroup: true,
          },
          price: {
            ...prev.shop.price,
            citrusPulpPlusGroup: data.content.citrusPulpPlusTwo.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            citrusPulpPlusGroup: true,
          },
          price: {
            ...prev.takeout.price,
            citrusPulpPlusGroup: data.content.citrusPulpPlusTwo.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'citrusPulpPlusThree') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          citrusPulpPlusGroup: {
            ...prev.topping.citrusPulpPlusGroup,
            content: {
              ...prev.topping.citrusPulpPlusGroup.content,
              citrusPulpPlusOne: {
                ...prev.topping.citrusPulpPlusGroup.content.citrusPulpPlusOne,
                select: false,
              },
              citrusPulpPlusTwo: {
                ...prev.topping.citrusPulpPlusGroup.content.citrusPulpPlusTwo,
                select: false,
              },
              citrusPulpPlusThree: {
                ...prev.topping.citrusPulpPlusGroup.content.citrusPulpPlusThree,
                select: true,
              },
              noneCitrusPulpPlusGroup: {
                ...prev.topping.citrusPulpPlusGroup.content
                  .noneCitrusPulpPlusGroup,
                select: false,
              },
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
            citrusPulpPlusGroup: true,
          },
          price: {
            ...prev.shop.price,
            citrusPulpPlusGroup: data.content.citrusPulpPlusThree.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            citrusPulpPlusGroup: true,
          },
          price: {
            ...prev.takeout.price,
            citrusPulpPlusGroup: data.content.citrusPulpPlusThree.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'noneCitrusPulpPlusGroup') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          citrusPulpPlusGroup: {
            ...prev.topping.citrusPulpPlusGroup,
            content: {
              ...prev.topping.citrusPulpPlusGroup.content,
              citrusPulpPlusOne: {
                ...prev.topping.citrusPulpPlusGroup.content.citrusPulpPlusOne,
                select: false,
              },
              citrusPulpPlusTwo: {
                ...prev.topping.citrusPulpPlusGroup.content.citrusPulpPlusTwo,
                select: false,
              },
              citrusPulpPlusThree: {
                ...prev.topping.citrusPulpPlusGroup.content.citrusPulpPlusThree,
                select: false,
              },
              noneCitrusPulpPlusGroup: {
                ...prev.topping.citrusPulpPlusGroup.content
                  .noneCitrusPulpPlusGroup,
                select: true,
              },
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
            citrusPulpPlusGroup: false,
          },
          price: {
            ...prev.shop.price,
            citrusPulpPlusGroup:
              data.content.noneCitrusPulpPlusGroup.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            citrusPulpPlusGroup: false,
          },
          price: {
            ...prev.takeout.price,
            citrusPulpPlusGroup:
              data.content.noneCitrusPulpPlusGroup.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'englishBreakFast') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          teaLeafAddGroup: {
            ...prev.topping.teaLeafAddGroup,
            content: {
              ...prev.topping.teaLeafAddGroup.content,
              englishBreakFast: {
                ...prev.topping.teaLeafAddGroup.content.englishBreakFast,
                select: true,
              },
              earlGrey: {
                ...prev.topping.teaLeafAddGroup.content.earlGrey,
                select: false,
              },
              chamomile: {
                ...prev.topping.teaLeafAddGroup.content.chamomile,
                select: false,
              },
              roastedGreenTea: {
                ...prev.topping.teaLeafAddGroup.content.roastedGreenTea,
                select: false,
              },
              Youthberry: {
                ...prev.topping.teaLeafAddGroup.content.Youthberry,
                select: false,
              },
              mintCitrus: {
                ...prev.topping.teaLeafAddGroup.content.mintCitrus,
                select: false,
              },
              hibiscus: {
                ...prev.topping.teaLeafAddGroup.content.hibiscus,
                select: false,
              },
              noneTeaLeafAddGroup: {
                ...prev.topping.teaLeafAddGroup.content.noneTeaLeafAddGroup,
                select: false,
              },
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
            teaLeafAddGroup: true,
          },
          price: {
            ...prev.shop.price,
            teaLeafAddGroup: data.content.englishBreakFast.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            teaLeafAddGroup: true,
          },
          price: {
            ...prev.takeout.price,
            teaLeafAddGroup: data.content.englishBreakFast.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'earlGrey') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          teaLeafAddGroup: {
            ...prev.topping.teaLeafAddGroup,
            content: {
              ...prev.topping.teaLeafAddGroup.content,
              englishBreakFast: {
                ...prev.topping.teaLeafAddGroup.content.englishBreakFast,
                select: false,
              },
              earlGrey: {
                ...prev.topping.teaLeafAddGroup.content.earlGrey,
                select: true,
              },
              chamomile: {
                ...prev.topping.teaLeafAddGroup.content.chamomile,
                select: false,
              },
              roastedGreenTea: {
                ...prev.topping.teaLeafAddGroup.content.roastedGreenTea,
                select: false,
              },
              Youthberry: {
                ...prev.topping.teaLeafAddGroup.content.Youthberry,
                select: false,
              },
              mintCitrus: {
                ...prev.topping.teaLeafAddGroup.content.mintCitrus,
                select: false,
              },
              hibiscus: {
                ...prev.topping.teaLeafAddGroup.content.hibiscus,
                select: false,
              },
              noneTeaLeafAddGroup: {
                ...prev.topping.teaLeafAddGroup.content.noneTeaLeafAddGroup,
                select: false,
              },
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
            teaLeafAddGroup: true,
          },
          price: {
            ...prev.shop.price,
            teaLeafAddGroup: data.content.earlGrey.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            teaLeafAddGroup: true,
          },
          price: {
            ...prev.takeout.price,
            teaLeafAddGroup: data.content.earlGrey.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'chamomile') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          teaLeafAddGroup: {
            ...prev.topping.teaLeafAddGroup,
            content: {
              ...prev.topping.teaLeafAddGroup.content,
              englishBreakFast: {
                ...prev.topping.teaLeafAddGroup.content.englishBreakFast,
                select: false,
              },
              earlGrey: {
                ...prev.topping.teaLeafAddGroup.content.earlGrey,
                select: false,
              },
              chamomile: {
                ...prev.topping.teaLeafAddGroup.content.chamomile,
                select: true,
              },
              roastedGreenTea: {
                ...prev.topping.teaLeafAddGroup.content.roastedGreenTea,
                select: false,
              },
              Youthberry: {
                ...prev.topping.teaLeafAddGroup.content.Youthberry,
                select: false,
              },
              mintCitrus: {
                ...prev.topping.teaLeafAddGroup.content.mintCitrus,
                select: false,
              },
              hibiscus: {
                ...prev.topping.teaLeafAddGroup.content.hibiscus,
                select: false,
              },
              noneTeaLeafAddGroup: {
                ...prev.topping.teaLeafAddGroup.content.noneTeaLeafAddGroup,
                select: false,
              },
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
            teaLeafAddGroup: true,
          },
          price: {
            ...prev.shop.price,
            teaLeafAddGroup: data.content.chamomile.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            teaLeafAddGroup: true,
          },
          price: {
            ...prev.takeout.price,
            teaLeafAddGroup: data.content.chamomile.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'roastedGreenTea') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          teaLeafAddGroup: {
            ...prev.topping.teaLeafAddGroup,
            content: {
              ...prev.topping.teaLeafAddGroup.content,
              englishBreakFast: {
                ...prev.topping.teaLeafAddGroup.content.englishBreakFast,
                select: false,
              },
              earlGrey: {
                ...prev.topping.teaLeafAddGroup.content.earlGrey,
                select: false,
              },
              chamomile: {
                ...prev.topping.teaLeafAddGroup.content.chamomile,
                select: false,
              },
              roastedGreenTea: {
                ...prev.topping.teaLeafAddGroup.content.roastedGreenTea,
                select: true,
              },
              Youthberry: {
                ...prev.topping.teaLeafAddGroup.content.Youthberry,
                select: false,
              },
              mintCitrus: {
                ...prev.topping.teaLeafAddGroup.content.mintCitrus,
                select: false,
              },
              hibiscus: {
                ...prev.topping.teaLeafAddGroup.content.hibiscus,
                select: false,
              },
              noneTeaLeafAddGroup: {
                ...prev.topping.teaLeafAddGroup.content.noneTeaLeafAddGroup,
                select: false,
              },
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
            teaLeafAddGroup: true,
          },
          price: {
            ...prev.shop.price,
            teaLeafAddGroup: data.content.roastedGreenTea.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            teaLeafAddGroup: true,
          },
          price: {
            ...prev.takeout.price,
            teaLeafAddGroup: data.content.roastedGreenTea.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'Youthberry') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          teaLeafAddGroup: {
            ...prev.topping.teaLeafAddGroup,
            content: {
              ...prev.topping.teaLeafAddGroup.content,
              englishBreakFast: {
                ...prev.topping.teaLeafAddGroup.content.englishBreakFast,
                select: false,
              },
              earlGrey: {
                ...prev.topping.teaLeafAddGroup.content.earlGrey,
                select: false,
              },
              chamomile: {
                ...prev.topping.teaLeafAddGroup.content.chamomile,
                select: false,
              },
              roastedGreenTea: {
                ...prev.topping.teaLeafAddGroup.content.roastedGreenTea,
                select: false,
              },
              Youthberry: {
                ...prev.topping.teaLeafAddGroup.content.Youthberry,
                select: true,
              },
              mintCitrus: {
                ...prev.topping.teaLeafAddGroup.content.mintCitrus,
                select: false,
              },
              hibiscus: {
                ...prev.topping.teaLeafAddGroup.content.hibiscus,
                select: false,
              },
              noneTeaLeafAddGroup: {
                ...prev.topping.teaLeafAddGroup.content.noneTeaLeafAddGroup,
                select: false,
              },
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
            teaLeafAddGroup: true,
          },
          price: {
            ...prev.shop.price,
            teaLeafAddGroup: data.content.Youthberry.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            teaLeafAddGroup: true,
          },
          price: {
            ...prev.takeout.price,
            teaLeafAddGroup: data.content.Youthberry.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'mintCitrus') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          teaLeafAddGroup: {
            ...prev.topping.teaLeafAddGroup,
            content: {
              ...prev.topping.teaLeafAddGroup.content,
              englishBreakFast: {
                ...prev.topping.teaLeafAddGroup.content.englishBreakFast,
                select: false,
              },
              earlGrey: {
                ...prev.topping.teaLeafAddGroup.content.earlGrey,
                select: false,
              },
              chamomile: {
                ...prev.topping.teaLeafAddGroup.content.chamomile,
                select: false,
              },
              roastedGreenTea: {
                ...prev.topping.teaLeafAddGroup.content.roastedGreenTea,
                select: false,
              },
              Youthberry: {
                ...prev.topping.teaLeafAddGroup.content.Youthberry,
                select: false,
              },
              mintCitrus: {
                ...prev.topping.teaLeafAddGroup.content.mintCitrus,
                select: true,
              },
              hibiscus: {
                ...prev.topping.teaLeafAddGroup.content.hibiscus,
                select: false,
              },
              noneTeaLeafAddGroup: {
                ...prev.topping.teaLeafAddGroup.content.noneTeaLeafAddGroup,
                select: false,
              },
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
            teaLeafAddGroup: true,
          },
          price: {
            ...prev.shop.price,
            teaLeafAddGroup: data.content.mintCitrus.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            teaLeafAddGroup: true,
          },
          price: {
            ...prev.takeout.price,
            teaLeafAddGroup: data.content.mintCitrus.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'hibiscus') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          teaLeafAddGroup: {
            ...prev.topping.teaLeafAddGroup,
            content: {
              ...prev.topping.teaLeafAddGroup.content,
              englishBreakFast: {
                ...prev.topping.teaLeafAddGroup.content.englishBreakFast,
                select: false,
              },
              earlGrey: {
                ...prev.topping.teaLeafAddGroup.content.earlGrey,
                select: false,
              },
              chamomile: {
                ...prev.topping.teaLeafAddGroup.content.chamomile,
                select: false,
              },
              roastedGreenTea: {
                ...prev.topping.teaLeafAddGroup.content.roastedGreenTea,
                select: false,
              },
              Youthberry: {
                ...prev.topping.teaLeafAddGroup.content.Youthberry,
                select: false,
              },
              mintCitrus: {
                ...prev.topping.teaLeafAddGroup.content.mintCitrus,
                select: false,
              },
              hibiscus: {
                ...prev.topping.teaLeafAddGroup.content.hibiscus,
                select: true,
              },
              noneTeaLeafAddGroup: {
                ...prev.topping.teaLeafAddGroup.content.noneTeaLeafAddGroup,
                select: false,
              },
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
            teaLeafAddGroup: true,
          },
          price: {
            ...prev.shop.price,
            teaLeafAddGroup: data.content.hibiscus.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            teaLeafAddGroup: true,
          },
          price: {
            ...prev.takeout.price,
            teaLeafAddGroup: data.content.hibiscus.price.takeout,
          },
        },
      }));
    } else if (e.target.name === 'noneTeaLeafAddGroup') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          teaLeafAddGroup: {
            ...prev.topping.teaLeafAddGroup,
            content: {
              ...prev.topping.teaLeafAddGroup.content,
              englishBreakFast: {
                ...prev.topping.teaLeafAddGroup.content.englishBreakFast,
                select: false,
              },
              earlGrey: {
                ...prev.topping.teaLeafAddGroup.content.earlGrey,
                select: false,
              },
              chamomile: {
                ...prev.topping.teaLeafAddGroup.content.chamomile,
                select: false,
              },
              roastedGreenTea: {
                ...prev.topping.teaLeafAddGroup.content.roastedGreenTea,
                select: false,
              },
              Youthberry: {
                ...prev.topping.teaLeafAddGroup.content.Youthberry,
                select: false,
              },
              mintCitrus: {
                ...prev.topping.teaLeafAddGroup.content.mintCitrus,
                select: false,
              },
              hibiscus: {
                ...prev.topping.teaLeafAddGroup.content.hibiscus,
                select: false,
              },
              noneTeaLeafAddGroup: {
                ...prev.topping.teaLeafAddGroup.content.noneTeaLeafAddGroup,
                select: true,
              },
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
            teaLeafAddGroup: false,
          },
          price: {
            ...prev.shop.price,
            teaLeafAddGroup: data.content.noneTeaLeafAddGroup.price.shop,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            teaLeafAddGroup: false,
          },
          price: {
            ...prev.takeout.price,
            teaLeafAddGroup: data.content.noneTeaLeafAddGroup.price.takeout,
          },
        },
      }));
    } else {
      console.log('例外');
    }
  };
  if (data.detail.exist) {
    if (isShop) {
      return (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{data.detail.text}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RadioGroup onChange={onChange}>
              {Object.entries(data.content).map(([key, value], index) => (
                <FormControlLabel
                  key={index}
                  control={<Radio />}
                  name={key}
                  value={value.select}
                  label={value.text}
                  checked={value.select}
                />
              ))}
            </RadioGroup>
            {data.detail.id === 'coffeeRoastPlusGroup' ? (
              <p>デカフェとの併用不可</p>
            ) : undefined}
          </AccordionDetails>
        </Accordion>
      );
    } else {
      return (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{data.detail.text}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RadioGroup onChange={onChange}>
              {Object.entries(data.content).map(([key, value], index) => (
                <FormControlLabel
                  key={index}
                  control={<Radio />}
                  name={key}
                  value={value.select}
                  label={value.text}
                  checked={value.select}
                />
              ))}
            </RadioGroup>
            {data.detail.id === 'coffeeRoastPlusGroup' ? (
              <p>デカフェとの併用不可</p>
            ) : undefined}
          </AccordionDetails>
        </Accordion>
      );
    }
  } else {
    return <></>;
  }
});

export default ProductFormGroup;

import { FormControlLabel, Switch } from '@mui/material';
import { ChangeEvent, Dispatch, FC, memo, SetStateAction } from 'react';
import { useSetRecoilState } from 'recoil';
import { totalPriceAtom } from '../../recoil/atom/totalPriceAtom';
import { Product } from '../../types/productType';

type P = {
  data: {
    text: string;
    select: boolean;
    exist: boolean;
    id: string;
    price: {
      takeout: number;
      shop: number;
    };
  };
  setData: Dispatch<SetStateAction<Product>>;
  isCoffeeRoast?: boolean;
};

const ProductFormSolo: FC<P> = memo(({ data, setData, isCoffeeRoast }) => {
  const setTotalPrice = useSetRecoilState(totalPriceAtom);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'rawChocolateWhip') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          rawChocolateWhip: {
            ...prev.topping.rawChocolateWhip,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            rawChocolateWhip: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            rawChocolateWhip: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              rawChocolateWhip: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              rawChocolateWhip: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              rawChocolateWhip: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              rawChocolateWhip: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'coffeeCream') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          coffeeCream: {
            ...prev.topping.coffeeCream,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            coffeeCream: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            coffeeCream: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              coffeeCream: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              coffeeCream: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              coffeeCream: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              coffeeCream: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'allMilk') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          allMilk: {
            ...prev.topping.allMilk,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            allMilk: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            allMilk: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              allMilk: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              allMilk: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              allMilk: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              allMilk: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'wristletShot') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          wristletShot: {
            ...prev.topping.wristletShot,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            wristletShot: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            wristletShot: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              wristletShot: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              wristletShot: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              wristletShot: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              wristletShot: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'changeEspresso') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          changeEspresso: {
            ...prev.topping.changeEspresso,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            changeEspresso: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            changeEspresso: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              changeEspresso: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              changeEspresso: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              changeEspresso: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              changeEspresso: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'honeyPlus') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          honeyPlus: {
            ...prev.topping.honeyPlus,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            honeyPlus: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            honeyPlus: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              honeyPlus: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              honeyPlus: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              honeyPlus: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              honeyPlus: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'chocoSaucePlus') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          chocoSaucePlus: {
            ...prev.topping.chocoSaucePlus,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            chocoSaucePlus: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            chocoSaucePlus: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              chocoSaucePlus: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              chocoSaucePlus: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              chocoSaucePlus: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              chocoSaucePlus: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'caramelSaucePlus') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          caramelSaucePlus: {
            ...prev.topping.caramelSaucePlus,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            caramelSaucePlus: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            caramelSaucePlus: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              caramelSaucePlus: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              caramelSaucePlus: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              caramelSaucePlus: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              caramelSaucePlus: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'cocoa') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          cocoa: {
            ...prev.topping.cocoa,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            cocoa: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            cocoa: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              cocoa: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              cocoa: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              cocoa: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              cocoa: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'cinnamon') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          cinnamon: {
            ...prev.topping.cinnamon,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            cinnamon: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            cinnamon: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              cinnamon: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              cinnamon: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              cinnamon: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              cinnamon: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'vanillaPlus') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          vanillaPlus: {
            ...prev.topping.vanillaPlus,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            vanillaPlus: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            vanillaPlus: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              vanillaPlus: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              vanillaPlus: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              vanillaPlus: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              vanillaPlus: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'caramelPlus') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          caramelPlus: {
            ...prev.topping.caramelPlus,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            caramelPlus: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            caramelPlus: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              caramelPlus: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              caramelPlus: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              caramelPlus: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              caramelPlus: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'classicPlus') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          classicPlus: {
            ...prev.topping.classicPlus,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            classicPlus: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            classicPlus: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              classicPlus: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              classicPlus: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              classicPlus: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              classicPlus: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'mochaPlus') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          mochaPlus: {
            ...prev.topping.mochaPlus,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            mochaPlus: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            mochaPlus: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              mochaPlus: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              mochaPlus: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              mochaPlus: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              mochaPlus: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'whiteMochaPlus') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          whiteMochaPlus: {
            ...prev.topping.whiteMochaPlus,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            whiteMochaPlus: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            whiteMochaPlus: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              whiteMochaPlus: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              whiteMochaPlus: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              whiteMochaPlus: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              whiteMochaPlus: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'chaiPlus') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          chaiPlus: {
            ...prev.topping.chaiPlus,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            chaiPlus: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            chaiPlus: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              chaiPlus: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              chaiPlus: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              chaiPlus: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              chaiPlus: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'valenciaPlus') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          valenciaPlus: {
            ...prev.topping.valenciaPlus,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            valenciaPlus: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            valenciaPlus: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              valenciaPlus: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              valenciaPlus: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              valenciaPlus: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              valenciaPlus: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'gingerPlus') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          gingerPlus: {
            ...prev.topping.gingerPlus,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            gingerPlus: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            gingerPlus: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              gingerPlus: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              gingerPlus: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              gingerPlus: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              gingerPlus: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'teaLeafChange') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          teaLeafChange: {
            ...prev.topping.teaLeafChange,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            teaLeafChange: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            teaLeafChange: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              teaLeafChange: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              teaLeafChange: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              teaLeafChange: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              teaLeafChange: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'whipPlus') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          whipPlus: {
            ...prev.topping.whipPlus,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            whipPlus: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            whipPlus: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              whipPlus: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              whipPlus: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              whipPlus: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              whipPlus: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'steamMilkPlus') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          steamMilkPlus: {
            ...prev.topping.steamMilkPlus,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            steamMilkPlus: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            steamMilkPlus: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              steamMilkPlus: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              steamMilkPlus: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              steamMilkPlus: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              steamMilkPlus: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'foamMilkPlus') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          foamMilkPlus: {
            ...prev.topping.foamMilkPlus,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            foamMilkPlus: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            foamMilkPlus: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              foamMilkPlus: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              foamMilkPlus: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              foamMilkPlus: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.shop.price,
              foamMilkPlus: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'chocolateChipPlus') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          chocolateChipPlus: {
            ...prev.topping.chocolateChipPlus,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            chocolateChipPlus: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            chocolateChipPlus: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              chocolateChipPlus: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              chocolateChipPlus: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              chocolateChipPlus: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              chocolateChipPlus: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'decaf') {
      if (!isCoffeeRoast) {
        setData((prev) => ({
          ...prev,
          topping: {
            ...prev.topping,
            decaf: {
              ...prev.topping.decaf,
              select: e.target.checked,
            },
          },
        }));
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            current: {
              ...prev.shop.current,
              decaf: e.target.checked,
            },
          },
          takeout: {
            ...prev.takeout,
            current: {
              ...prev.takeout.current,
              decaf: e.target.checked,
            },
          },
        }));
        if (e.target.checked) {
          setTotalPrice((prev) => ({
            ...prev,
            shop: {
              ...prev.shop,
              price: {
                ...prev.shop.price,
                decaf: data.price.shop,
              },
            },
            takeout: {
              ...prev.takeout,
              price: {
                ...prev.takeout.price,
                decaf: data.price.takeout,
              },
            },
          }));
        } else {
          setTotalPrice((prev) => ({
            ...prev,
            shop: {
              ...prev.shop,
              price: {
                ...prev.shop.price,
                decaf: 0,
              },
            },
            takeout: {
              ...prev.takeout,
              price: {
                ...prev.takeout.price,
                decaf: 0,
              },
            },
          }));
        }
      }
    } else if (e.target.name === 'mousseFoam') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          mousseFoam: {
            ...prev.topping.mousseFoam,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            mousseFoam: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            mousseFoam: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              mousseFoam: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              mousseFoam: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              mousseFoam: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              mousseFoam: 0,
            },
          },
        }));
      }
    } else if (e.target.name === 'teaLeafPlus') {
      setData((prev) => ({
        ...prev,
        topping: {
          ...prev.topping,
          teaLeafPlus: {
            ...prev.topping.teaLeafPlus,
            select: e.target.checked,
          },
        },
      }));
      setTotalPrice((prev) => ({
        ...prev,
        shop: {
          ...prev.shop,
          current: {
            ...prev.shop.current,
            teaLeafPlus: e.target.checked,
          },
        },
        takeout: {
          ...prev.takeout,
          current: {
            ...prev.takeout.current,
            teaLeafPlus: e.target.checked,
          },
        },
      }));
      if (e.target.checked) {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              teaLeafPlus: data.price.shop,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              teaLeafPlus: data.price.takeout,
            },
          },
        }));
      } else {
        setTotalPrice((prev) => ({
          ...prev,
          shop: {
            ...prev.shop,
            price: {
              ...prev.shop.price,
              teaLeafPlus: 0,
            },
          },
          takeout: {
            ...prev.takeout,
            price: {
              ...prev.takeout.price,
              teaLeafPlus: 0,
            },
          },
        }));
      }
    } else {
      console.log('例外');
    }
  };

  if (data.exist) {
    return (
      <>
        <FormControlLabel
          sx={{
            display: 'block',
            mt: 1,
          }}
          control={
            <Switch name={data.id} checked={data.select} onChange={onChange} />
          }
          label={
            data.id === 'decaf'
              ? `${data.text}(コーヒーローストとの併用不可)`
              : data.text
          }
        />
      </>
    );
  } else {
    return <></>;
  }
});

export default ProductFormSolo;

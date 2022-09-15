export type Product = {
  _id: string;
  createdAt: number;
  updatedAt: number;
  productName: string;
  category: string;
  size: {
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
  topping: {
    whipGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        extraWhip: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        lightWhip: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneWhip: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        inWhip: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneWhipGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    rawChocolateWhip: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    coffeeCream: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    milkGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        foamMilk: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        lightMilk: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneMilk: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneMilkGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    changeMilkGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        lowFatMilk: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        fatFreeMilk: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        soyMilk: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        almondMilk: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        oatMilk: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        breveMilk: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneChangeMilkGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    allMilk: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    powderGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        extraPowder: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        lightPowder: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        nonePowder: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        nonePowderGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    sauceGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        extraSauce: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        lightSauce: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneSauce: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneSauceGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    syrupGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        extraSyrup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        lightSyrup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneSyrup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneSyrupGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    chocoSaucePlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    caramelSaucePlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    changeSyrupGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        vanilla: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        caramel: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        classic: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        mocha: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        whiteMocha: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        chai: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        valencia: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        ginger: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneChangeSyrupGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    chipGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        extraChip: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        lightChip: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneChip: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneChipGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    wristletShot: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    changeEspresso: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    iceGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        extraIce: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        lightIce: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneIceGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    hotGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        extraHot: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        lightHot: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneHotGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    honeyPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    cocoa: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    cinnamon: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    teaLeafChange: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    vanillaPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    caramelPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    classicPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    mochaPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    whiteMochaPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    chaiPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    valenciaPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    gingerPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    whipPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    steamMilkPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    foamMilkPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    shotPlusGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        shotPlusOne: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        shotPlusTwo: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        shotPlusThree: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneShotPlusGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    coffeeRoastPlusGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        coffeeRoastOne: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        coffeeRoastTwo: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        coffeeRoastThree: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneCoffeeRoastPlusGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    chocolateChipPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    decaf: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    mousseFoam: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    citrusPulpPlusGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        citrusPulpPlusOne: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        citrusPulpPlusTwo: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        citrusPulpPlusThree: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneCitrusPulpPlusGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    teaLeafAddGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        englishBreakFast: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        earlGrey: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        chamomile: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        roastedGreenTea: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        Youthberry: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        mintCitrus: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        hibiscus: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneTeaLeafAddGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    teaLeafPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
  };
};
export type EditProduct = {
  productName: string;
  category: string;
  size: {
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
  topping: {
    whipGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        extraWhip: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        lightWhip: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneWhip: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        inWhip: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneWhipGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    rawChocolateWhip: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    coffeeCream: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    milkGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        foamMilk: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        lightMilk: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneMilk: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneMilkGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    changeMilkGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        lowFatMilk: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        fatFreeMilk: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        soyMilk: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        almondMilk: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        oatMilk: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        breveMilk: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneChangeMilkGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    allMilk: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    powderGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        extraPowder: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        lightPowder: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        nonePowder: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        nonePowderGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    sauceGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        extraSauce: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        lightSauce: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneSauce: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneSauceGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    chocoSaucePlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    caramelSaucePlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    syrupGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        extraSyrup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        lightSyrup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneSyrup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneSyrupGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    changeSyrupGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        vanilla: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        caramel: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        classic: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        mocha: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        whiteMocha: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        chai: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        valencia: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        ginger: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneChangeSyrupGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    chipGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        extraChip: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        lightChip: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneChip: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneChipGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    wristletShot: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    changeEspresso: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    iceGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        extraIce: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        lightIce: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneIceGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    hotGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        extraHot: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        lightHot: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneHotGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    honeyPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    cocoa: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };

    cinnamon: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    teaLeafChange: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    vanillaPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    caramelPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    classicPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    mochaPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    whiteMochaPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    chaiPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    valenciaPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    gingerPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    whipPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    steamMilkPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    foamMilkPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    shotPlusGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        shotPlusOne: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        shotPlusTwo: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        shotPlusThree: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneShotPlusGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    coffeeRoastPlusGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        coffeeRoastOne: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        coffeeRoastTwo: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        coffeeRoastThree: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneCoffeeRoastPlusGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    chocolateChipPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    decaf: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    mousseFoam: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
    citrusPulpPlusGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        citrusPulpPlusOne: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        citrusPulpPlusTwo: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        citrusPulpPlusThree: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneCitrusPulpPlusGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    teaLeafAddGroup: {
      detail: {
        id: string;
        text: string;
        exist: boolean;
      };
      content: {
        englishBreakFast: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        earlGrey: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        chamomile: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        roastedGreenTea: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        Youthberry: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        mintCitrus: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        hibiscus: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
        noneTeaLeafAddGroup: {
          text: string;
          select: boolean;
          price: {
            takeout: number;
            shop: number;
          };
        };
      };
    };
    teaLeafPlus: {
      text: string;
      select: boolean;
      exist: boolean;
      id: string;
      price: {
        takeout: number;
        shop: number;
      };
    };
  };
};

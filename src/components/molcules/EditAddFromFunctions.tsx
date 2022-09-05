import { useRouter } from 'next/router'
import { ChangeEvent, FC, FormEvent } from 'react'
import { SetterOrUpdater } from 'recoil'
import { EditProduct, } from '../../types/productType'
import EditAddFrom from '../organisms/EditAddFrom'

type P = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  setProductData: SetterOrUpdater<EditProduct>
}

const EditAddFromFunctions: FC<P> = ({ onSubmit, setProductData }) => {
  const router = useRouter()

  const backPage = () => {
    router.push('/control')
  }
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    //name
    if (e.target.name === 'productName') {
      setProductData((prev) => {
        return { ...prev, productName: e.target.value }
      })

    //category
    } else if (e.target.name === 'category') {        
      setProductData(prev => (
        {...prev, category: e.target.value}
      ))
      //size
      } else if (e.target.name === 'size') {        
        setProductData((prev) => {
          return {
            ...prev,
            size: {
              ...prev.size,
              shop: {
                ...prev.size.shop,
                [e.target.id]: {
                  ...prev.size.shop.grande,
                  value: e.target.valueAsNumber,
                },
              },
              takeout: {
                ...prev.size.takeout,
                [e.target.id]: {
                  ...prev.size.takeout.grande,
                  value: Math.round((e.target.valueAsNumber / 1.1) * 1.08)
                },
              },
            },
          }
        })
      //topping
    } else if (e.target.name === 'whipGroup') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            whipGroup: {
              ...prev.topping.whipGroup,
              detail: {
                ...prev.topping.whipGroup.detail,
                exist: e.target.value === 'true',
              },
            },
          },
        }
      })
    } else if (e.target.name === 'rawChocolateWhip') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            rawChocolateWhip: {
              ...prev.topping.rawChocolateWhip,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'coffeeCream') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            coffeeCream: {
              ...prev.topping.coffeeCream,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'milkGroup') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            milkGroup: {
              ...prev.topping.milkGroup,
              detail: {
                ...prev.topping.milkGroup.detail,
                exist: e.target.value === 'true',
              },
            },
          },
        }
      })
    } else if (e.target.name === 'changeMilkGroup') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            changeMilkGroup: {
              ...prev.topping.changeMilkGroup,
              detail: {
                ...prev.topping.changeMilkGroup.detail,
                exist: e.target.value === 'true',
              },
            },
          },
        }
      })
    } else if (e.target.name === 'allMilk') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            allMilk: {
              ...prev.topping.allMilk,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'powderGroup') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            powderGroup: {
              ...prev.topping.powderGroup,
              detail: {
                ...prev.topping.powderGroup.detail,
                exist: e.target.value === 'true',
              },
            },
          },
        }
      })
    } else if (e.target.name === 'sauceGroup') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            sauceGroup: {
              ...prev.topping.sauceGroup,
              detail: {
                ...prev.topping.sauceGroup.detail,
                exist: e.target.value === 'true',
              },
            },
          },
        }
      })
    } else if (e.target.name === 'chocoSaucePlus') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            chocoSaucePlus: {
              ...prev.topping.chocoSaucePlus,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'caramelSaucePlus') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            caramelSaucePlus: {
              ...prev.topping.caramelSaucePlus,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'syrupGroup') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            syrupGroup: {
              ...prev.topping.syrupGroup,
              detail: {
                ...prev.topping.syrupGroup.detail,
                exist: e.target.value === 'true',
              },
            },
          },
        }
      })
    } else if (e.target.name === 'changeSyrupGroup') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            changeSyrupGroup: {
              ...prev.topping.changeSyrupGroup,
              detail: {
                ...prev.topping.changeSyrupGroup.detail,
                exist: e.target.value === 'true',
              },
            },
          },
        }
      })
    } else if (e.target.name === 'chipGroup') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            chipGroup: {
              ...prev.topping.chipGroup,
              detail: {
                ...prev.topping.chipGroup.detail,
                exist: e.target.value === 'true',
              },
            },
          },
        }
      })
    } else if (e.target.name === 'wristletShot') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            wristletShot: {
              ...prev.topping.wristletShot,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'changeEspresso') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            changeEspresso: {
              ...prev.topping.changeEspresso,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'iceGroup') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            iceGroup: {
              ...prev.topping.iceGroup,
              detail: {
                ...prev.topping.iceGroup.detail,
                exist: e.target.value === 'true',
              },
            },
          },
        }
      })
    } else if (e.target.name === 'hotGroup') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            hotGroup: {
              ...prev.topping.hotGroup,
              detail: {
                ...prev.topping.hotGroup.detail,
                exist: e.target.value === 'true',
              },
            },
          },
        }
      })
    } else if (e.target.name === 'cocoa') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            cocoa: {
              ...prev.topping.cocoa,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'cinnamon') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            cinnamon: {
              ...prev.topping.cinnamon,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'honeyPlus') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            honeyPlus: {
              ...prev.topping.honeyPlus,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'teaLeafChange') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            teaLeafChange: {
              ...prev.topping.teaLeafChange,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'vanillaPlus') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            vanillaPlus: {
              ...prev.topping.vanillaPlus,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'caramelPlus') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            caramelPlus: {
              ...prev.topping.caramelPlus,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'classicPlus') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            classicPlus: {
              ...prev.topping.classicPlus,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'mochaPlus') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            mochaPlus: {
              ...prev.topping.mochaPlus,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'whiteMochaPlus') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            whiteMochaPlus: {
              ...prev.topping.whiteMochaPlus,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'chaiPlus') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            chaiPlus: {
              ...prev.topping.chaiPlus,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'valenciaPlus') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            valenciaPlus: {
              ...prev.topping.valenciaPlus,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'gingerPlus') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            gingerPlus: {
              ...prev.topping.gingerPlus,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'whipPlus') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            whipPlus: {
              ...prev.topping.whipPlus,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'steamMilkPlus') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            steamMilkPlus: {
              ...prev.topping.steamMilkPlus,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'foamMilkPlus') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            foamMilkPlus: {
              ...prev.topping.foamMilkPlus,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'shotPlusGroup') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            shotPlusGroup: {
              ...prev.topping.shotPlusGroup,
              detail: {
                ...prev.topping.shotPlusGroup.detail,
                exist: e.target.value === 'true',
              },
            },
          },
        }
      })
    } else if (e.target.name === 'coffeeRoastPlusGroup') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            coffeeRoastPlusGroup: {
              ...prev.topping.coffeeRoastPlusGroup,
              detail: {
                ...prev.topping.coffeeRoastPlusGroup.detail,
                exist: e.target.value === 'true',
              },
            },
          },
        }
      })
    } else if (e.target.name === 'chocolateChipPlus') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            chocolateChipPlus: {
              ...prev.topping.chocolateChipPlus,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'decaf') {
      //コーヒーローストとデカフェの併用不可
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            decaf: {
              ...prev.topping.decaf,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'mousseFoam') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            mousseFoam: {
              ...prev.topping.mousseFoam,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else if (e.target.name === 'citrusPulpPlusGroup') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            citrusPulpPlusGroup: {
              ...prev.topping.citrusPulpPlusGroup,
              detail: {
                ...prev.topping.citrusPulpPlusGroup.detail,
                exist: e.target.value === 'true',
              },
            },
          },
        }
      })
    } else if (e.target.name === 'teaLeafAddGroup') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            teaLeafAddGroup: {
              ...prev.topping.teaLeafAddGroup,
              detail: {
                ...prev.topping.teaLeafAddGroup.detail,
                exist: e.target.value === 'true',
              },
            },
          },
        }
      })
    } else if (e.target.name === 'teaLeafPlus') {
      setProductData((prev) => {
        return {
          ...prev,
          topping: {
            ...prev.topping,
            teaLeafPlus: {
              ...prev.topping.teaLeafPlus,
              exist: e.target.value === 'true',
            },
          },
        }
      })
    } else {
      console.log('例外')
    }
  }

  return (
    <EditAddFrom onChange={onChange} backPage={backPage} onSubmit={onSubmit} />
  )
}

export default EditAddFromFunctions

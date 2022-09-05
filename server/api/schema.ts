import mongoose from "mongoose";

export const Products = mongoose.model('Products', new mongoose.Schema({
    productName: String,
    category: String,
    size: {
        takeout: {
            short: {
                select: Boolean,
                value: Number,
            },
            tall: {
                select: Boolean,
                value: Number,
            },
            grande: {
                select: Boolean,
                value: Number,
            },
            venti:{
                select: Boolean,
                value: Number,
            },
        },
        shop: {
            short: {
                select: Boolean,
                value: Number,
            },
            tall: {
                select: Boolean,
                value: Number,
            },
            grande: {
                select: Boolean,
                value: Number,
            },
            venti:{
                select: Boolean,
                value: Number,
            },
        },
    },
    topping: {
        whipGroup: {
            detail: {
                id:String,
                text: String,
                exist: Boolean,
            },
            content: {
                extraWhip: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                lightWhip: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                noneWhip: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                inWhip: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                noneWhipGroup: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
            }
        },
        rawChocolateWhip: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id:String,
            price: {
                takeout: Number,
                shop: Number,
            },
        },
        coffeeCream: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id:String,
            price: {
                takeout: Number,
                shop: Number,
            },
        },
        milkGroup: {
            detail: {
                id:String,
                text: String,
                exist: Boolean,
            },
            content: {
                foamMilk: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                lightMilk: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                noneMilk: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                noneMilkGroup: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
            },
        },
        changeMilkGroup: {
            detail: {
                id:String,
                text: String,
                exist: Boolean,
            },
            content: {
                lowFatMilk: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                fatFreeMilk: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                soyMilk: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                almondMilk: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                oatMilk: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                breveMilk: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                noneChangeMilkGroup: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
            },
        },
        allMilk: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id:String,
            price: {
                takeout: Number,
                shop: Number,
            },
        },
        powderGroup: {
            detail: {
                id:String,
                text: String,
                exist: Boolean,
            },
            content: {
                extraPowder: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                lightPowder: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                nonePowder: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                nonePowderGroup: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
            },
        },
        sauceGroup: {
            detail: {
                id:String,
                text: String,
                exist: Boolean,
            },
            content:{
                extraSauce: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                lightSauce: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                noneSauce: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                noneSauceGroup: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
            },
        },
        chocoSaucePlus: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id:String,
            price: {
                takeout: Number,
                shop: Number,
            },
        },
        caramelSaucePlus: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id:String,
            price: {
                takeout: Number,
                shop: Number,
            },
        },
        syrupGroup: {
            detail: {
                id:String,
                text: String,
                exist: Boolean,
            },
            content:{
                extraSyrup: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                lightSyrup: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                noneSyrup: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                noneSyrupGroup: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
            },
        },
        changeSyrupGroup: {
            detail: {
                id:String,
                text: String,
                exist: Boolean,
            },
            content:{
                vanilla: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                caramel: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                classic: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                mocha: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                whiteMocha: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                chai: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                valencia: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                ginger: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                noneChangeSyrupGroup: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
            },
        },
        chipGroup: {
            detail: {
                id:String,
                text: String,
                exist: Boolean,
            },
            content:{
                extraChip: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                lightChip: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },                
                noneChip: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                noneChipGroup: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
            },
        },
        wristletShot: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id:String,
            price: {
                takeout: Number,
                shop: Number,
            },
        },
        changeEspresso: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id:String,
            price: {
                takeout: Number,
                shop: Number,
            },
        },
        iceGroup: {
            detail: {
                id:String,
                text: String,
                exist: Boolean,
            },
            content:{
                extraIce: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                lightIce: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                noneIceGroup: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
            },
        },
        hotGroup: {
            detail: {
                id:String,
                text: String,
                exist: Boolean,
            },
            content:{
                extraHot: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                lightHot: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                noneHotGroup: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
            },
        },
        honeyPlus: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id:String,
            price: {
                takeout: Number,
                shop: Number,
            },
        },
        cocoa: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id:String,
            price: {
                takeout: Number,
                shop: Number,
            },
        },
        cinnamon: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id:String,
            price: {
                takeout: Number,
                shop: Number,
            },
        },
        teaLeafChange: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id:String,
            price: {
                takeout: Number,
                shop: Number,
            },
        },
        vanillaPlus: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id: String,
            price: {
                takeout: Number,
                shop: Number,
            },
        },
        caramelPlus: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id: String,
            price: {
                takeout: Number,
                shop: Number,
            }
        },
        classicPlus: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id: String,
            price: {
                takeout: Number,
                shop: Number,
            }
        },
        mochaPlus: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id: String,
            price: {
                takeout: Number,
                shop: Number,
            }
        },
        whiteMochaPlus: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id: String,
            price: {
                takeout: Number,
                shop: Number,
            }
        },
        chaiPlus: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id: String,
            price: {
                takeout: Number,
                shop: Number,
            }
        },
        valenciaPlus: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id: String,
            price: {
                takeout: Number,
                shop: Number,
            }
        },
        gingerPlus: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id: String,
            price: {
                takeout: Number,
                shop: Number,
            }
        },
        whipPlus: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id:String,
            price: {
                takeout: Number,
                shop: Number,
            },
        },
        steamMilkPlus: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id:String,
            price: {
                takeout: Number,
                shop: Number,
            },
        },
        foamMilkPlus: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id:String,
            price: {
                takeout: Number,
                shop: Number,
            },
        },
        shotPlusGroup: {
            detail: {
                id:String,
                text: String,
                exist: Boolean,
            },
            content:{
                shotPlusOne: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                shotPlusTwo: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                shotPlusThree: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                noneShotPlusGroup: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                }
            },
        },
        coffeeRoastPlusGroup: {
            detail: {
                id:String,
                text: String,
                exist: Boolean,
            },
            content:{
                coffeeRoastOne: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                coffeeRoastTwo: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                coffeeRoastThree: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                noneCoffeeRoastPlusGroup: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
            },
        },
        chocolateChipPlus: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id:String,
            price: {
                takeout: Number,
                shop: Number,
            },
        },
        decaf: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id:String,
            price: {
                takeout: Number,
                shop: Number,
            },
        },
        mousseFoam: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id:String, 
            price: {
                takeout: Number,
                shop: Number,
            },
        },
        citrusPulpPlusGroup: {
            detail: {
                id:String,
                text: String,
                exist: Boolean,
            },
            content:{
                citrusPulpPlusOne: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                citrusPulpPlusTwo: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                citrusPulpPlusThree: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                noneCitrusPulpPlusGroup: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
            },
        },
        teaLeafAddGroup: {
            detail: {
                id: String,
                text: String,
                exist: Boolean,
            },
            content:{
                englishBreakFast: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                earlGrey: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                chamomile: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                roastedGreenTea: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                Youthberry: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                mintCitrus: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                hibiscus: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
                noneTeaLeafAddGroup: {
                    text: String,
                    select: Boolean,
                    price: {
                        takeout: Number,
                        shop: Number,
                    },
                },
            },
        },
        teaLeafPlus: {
            text: String,
            select: Boolean,
            exist: Boolean,
            id: String,
            price: {
                takeout: Number,
                shop: Number,
            },
        },
    },
}, {versionKey: false, timestamps: true}))
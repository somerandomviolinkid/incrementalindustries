const craftingRecipes = {
    smallCpperPlate:{
        components:{
            component1:{
                title:'moltenCopper',
                amount:1
            }
        },
        info:{
            yield:1,
            machines:{
                
            }
        }
    },
    mediumCopperPlate:{
        components:{
            component1:{
                title:'moltenCopper',
                amount:4
            }
        },
        info:{
            yield:1,
            machines:{
                
            }
        }
    },
    largeCopperPlate:{
        components:{
            component1:{
                title:'moltenCopper',
                amount:16
            }
        },
        info:{
            yield:1,
            machines:{
                
            }
        }
    },
    smallCopperFoil:{
        components:{
            component1:{
                title:'smallCopperPlate',
                amount:1
            }
        },
        info:{
            yield:4,
            machines:{
                type1: 'roller'
            }
        }
    },
    mediumCopperFoil:{
        components:{
            component1:{
                title:'mediumCopperPlate',
                amount:1
            }
        },
        info:{
            yield:4,
            machines:{
                type1: 'roller'
            }
        }
    },
    largeCopperFoil:{
        components:{
            component1:{
                title:'largeCopperPlate',
                amount:1
            }
        },
        info:{
            yield:4,
            machines:{
                type1: 'roller'
            }
        }
    }
}
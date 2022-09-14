import { ChangeEvent, FC, FormEvent } from 'react'
import { useRecoilValue } from 'recoil'
import { addProductAtom } from '../../recoil/atom/addProductAtom'
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from '@mui/material'
import AddFormGroup from '../molcules/AddFormGroup'
import AddFormSolo from '../molcules/AddFormSolo'

type P = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  backPage: () => void
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const EditAddFrom: FC<P> = ({ onChange, backPage, onSubmit }) => {
  const addProduct = useRecoilValue(addProductAtom)
  return (
    <Container component="main" maxWidth="md" sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ m: 'auto', textAlign: 'center' }}>
        商品の追加
      </Typography>
      <TableContainer>
        <form onSubmit={onSubmit}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant="h5">name</Typography>
                </TableCell>
                <TableCell>
                  <TextField
                    label="商品名"
                    required
                    fullWidth
                    name="productName"
                    onChange={onChange}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h5">category</Typography>
                </TableCell>
                <TableCell>
                  <RadioGroup onChange={onChange}>
                    <FormControlLabel
                      control={<Radio/>}
                      name='category'
                      value='coffe'
                      label='コーヒー'
                      checked={addProduct.category === 'coffe'}
                    />
                    <FormControlLabel
                      control={<Radio/>}
                      name='category'
                      value='espresso'
                      label='エスプレッソ'
                      checked={addProduct.category === 'espresso'}
                    />
                    <FormControlLabel
                      control={<Radio/>}
                      name='category'
                      value='frappucino'
                      label='フラペチーノ'
                      checked={addProduct.category === 'frappucino'}
                    />
                    <FormControlLabel
                      control={<Radio/>}
                      name='category'
                      value='tea'
                      label='ティー'
                      checked={addProduct.category === 'tea'}
                    />
                    <FormControlLabel
                      control={<Radio/>}
                      name='category'
                      value='others'
                      label='その他'
                      checked={addProduct.category === 'others'}
                    />
                  </RadioGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h5">price</Typography>
                </TableCell>
                <TableCell>
                  <List>
                  <Typography m={2}>店内価格</Typography>
                    {Object.entries(addProduct.size.shop).map(
                      ([key, value], index) => {
                        return (
                          <ListItem key={index}>
                            <TextField
                              type="number"
                              label={key}
                              name='size'
                              id={key}
                              onChange={onChange}
                              value={value.value}
                            />
                          </ListItem>
                        )
                      },
                    )}
                  </List>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h5">topping</Typography>
                </TableCell>
                <TableCell>
                  <AddFormSolo
                    datas={addProduct.topping.whipPlus}
                    onChange={onChange}
                  />
                  <AddFormGroup
                    datas={addProduct.topping.whipGroup}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.rawChocolateWhip}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.coffeeCream}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.foamMilkPlus}
                    onChange={onChange}
                  />
                  <AddFormGroup
                    datas={addProduct.topping.milkGroup}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.steamMilkPlus}
                    onChange={onChange}
                  />
                  <AddFormGroup
                    datas={addProduct.topping.changeMilkGroup}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.allMilk}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.cocoa}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.cinnamon}
                    onChange={onChange}
                  />
                  <AddFormGroup
                    datas={addProduct.topping.powderGroup}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.chocoSaucePlus}
                    onChange={onChange}
                  />
                  
                  <AddFormSolo
                    datas={addProduct.topping.caramelSaucePlus}
                    onChange={onChange}
                  />
                  <AddFormGroup
                    datas={addProduct.topping.sauceGroup}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.vanillaPlus}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.caramelPlus}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.classicPlus}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.mochaPlus}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.whiteMochaPlus}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.chaiPlus}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.valenciaPlus}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.gingerPlus}
                    onChange={onChange}
                  />
                  <AddFormGroup
                    datas={addProduct.topping.syrupGroup}
                    onChange={onChange}
                  />
                  <AddFormGroup
                    datas={addProduct.topping.changeSyrupGroup}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.chocolateChipPlus}
                    onChange={onChange}
                  />
                  <AddFormGroup
                    datas={addProduct.topping.chipGroup}
                    onChange={onChange}
                  />
                  <AddFormGroup
                    datas={addProduct.topping.iceGroup}
                    onChange={onChange}
                  />
                  <AddFormGroup
                    datas={addProduct.topping.hotGroup}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.honeyPlus}
                    onChange={onChange}
                  />
                  <AddFormGroup
                    datas={addProduct.topping.shotPlusGroup}
                    onChange={onChange}
                  />
                  <AddFormGroup
                    datas={addProduct.topping.coffeeRoastPlusGroup}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.wristletShot}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.changeEspresso}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.decaf}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.mousseFoam}
                    onChange={onChange}
                  />
                  <AddFormGroup
                    datas={addProduct.topping.citrusPulpPlusGroup}
                    onChange={onChange}
                  />
                  <AddFormGroup
                    datas={addProduct.topping.teaLeafAddGroup}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.teaLeafChange}
                    onChange={onChange}
                  />
                  <AddFormSolo
                    datas={addProduct.topping.teaLeafPlus}
                    onChange={onChange}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Box
            sx={{
              mt: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Button
              type="button"
              sx={{ m: '8px 0' }}
              variant="outlined"
              onClick={backPage}
            >
              戻る
            </Button>
            <Button type="submit" sx={{ m: '8px 0' }} variant="contained">
              追加
            </Button>
          </Box>
        </form>
      </TableContainer>
    </Container>
  )
}

export default EditAddFrom

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import { ChangeEvent, FC } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

type P = {
  datas: {
    text: string
    select: boolean
    exist: boolean
    id: string
    price: {
      takeout: number
      shop: number
    }
  }
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const AddFormSolo: FC<P> = ({ datas, onChange }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{datas.text}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <RadioGroup name={datas.id} onChange={onChange}>
          <FormControlLabel
            value={true}
            control={<Radio />}
            checked={datas.exist}
            label="あり"
          />
          <FormControlLabel
            value={false}
            control={<Radio />}
            checked={!datas.exist}
            label="なし"
          />
        </RadioGroup>
      </AccordionDetails>
    </Accordion>
  )
}

export default AddFormSolo

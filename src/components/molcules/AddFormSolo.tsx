import { Accordion, AccordionSummary, Typography } from '@mui/material';
import { ChangeEvent, FC, memo } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import dynamic from 'next/dynamic';
const AccordionDetails = dynamic(
  () => import('@mui/material/AccordionDetails')
);
const FormControlLabel = dynamic(
  () => import('@mui/material/FormControlLabel')
);
const Radio = dynamic(() => import('@mui/material/Radio'));
const RadioGroup = dynamic(() => import('@mui/material/RadioGroup'));
type P = {
  datas: {
    text: string;
    select: boolean;
    exist: boolean;
    id: string;
    price: {
      takeout: number;
      shop: number;
    };
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AddFormSolo: FC<P> = memo(({ datas, onChange }) => {
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
            label='あり'
          />
          <FormControlLabel
            value={false}
            control={<Radio />}
            checked={!datas.exist}
            label='なし'
          />
        </RadioGroup>
      </AccordionDetails>
    </Accordion>
  );
});

export default AddFormSolo;

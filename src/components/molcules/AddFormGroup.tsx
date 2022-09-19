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
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AddFormGroup: FC<P> = memo(({ datas, onChange }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{datas.detail.text}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <RadioGroup name={datas.detail.id} onChange={onChange}>
          <FormControlLabel
            value={true}
            control={<Radio />}
            checked={datas.detail.exist}
            label='あり'
          />
          <FormControlLabel
            value={false}
            control={<Radio />}
            checked={!datas.detail.exist}
            label='なし'
          />
        </RadioGroup>
      </AccordionDetails>
    </Accordion>
  );
});

export default AddFormGroup;

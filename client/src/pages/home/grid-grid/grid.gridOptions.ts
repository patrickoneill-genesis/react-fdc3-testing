import { GridOptionsConfig } from '@genesislcap/rapid-grid-pro';
import { getNumberFormatter, getDateFormatter } from '@genesislcap/foundation-utils';
import { sendEventOnChannel } from '../../../utils';

export const gridOptions: GridOptionsConfig = 
  {
    onRowClicked: sendEventOnChannel("channel2", "type2"),
    columnDefs: [
  {
    "field": "INSTRUMENT_NAME",
    "headerName": "Instrument Name"
  },
  {
    "field": "VALUE",
    "headerName": "Inline coldef - VALUE"
  },
  {
    "field": "QUANTITY",
    "headerName": "Quantity"
  },
  {
    "field": "PNL",
    "headerName": "PNL"
  }
],
  }

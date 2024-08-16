import { GridOptionsConfig } from '@genesislcap/rapid-grid-pro';
import { getNumberFormatter, getDateFormatter } from '@genesislcap/foundation-utils';
import { sendEventOnChannel } from '../../../utils';

export const gridOptions: GridOptionsConfig = 
  {
    onRowClicked: sendEventOnChannel("channel1", "type1"),
  }

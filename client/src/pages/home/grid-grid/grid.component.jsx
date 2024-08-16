import { gridOptions as tileGridOptions } from './grid.gridOptions';
import './grid.component.css';

export const HomeGridGrid = () => { 
  const gridOptions = tileGridOptions;

  return (
    <rapid-grid-pro
      enable-row-flashing
      enable-cell-flashing
      >
      <grid-pro-genesis-datasource
        resource-name="ALL_TRADES"
        deferredGridOptions={{ onRowClicked: gridOptions?.onRowClicked }}
      ></grid-pro-genesis-datasource>
    </rapid-grid-pro>
  );
};

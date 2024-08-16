import { gridOptions as tileGridOptions } from './entity-manager.gridOptions';
import './entity-manager.component.css';

export const HomeEntitymanagerManager = () => { 
  const gridOptions = tileGridOptions;

  return (
    <entity-management
        design-system-prefix="rapid"
        enable-row-flashing
        enable-cell-flashing
        title="My Positions"
        resourceName="ALL_POSITIONS"
        createEvent="EVENT_COUNTERPARTY_INSERT"
        updateEvent="EVENT_COUNTERPARTY_MODIFY"
        deleteEvent="EVENT_COUNTERPARTY_DELETE"
        gridOptions={gridOptions}
    ></entity-management>
  );
};

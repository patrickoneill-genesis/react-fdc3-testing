import { DefaultFDC3 } from '@genesislcap/foundation-fdc3';
export const isFDC3 = (): boolean => !!(window as any).fdc3;

export const onFDC3Ready = async (FDC3ReadyCb: () => any): Promise<void> => {
  isFDC3()
    ? await FDC3ReadyCb()
    : window.addEventListener('fdc3Ready', async () => {
      await FDC3ReadyCb();
    });
};

export const listenToChannel = async (
  channelName: string,
  type: string,
  callback: (result: any) => void,
): Promise<void> => {
  const fdc3Service = new DefaultFDC3();
  fdc3Service.addChannelListener(channelName, type, callback);
};

export const sendEventOnChannel = (channelName: string, type: string) => {
  return async (e: any) => {
    const fdc3Service = new DefaultFDC3();
    // check for ag-grid-specific events, fall back to standard events
    const payload = e.data || e.detail;
    await fdc3Service.broadcastOnChannel(channelName, type, payload);
  };
};

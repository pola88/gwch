import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../app/hooks';
import { setDevices, setDevice, Device, setDeviceState, State} from './deviceActions';
import { DateRanges } from '../Date/dateActions';

type GetDeviceStateParams = {
  selectedDevice: string | null;
  currentDates: DateRanges;
};

type UseDevice = {
  getDeviceState: (params: GetDeviceStateParams) => Promise<void>;
  fetchDevices: () => void;
  selectDevice: (device: string | null) => void;
  loading: boolean;
  devices: Device[];
  selectedDevice: string | null,
  deviceState: State[]
};

const useDevice = (): UseDevice => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { all: devices, selected, deviceState } = useAppSelector( state => state.devices );

  const fetchDevices = useCallback( async () => {
    setLoading(true);
    const response = await fetch('http://localhost:3000/devices')
    const newDevices = await response.json();
    dispatch(setDevices(newDevices.devices));
    setLoading(false);
  }, [setLoading, dispatch]);

  const selectDevice = (device: string | null) => {
    dispatch(setDevice(device));
  };

  const getDeviceState = useCallback(async ({ selectedDevice, currentDates }: GetDeviceStateParams) => {
    const queries = new URLSearchParams({
      from: currentDates.from.toISOString(),
      to: currentDates.to.toISOString()
    });

    const response = await fetch(`http://localhost:3000/devices/${selectedDevice}/state?${queries}`);
    const { states } = await response.json();
    dispatch(setDeviceState(states));
  },[dispatch]);

  return {
    deviceState,
    getDeviceState,
    selectedDevice: selected,
    fetchDevices,
    selectDevice,
    devices,
    loading
  }
};

export default useDevice;
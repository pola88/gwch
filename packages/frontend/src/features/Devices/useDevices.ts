import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../app/hooks';
import { setDevices, setDevice, Device } from './deviceActions';

type UseDevice = {
  fetchDevices: () => void,
  selectDevice: (device: string | null) => void,
  loading: boolean;
  devices: Device[];
  selectedDevice: string | null
};

const useDevice = (): UseDevice => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { all: devices, selected } = useAppSelector( state => state.devices );

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

  return {
    selectedDevice: selected,
    fetchDevices,
    selectDevice,
    devices,
    loading
  }
};

export default useDevice;
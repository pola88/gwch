import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../app/hooks';
import { setDevices, setDevice, Device } from './deviceActions';

type UseDevice = {
  fetchDevices: () => void,
  selectDevice: (device: string | null) => void,
  loading: boolean;
  devices: Device[];
};

const useDevice = (): UseDevice => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { all: devices } = useAppSelector( state => state.devices );

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
    fetchDevices,
    selectDevice,
    devices,
    loading
  }
};

export default useDevice;
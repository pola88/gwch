import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../app/hooks';
import { setDates, DateRanges } from './dateActions';

// import { setDevices, setDevice, Device } from './DeviceActions';

type UseDate = {
  updateDates: (params: DateRanges) => void;
  currentDates: DateRanges;
}

const useDate = (): UseDate => {
  const dispatch = useDispatch();
  const { from, to } = useAppSelector( state => state.date )
  const updateDates = (params: DateRanges) => {
    dispatch(setDates({ from: params.from, to: params.to}));
  };

  return {
    updateDates,
    currentDates: {
      from,
      to 
    }
  }
};

export default useDate;
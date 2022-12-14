import React from 'react';
import DatePicker from 'rsuite/DatePicker';
import Label from '../Label/Label';
import useDate from './useDate';
import styled from 'styled-components';

const DatePickerContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 24px;
`

const datePickerFormat = "yyyy-MM-dd HH:mm";
const SelectDate = () => {
  const { currentDates, updateDates } = useDate();

  const onChange = (date: Date | null, direction: string) => {
    updateDates({
      ...currentDates,
      ...{
        [direction]: date
      }
    });
  };

  return (
    <div>
      <Label>From:</Label>
      <DatePickerContainer>
        <DatePicker
          cleanable={false}
          format={datePickerFormat}
          value={currentDates.from}
          onChange={ (date) => onChange(date, 'from')}
          style={{width: '86%'}}
        />
      </DatePickerContainer>
      
      <Label>To:</Label>
      <DatePickerContainer>
        <DatePicker
          cleanable={false}
          format={datePickerFormat}
          value={currentDates.to}
          style={{width: '86%'}}
          onChange={ (date) => onChange(date, 'to')}
        />
      </DatePickerContainer>
      
    </div>
  )
}

export default SelectDate;
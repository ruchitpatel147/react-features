import React, { useState } from 'react'
import DatePickerComponent from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
function DatePicker () {
  const [date, setDate] = useState('')
  return (
    <div>
      <DatePickerComponent selected={date}
                           onChange={(date) => setDate(date)}
                           dateFormat='yyyy/MM/dd'
                           minDate={new Date()}
                           showYearDropdown
                           scrollableMonthYearDropdown
      />
    </div>
  )
}

export default DatePicker
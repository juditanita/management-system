export const formReducer = (state, event) => {
  const { name, value } = event.target;
  return {
    ...state,
    [name]: value,
  };
};

export const formatTimeStamp=(timestamp)=>{
    const options = {
        year:"numeric",
        month:"2-digit",
        day:"2-digit",
        hour:"2-digit",
        mins:"2-digit",
        hour12: true,
      }
     
      const date = new Date(timestamp); 
      const formattedDate = date.toLocaleString("en-US", options);
      return formattedDate;
    }



export const getDay = (date) => {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfTheWeek[date.getDay()];
};



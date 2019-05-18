const initLocale = global.navigator && global.navigator.language || 'en';

const initialState = {
  locale: initLocale,
};

const IntlReducer = (state = initialState, action) => {
  switch (action.type) { 
    
    default:
      return state;
  }
};

export default IntlReducer;

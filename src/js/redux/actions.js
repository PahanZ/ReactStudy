const changeCompany = data => (dispatch) => {
  dispatch({
    type: 'setCompanyFilter',
    payload: data,
  });
};

const downloadData = data => (dispatch) => {
  dispatch({
    type: 'setFlights',
    payload: data,
  });
};

export { changeCompany, downloadData };

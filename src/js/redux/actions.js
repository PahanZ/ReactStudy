const changeCompany = data => ({
  type: 'setCompanyFilter',
  payload: data,
});

const downloadData = data => ({
  type: 'setFlights',
  payload: data,
});

export { changeCompany, downloadData };

import axios from 'axios';

const changeCompany = data => (dispatch) => {
  dispatch({
    type: 'setCompanyFilter',
    payload: data,
  });
};

const getFlights = () => dispatch => (
  axios.get('data.json')
    .then((response) => {
      dispatch({
        type: 'setFlights',
        payload: response.data.flights,
      });
    })
    .catch((error) => {
      alert('Ошибка загрузки данных');
      console.log(error);
    })
);

export { changeCompany, getFlights };

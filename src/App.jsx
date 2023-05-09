import React, {useState} from "react";
import styles from "./App.module.css";
import SelectBox from "./components/SelectBox";
import InputItem from "./components/InputItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {checkBooking, checkValidDateTime} from "./utils/validators";

const towers = ['А', 'Б'];
const floors = Array.from({length: 25}, (_, index) => index + 3);
const rooms = Array.from({length: 10}, (_, index) => index + 1);

const defaultData = {
  tower: '',
  floor: '',
  numRoom: '',
  date: '',
  timeStart: '',
  timeEnd: '',
  comment: '',
};

const booking = [];

function App() {
  const [dataForm, setDataForm] = useState(defaultData);

  const handleChangeData = (event) => {
    if (!event.target.id) {
      setDataForm({...dataForm, [event.target.name]: event.target.value});
      return;
    }

    setDataForm({...dataForm, [event.target.id]: event.target.value});
  };

  const handleClean = () => setDataForm(defaultData);
  const handleSend = (event) => {
    event.preventDefault();

    if (!checkValidDateTime(dataForm.date, dataForm.timeStart, dataForm.timeEnd)) {
      alert('Не все данные формы были правильно заполнены! ' +
        'Проверьте правильность заполнения даты и времени. ' +
        'Бронирование доступно от текущих дня и времени.');
      return;
    }

    if (checkBooking(dataForm, booking)) {
      alert('Извините. Выбранная переговорная занята в этот промежуток времени :(');
      return;
    }

    booking.push(dataForm);
    console.log(JSON.stringify(dataForm));
    alert('Бронирование переговорной прошло успешно!');
  };

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Форма бронирования переговорной</h1>

      <form onSubmit={handleSend}>
        <h4>Выбор переговорной</h4>
        <div className={styles.fieldsBoxLine}>
          <SelectBox
            id={'tower'}
            label={"Башня"}
            items={towers}
            value={dataForm.tower}
            onChange={handleChangeData}
          />
          <SelectBox
            id={'floor'}
            label={"Этаж"}
            items={floors}
            value={dataForm.floor}
            onChange={handleChangeData}
          />
          <SelectBox
            id={'numRoom'}
            label={"Номер"}
            items={rooms}
            value={dataForm.numRoom}
            onChange={handleChangeData}
          />
        </div>
        <h4>Выбор времени</h4>
        <div className={styles.fieldsBoxLine}>
          <InputItem
            id={'date'}
            mask={"99.99.9999"}
            label={'Дата'}
            value={dataForm.date}
            onChange={handleChangeData}
          />
          с
          <InputItem
            id={'timeStart'}
            mask={"99:99"}
            label={'Время'}
            value={dataForm.timeStart}
            onChange={handleChangeData}
          />
          до
          <InputItem
            id={'timeEnd'}
            label={'Время'}
            mask={"99:99"}
            value={dataForm.timeEnd}
            onChange={handleChangeData}
          />
        </div>
        <h4>Комментарий</h4>
        <TextField
          id={'comment'}
          label={'Напишите что-нибудь...'}
          multiline
          rows={4}
          value={dataForm.comment}
          onChange={handleChangeData}
          fullWidth
          style={{marginBottom: "25px"}}
        />
        <div className={styles.buttonsBlock}>
          <Button
            variant={'contained'}
            style={{marginRight: "50px"}}
            type={'submit'}
          >
            Отправить
          </Button>
          <Button variant={'contained'} onClick={handleClean}>Очистить</Button>
        </div>
      </form>
    </div>
  );
}

export default App;

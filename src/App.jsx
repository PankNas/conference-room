import React, {useState} from "react";
import styles from "./App.module.css";
import SelectBox from "./components/SelectBox";
import InputItem from "./components/InputItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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

function App() {
  const [dataForm, setDataForm] = useState(defaultData);

  const handleChangeData = (event) => setDataForm({...dataForm, [event.target.id]: event.target.value});

  const handleClean = () => setDataForm(defaultData);
  const handleSend = (event) => {
    event.preventDefault();

    console.log(dataForm);
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
            value={dataForm.timeStart}
            onChange={handleChangeData}
          />
          до
          <InputItem
            id={'timeEnd'}
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

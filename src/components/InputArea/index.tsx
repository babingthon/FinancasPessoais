import { useState } from "react";
import * as C from "./styles";
import { categories } from '../../data/categories';
import { Item } from '../../types/Item'

type Props = {
  onAdd: (item: Item) => void
}

export const InputArea = ({ onAdd }: Props) => {

    const [dateField, setDateField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [titleField, setTitleField] = useState('');
    const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);
  
  const handleAddEvent = () => {
    let newItem: Item = {
      date: new Date(dateField),
      category: categoryField,
      title: titleField,
      value: valueField,
    };

    onAdd(newItem);
    cleanFields();
  }

  const cleanFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
  }

    return (
      <C.Container>
        <C.InputLabel>
          <C.InputTitle>Data</C.InputTitle>
          <C.Input
            type="date"
            value={dateField}
            onChange={(e) => setDateField(e.target.value)}
          />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Categoria</C.InputTitle>
          <C.Select
            value={categoryField}
            onChange={(e) => setCategoryField(e.target.value)}
          >
            <>
              <option></option>
              {categoryKeys.map((key, index) => (
                <option key={index} value={key}>
                  {categories[key].title}
                </option>
              ))}
            </>
          </C.Select>
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Titulo</C.InputTitle>
          <C.Input
            type="text"
            value={titleField}
            onChange={(e) => setTitleField(e.target.value)}
          />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Valor</C.InputTitle>
          <C.Input
            type="text"
            value={valueField}
            onChange={(e) => setValueField(parseFloat(e.target.value))}
          />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>&nbsp;</C.InputTitle>
          <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
        </C.InputLabel>
      </C.Container>
    );

}
import { Card } from 'antd';
import { useEffect, useState } from 'react';
import { supabase } from '../Client';

const Mapeo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const { data: response, error } = await supabase.from('articulos').select('*');
      if (error) {
        console.error(error);
      } else {
        setData(response);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) => item.precio === '500'); //esta funcion filtra los datos haciendo match con la propiedad y el valor que le pasemos

  return (
    <div>
      {filteredData.map((item) => (
        <Card key={item.id}>
            <p>{item.nombre}</p>
            <p>{item.precio}</p>
        </Card>
      ))}
    </div>
  );
};

export default Mapeo;

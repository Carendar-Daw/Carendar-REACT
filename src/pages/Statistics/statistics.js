import React, { useState } from 'react';
import { DatePicker } from 'antd';
import axios from '@Commons/http';
import Spinner from '@Commons/components/presentational/Spinner/Spinner';
import { error, success } from '@Commons/components/presentational/MessagesApp/Messages';
import { WrapperStatistics, FlexWrapper, WrapperDateRange, Title, SubTitle } from './statistics.styled';
import PieStatistics from './pie/PieStatistics';
import VerticalBar from './verticalStatistics/VerticalStatistics';
import ClientsStatistics from './clients/clientsStatistics';
import ProductsStatistics from './products/ProductStatistics';

const dateFormat = 'YYYY/MM/DD HH:mm:ss';

const Statistics = () => {
  const [servicesByAppointment, setServicesByAppointment] = useState(null);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [clients, setClients] = useState(null);
  const [products, setProducts] = useState(null);
  const [isDataPie, setIsDataPie] = useState(false);
  const { RangePicker } = DatePicker;

  const handleDateRange = async (dateString) => {
    try {
      if(dateString){
        setServicesByAppointment(false);
        setClients(null);
        setLoadingSpinner(true);
        const statistics = await axios.post('statistics', { minTime: dateString[0], maxTime: dateString[1] });
        if (statistics.data.servicesPie.length !== 0) {
          setServicesByAppointment({
            labels: statistics.data.servicesPie.map((service) => service.ser_description),
            data: statistics.data.servicesPie.map((service) => service.numTotal),
          });
          setIsDataPie(true);
        }else {
          setIsDataPie(false);
        }
        setProducts(statistics.data.products.Total);
        setClients(statistics.data.customer.numTotal);
        success('Estadisticas obtenidas correctamente');
      }
    } catch (errors) {
      error('Error al obtener historial');
    } finally {
      setLoadingSpinner(false);
    }
  };

  return (
    <WrapperStatistics>
      {loadingSpinner && <Spinner />}
      <FlexWrapper>
        <WrapperDateRange>
          <Title>Select a Range date</Title>
          <SubTitle>See your saloon data from some dates</SubTitle>
          <RangePicker
            format={dateFormat}
            onChange={handleDateRange}
          />
        </WrapperDateRange>
        <ClientsStatistics
          clients={clients}
          loadingSpinner={loadingSpinner}
        />
        <ProductsStatistics
            products={products}
            loadingSpinner={loadingSpinner}
        />
      </FlexWrapper>
      <FlexWrapper>
        <VerticalBar />
        <PieStatistics
          servicesByAppointment={servicesByAppointment}
          loadingSpinner={loadingSpinner}
          isDataPie={isDataPie}
        />
      </FlexWrapper>
    </WrapperStatistics>
  );
};

export default Statistics;

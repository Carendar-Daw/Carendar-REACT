import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '@Commons/http';
import { getSaloonPicture } from '@Application/store/user/reducer';
import {
  WrapperConfiguration,
  WrapperTitle,
  TitlePage,
  WrapperPhoto,
  WrapperInfo,
  WrapperSection,
  ImgSaloon,
  WrapperForm,
  WrapperLanguage,
  Input,
} from './Configuration.styled';
import Language from './Language/Languaje';
import { error, success } from '@Commons/components/presentational/MessagesApp/Messages';
import Spinner from '@Commons/components/presentational/Spinner/Spinner';

const initialConfig = {
  sal_email: null,
  sal_brand: null,
  sal_location: null,
  sal_name: '',
  sal_phone: null,
};

const Configuration = () => {
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [config, setConfig] = useState(initialConfig);
  const saloonPicture = useSelector(getSaloonPicture);

  useEffect(async () => {
    const saloon = await axios.get('saloon');
    setConfig(saloon.data.saloon);
  }, []);

  const buildConfig = (field, { target: { value } }) => {
    setConfig({ ...config, [field]: value });
  };

  const updateConfig = async (evt) => {
    try {
      evt.preventDefault();
      setLoadingSpinner(true);
      const updatedConfig = await axios.put('saloon', config);
      console.log(updatedConfig);

      success('Configuracion Modificada correctamente');
    } catch (errors) {
      error('Error al Modificar tu configuracion');
    } finally {
      setLoadingSpinner(false);
    }
  };

  return (

    <WrapperConfiguration>
      {loadingSpinner && <Spinner />}
      <WrapperTitle>
        <FontAwesomeIcon className="icon" icon="cog" />
        <TitlePage>Configuration</TitlePage>
      </WrapperTitle>
      <WrapperLanguage>
        <Language />
      </WrapperLanguage>
      <WrapperSection>
        <WrapperPhoto>
          <ImgSaloon src={saloonPicture} />
        </WrapperPhoto>
        <WrapperInfo>
          <WrapperForm onSubmit={updateConfig}>
            <Input type="text" value={config.sal_name} onChange={(e) => buildConfig('sal_name', e)} />
            <Input type="text" value={config.sal_email} disable />
            <Input type="text" value={config.sal_brand} onChange={(e) => buildConfig('sal_brand', e)} />
            <Input type="text" value={config.sal_location} onChange={(e) => buildConfig('sal_location', e)} />
            <Input type="number" value={config.sal_phone} onChange={(e) => buildConfig('sal_phone', e)} />
            <button>Submit</button>
          </WrapperForm>
        </WrapperInfo>
      </WrapperSection>
    </WrapperConfiguration>

  );
};

export default Configuration;

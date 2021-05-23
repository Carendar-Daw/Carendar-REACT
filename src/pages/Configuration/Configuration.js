import React, { useEffect, useState, useContext } from 'react';
import { I18nContext } from '@Application/lang/language';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '@Commons/http';
import { getSaloonPicture } from '@Application/store/user/reducer';
import { error, success } from '@Commons/components/presentational/MessagesApp/Messages';
import Spinner from '@Commons/components/presentational/Spinner/Spinner';
import {ButtonDetails, ButtonUpdate} from '@Pages/Clients/Clients.styled';
import { Space } from 'antd';
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
} from './Configuration.styled';
import Language from './Language/Languaje';

const initialConfig = {
  sal_email: null,
  sal_brand: null,
  sal_location: null,
  sal_name: '',
  sal_phone: null,
};

const Configuration = () => {
  const { messages, language } = useContext(I18nContext);
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

      success(messages[language].UserConfig.ConfigEdit);
    } catch (errors) {
      error(messages[language].UserConfig.ErrorEdit);
    } finally {
      setLoadingSpinner(false);
    }
  };

  return (

    <WrapperConfiguration className="configuration">
      {loadingSpinner && <Spinner />}
      <WrapperTitle>
        <FontAwesomeIcon className="icon" icon="cog" />
        <TitlePage>{messages[language].UserConfig.Title}</TitlePage>
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

            <div className="group">
              <input type="text" required value={config.sal_name} onChange={(e) => buildConfig('sal_name', e)} />
              <span className="highlight" />
              <span className="bar" />
              <label>{messages[language].Stock.Name}</label>

            </div>
            <div className="group">
              <input type="text" value={config.sal_email} disabled />
              <span className="highlight" />
              <span className="bar" />
              <label>Email</label>
            </div>
            <div className="group">
              <input type="text" value={config.sal_brand} onChange={(e) => buildConfig('sal_brand', e)} />
              <span className="highlight" />
              <span className="bar" />
              <label>{messages[language].UserConfig.Brand}</label>
            </div>
            <div className="group">
              <input type="text" value={config.sal_location} onChange={(e) => buildConfig('sal_location', e)} />
              <span className="highlight" />
              <span className="bar" />
              <label>{messages[language].UserConfig.Location}</label>
            </div>
            <div className="group">
              <input type="text" value={config.sal_phone} onChange={(e) => buildConfig('sal_phone', e)} />
              <span className="highlight" />
              <span className="bar" />
              <label>{messages[language].Customers.Phone}</label>
            </div>
            <ButtonUpdate type="submit">
              <FontAwesomeIcon className="icon" icon="save" />
              <span>
                {messages[language].Stock.Submit}
              </span>
            </ButtonUpdate>

          </WrapperForm>
        </WrapperInfo>
      </WrapperSection>
    </WrapperConfiguration>

  );
};

export default Configuration;

import React, {
  useReducer, useState, useEffect, useContext,
} from 'react';
import { useSelector } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { success, error } from '@Commons/components/presentational/MessagesApp/Messages';
import axios from '@Commons/http';
import { getSaloonId } from '@Application/store/user/reducer';
import Spinner from '@Commons/components/presentational/Spinner/Spinner';
import { I18nContext } from '@Application/lang/language';
import {
  TitlePage, WrapperTitle, WrapperTable, WrapperProducts, ButtonAdd, FlexWrapper,
} from './Products.styled';
import { ACTIONS, reducer, inistialStateReducer } from './helpers/helpersProducts';
import Drawer from './Drawer';
import Table from './Table';
import Details from './Details/Details';

const inistialProduct = {
  sto_id: '',
  sto_barcode: '',
  sto_name: '',
  sto_pvp: '',
  sto_amount: '',
};

const Products = () => {
  const { messages, language } = useContext(I18nContext);
  const [theProduct, setProduct] = useState(inistialProduct);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [loadingSkeleton, setLoadingSkeleton] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [getDrawer, setShowDrawer] = useState(false);
  const [details, setDetails] = useState(null);
  const [products, dispatch] = useReducer(reducer, inistialStateReducer);
  const saloonId = useSelector(getSaloonId);

  useEffect(async () => {
    if (saloonId) {
      try {
        setLoadingSpinner(true);
        setLoadingSkeleton(true);
        const getProducts = await axios.get('stock');
        dispatch({ type: ACTIONS.GET_PRODUCTS, payload: getProducts.data.stock });
      } catch (errors) {
        error('Error al cargar los productos');
      } finally {
        setLoadingSkeleton(false);
        setLoadingSpinner(false);
      }
    }
  }, [saloonId]);

  const deleteService = async (id) => {
    try {
      setLoadingSpinner(true);
      await axios.delete(`stock/${id}`);
      dispatch({ type: ACTIONS.DELETE_PRODUCTS, payload: id });
      success('Producto eliminada correctamente');
    } catch (errors) {
      error('Error al eliminar un producto');
    } finally {
      setLoadingSpinner(false);
    }
  };

  const isGoingToDelete = (id) => {
    deleteService(id);
  };

  const buildProduct = (field, { target: { value } }) => {
    setProduct({ ...theProduct, [field]: value, sal_id: saloonId });
  };

  const createProduct = async () => {
    try {
      setLoadingSpinner(true);
      const newProduct = await axios.post('stock', theProduct);
      dispatch({ type: ACTIONS.POST_PRODUCTS, payload: newProduct.data.stock });
      success('Productos creado correctamente');
      setShowDrawer(false);
    } catch (errors) {
      setShowDrawer(false);
      error('Error al crear productos');
    } finally {
      setProduct(inistialProduct);
      setLoadingSpinner(false);
    }
  };

  const updateProduct = async () => {
    try {
      setLoadingSpinner(true);
      const updatedProduct = await axios.put(`stock/${theProduct.sto_id}`, theProduct);
      dispatch({ type: ACTIONS.UPDATE_PRODUCTS, payload: { id: theProduct.sto_id, updatedService: updatedProduct.data.stock } });
      setShowDrawer(false);
      success('Producto Modificado correctamente');
    } catch (errors) {
      error('Error al Modificar producto');
    } finally {
      setProduct(inistialProduct);
      setLoadingSpinner(false);
    }
  };

  const getDetailsProducts = (id) => {
    const [productToShow] = products.filter((prod) => prod.sto_id === id);
    setDetails(productToShow);
  };

  const showDrawerUpdate = (id) => {
    const [productToUpdate] = products.filter((prod) => prod.sto_id === id);
    setProduct({ ...productToUpdate });
    setShowDrawer(true);
    setIsUpdating(true);
  };

  const showDrawer = () => {
    setIsUpdating(false);
    setShowDrawer(true);
  };
  const onClose = () => {
    setShowDrawer(false);
  };

  return (
    <FlexWrapper className="products">
      <WrapperProducts>
        {loadingSpinner && <Spinner />}
        <WrapperTitle>
          <FontAwesomeIcon className="icon" icon="calendar-alt" />
          <TitlePage>{messages[language].Stock.Title}</TitlePage>
        </WrapperTitle>
        <WrapperTable>
          <Table
            showDrawerUpdate={showDrawerUpdate}
            isGoingToDelete={isGoingToDelete}
            products={products}
            loadingSkeleton={loadingSkeleton}
            getDetailsProducts={getDetailsProducts}
          />
        </WrapperTable>
        <ButtonAdd onClick={showDrawer}>
          <PlusOutlined className="buttonAdd" />
        </ButtonAdd>
        <Drawer
          onClose={onClose}
          getDrawer={getDrawer}
          createProduct={createProduct}
          updateProduct={updateProduct}
          buildProduct={buildProduct}
          isUpdating={isUpdating}
          theProduct={theProduct}
        />
      </WrapperProducts>
      <Details details={details} />
    </FlexWrapper>
  );
};

export default Products;

import ApiClient from './ApiClient';
import IdentityAPI from './Identity';
import ArtworkAPi from './Artwork';
import CartAPI from './Cart';
import PaymentAPI from './Payment';
import OrderAPI from './Order';

const ApiSingleton = () => {
  const api = new ApiClient();

  return {
    identity: new IdentityAPI({ apiClient: api }),
    artwork: new ArtworkAPi({ apiClient: api }),
    cart: new CartAPI({ apiClient: api }),
    payment: new PaymentAPI({ apiClient: api }),
    order: new OrderAPI({ apiClient: api })
  };
};

export default ApiSingleton();

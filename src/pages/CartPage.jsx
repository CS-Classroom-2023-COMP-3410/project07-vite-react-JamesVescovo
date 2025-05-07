import ShoppingCart from '../components/ShoppingCart';

export default function CartPage({ cart, onRemove }) {
    return (
        <div>
            <h1>Your Cart</h1>
            <ShoppingCart cart={cart} onRemove={onRemove} showFullCart={true} />
        </div>
    );
}
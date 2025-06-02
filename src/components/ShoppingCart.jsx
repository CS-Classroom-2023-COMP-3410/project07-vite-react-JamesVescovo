// components/ShoppingCart.jsx
export default function ShoppingCart({ cart, onRemove }) {

    const items =  cart.reduce((total, item) => total + item.quantity, 0);

    if (items === 0) {
        return null;
    } //cart.reduce() 

    const price = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div style={{
            padding: '15px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px', 
            alignItems: 'center'
        }}>
            <h2>Shopping Cart</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: '10px',
                    }}>
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <p>{item.quantity}</p>
                        <button onClick={() => onRemove(item.id)} style={{
                            backgroundColor: 'red',
                            color: 'white',
                            padding: '5px'
                        }}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>Total</h3>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px',
                color: 'white',
                width: '100%',
                backgroundColor: 'green',
            }}>
            
            <p>Items: {items}</p>
            <p>Cost: ${price.toFixed(2)}</p>
        </div>
        </div>
    );
}

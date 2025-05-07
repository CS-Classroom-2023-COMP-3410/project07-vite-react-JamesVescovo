export default function ShoppingCart({ cart, onRemove, showFullCart = false }) {
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    if (totalItems === 0) return null;

    return (
        <div style={{
            width: showFullCart ? '100%' : '300px',
            padding: '15px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            alignSelf: 'flex-start'
        }}>
            <h3>{showFullCart ? 'Your Shopping Cart' : 'Shopping Cart'}</h3>

            <ul style={{ padding: 0, listStyle: 'none' }}>
                {cart.map(item => (
                    <li key={item.id} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '8px 0',
                        borderBottom: '1px solid #ddd'
                    }}>
                        <div>
                            <strong>{item.title}</strong> × {item.quantity}
                            <div>${item.price * item.quantity}</div>
                        </div>
                        <button
                            onClick={() => onRemove(item.id)}
                            style={{
                                background: '#dc3545',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                padding: '5px 10px',
                                cursor: 'pointer'
                            }}
                        >
                            −
                        </button>
                    </li>
                ))}
            </ul>

            <div style={{
                marginTop: '15px',
                padding: '10px 0',
                borderTop: '2px solid #ddd',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <strong>Total:</strong>
                <strong>${totalPrice}</strong>
            </div>

            {showFullCart && (
                <button
                    onClick={() => alert(`Checkout completed for $${totalPrice}!`)}
                    style={{
                        background: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '10px',
                        width: '100%',
                        marginTop: '10px',
                        cursor: 'pointer'
                    }}
                >
                    Checkout
                </button>
            )}
        </div>
    );
}